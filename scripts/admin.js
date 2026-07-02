/**
 * 灵见科技官网 - 管理员面板（Connect 中间件方式）
 * 支持：登录认证 / 修改头像URL / 上传头像图片
 */

'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ===== 配置 =====
// 管理员密码哈希（MD5）。默认密码 gclink2026
const ADMIN_HASH = '89c5b8897702d52a7925a2091470f991';
const ADMIN_DATA_FILE = 'C:\\Users\\小软\\projects\\gclink-vr\\source\\_data\\admin.json';
const BUTTERFLY_CONFIG = 'C:\\Users\\小软\\projects\\gclink-vr\\_config.butterfly.yml';
const PROJECT_ROOT = 'C:\\Users\\小软\\projects\\gclink-vr';

// 确保 _data 目录存在
const dataDir = path.join(PROJECT_ROOT, 'source', '_data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(ADMIN_DATA_FILE)) {
  fs.writeFileSync(ADMIN_DATA_FILE, JSON.stringify({ token: '' }), 'utf8');
}

// ===== 辅助函数 =====
function getAdminData() {
  return JSON.parse(fs.readFileSync(ADMIN_DATA_FILE, 'utf8'));
}
function setAdminData(d) {
  fs.writeFileSync(ADMIN_DATA_FILE, JSON.stringify(d), 'utf8');
}
function getCurrentLogo() {
  if (!fs.existsSync(BUTTERFLY_CONFIG)) return '';
  const content = fs.readFileSync(BUTTERFLY_CONFIG, 'utf8');
  const match = content.match(/^\s*logo:\s*(.+)/m);
  return match ? match[1].trim() : '';
}
function setLogo(logoPath) {
  let content = fs.existsSync(BUTTERFLY_CONFIG) ? fs.readFileSync(BUTTERFLY_CONFIG, 'utf8') : '';
  const lines = content.split('\n');
  let found = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^nav:\s*$/) || lines[i].match(/^nav:/)) {
      for (let j = i; j < Math.min(i + 20, lines.length); j++) {
        if (lines[j].match(/^\s+logo:\s*/)) {
          lines[j] = `  logo: ${logoPath}`;
          found = true;
          break;
        }
      }
      if (!found) {
        // 找到 nav: 所在行，在其后插入 logo
        const navIdx = lines.findIndex((l, idx) => idx >= i && (l.match(/^nav:\s*$/) || (idx > i && !l.startsWith(' ') && l.trim() !== '')));
        if (navIdx > i) {
          lines.splice(navIdx, 0, '  logo: ' + logoPath);
        } else {
          lines.push('nav:', '  logo: ' + logoPath);
        }
      }
      break;
    }
  }
  if (!found) {
    content += '\n\nnav:\n  logo: ' + logoPath + '\n';
  }
  fs.writeFileSync(BUTTERFLY_CONFIG, content, 'utf8');
}

// ===== HTML 模板 =====
function pageHtml(opts) {
  const { isLogin, error, msg, logo } = opts;
  const siteTitle = '灵见科技';
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${isLogin ? '管理面板' : '管理员登录'} - ${siteTitle}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f0f2f5;min-height:100vh;display:flex;align-items:center;justify-content:center}
.card{background:#fff;border-radius:14px;box-shadow:0 4px 24px rgba(0,0,0,.1);padding:40px;width:480px;max-width:95vw}
h1{font-size:22px;margin-bottom:6px;color:#1a1a2e}
.subtitle{color:#888;font-size:13px;margin-bottom:28px}
.error{background:#fef2f2;color:#dc2626;border:1px solid #fecaca;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:14px}
.success{background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:14px}
label{display:block;font-size:13px;color:#555;margin-bottom:7px;font-weight:500}
input{width:100%;padding:10px 14px;border:1.5px solid #ddd;border-radius:8px;font-size:14px;transition:border-color .2s;outline:none}
input:focus{border-color:#6366f1}
input[type=file]{padding:8px 0;border:none}
.btn{display:inline-block;padding:10px 20px;border-radius:8px;font-size:14px;cursor:pointer;border:none;font-weight:600;transition:all .2s;text-align:center;text-decoration:none}
.btn-primary{background:#6366f1;color:#fff;width:100%;margin-top:18px}
.btn-primary:hover{background:#4f46e5}
.btn-green{background:#16a34a;color:#fff;flex:1}
.btn-green:hover{background:#15803d}
.btn-red{background:#ef4444;color:#fff;flex:1}
.btn-red:hover{background:#dc2626}
.btn-gray{background:#f3f4f6;color:#555;flex:1}
.btn-gray:hover{background:#e5e7eb}
.preview-box{margin:16px 0;padding:24px;border:2px dashed #e5e7eb;border-radius:12px;text-align:center;background:#fafafa}
.avatar-img{width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid #6366f1;display:block;margin:0 auto 10px}
.placeholder{width:80px;height:80px;border-radius:50%;background:#f3f4f6;border:3px dashed #d1d5db;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#d1d5db}
.no-img{color:#aaa;font-size:13px}
.cur-path{font-size:12px;color:#888;margin-top:8px;word-break:break-all}
.section{margin-top:24px;padding-top:24px;border-top:1px solid #f0f0f0}
.section-title{font-size:14px;font-weight:600;margin-bottom:14px;color:#333}
.actions{display:flex;gap:10px;margin-top:14px}
.or{text-align:center;color:#ccc;font-size:12px;margin:14px 0;position:relative}
.or::before,.or::after{content:'';position:absolute;top:50%;width:38%;height:1px;background:#e5e7eb}
.or::before{left:0}.or::after{right:0}
.tip{font-size:12px;color:#aaa;margin-top:8px}
.nav{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid #eee}
.nav-brand{font-weight:700;font-size:15px;color:#1a1a2e;text-decoration:none}
.nav-link{font-size:12px;color:#6366f1;text-decoration:none}
.nav-link:hover{text-decoration:underline}
.logout-row{text-align:center;margin-top:20px;padding-top:16px;border-top:1px solid #f0f0f0}
.hidden{display:none}
</style>
</head>
<body>
<div class="card">
${isLogin ? loggedInHtml(error, msg, logo) : loginHtml(error)}
</div>
<script>
// 实时预览 URL
function prevUrl(f){
  var url=f.value;
  var box=document.getElementById('prevBox');
  var txt=document.getElementById('prevTxt');
  if(url){
    box.innerHTML='<img src="'+url+'" class="avatar-img" id="prevImg" onerror="this.style.display=\\'none\\';txt.style.display=\\'block\\'">';
    txt.style.display='none';
  } else {
    box.innerHTML='<div class=placeholder>?</div>';
    txt.style.display='block';
  }
}
// 上传图片
function doUpload(fileInput){
  if(!fileInput.files[0])return;
  var fd=new FormData();
  fd.append('file',fileInput.files[0]);
  fetch('/admin/upload',{method:'POST',body:fd})
    .then(r=>r.json())
    .then(d=>{
      if(d.ok){
        document.getElementById('urlIn').value=d.path;
        document.getElementById('uploadMsg').textContent='已上传！已自动填入上方输入框，点击保存即可';
        document.getElementById('uploadMsg').style.color='#16a34a';
        prevUrl({value:d.path});
      } else {
        alert('上传失败：'+d.msg);
      }
    })
    .catch(e=>alert('上传失败'));
}
</script>
</body>
</html>`;
}

function loginHtml(error) {
  return `
  <h1>🔐 管理登录</h1>
  <p class="subtitle">江西灵见虚拟现实科技有限公司</p>
  ${error ? `<div class="error">${error}</div>` : ''}
  <form method="POST" action="/admin/login">
    <label for="pw">管理员密码</label>
    <input type="password" id="pw" name="password" placeholder="请输入密码" required autofocus>
    <button type="submit" class="btn btn-primary">登 录</button>
  </form>
  <a href="/" class="btn" style="display:block;text-align:center;margin-top:12px;background:#f3f4f6;color:#555;font-weight:500">
    ← 返回首页
  </a>
  <p class="tip">* 首次使用请在 scripts/admin.js 中修改默认密码</p>`;
}

function loggedInHtml(error, msg, logo) {
  const preview = logo
    ? `<img src="${logo}" class="avatar-img" id="prevImg" onerror="this.style.display='none';document.getElementById('prevTxt').style.display='block'">`
    : `<div class="placeholder">?</div>`;
  return `
  <div class="nav">
    <a href="/" class="nav-brand">🌐 灵见科技</a>
    <a href="/admin/logout" class="nav-link">退出登录</a>
  </div>
  <h1>⚙️ 管理员面板</h1>
  <p class="subtitle">修改网站 Logo / 头像</p>
  ${error ? `<div class="error">${error}</div>` : ''}
  ${msg ? `<div class="success">${msg}</div>` : ''}

  <div class="section">
    <div class="section-title">📷 当前头像预览</div>
    <div class="preview-box">
      ${preview}
      <div class="no-img" id="prevTxt" ${logo ? "style='display:none'" : ''}>暂无头像</div>
      ${logo ? `<div class="cur-path">路径：${logo}</div>` : ''}
    </div>
  </div>

  <div class="section">
    <div class="section-title">🔗 方式一：填写图片链接</div>
    <form method="POST" action="/admin/save">
      <label for="urlIn">图片地址（URL）</label>
      <input type="url" id="urlIn" name="logo_url" placeholder="https://example.com/avatar.jpg" oninput="prevUrl(this)">
      <div class="actions">
        <button type="submit" class="btn btn-primary" style="flex:1">💾 保存头像</button>
      </div>
    </form>
  </div>

  <div class="or">或</div>

  <div class="section">
    <div class="section-title">📁 方式二：上传本地图片</div>
    <label>选择图片文件（JPG / PNG / GIF）</label>
    <input type="file" accept="image/*" onchange="doUpload(this)">
    <div id="uploadMsg" class="tip"></div>
    <p class="tip">上传后图片地址会自动填入上方输入框，再点「保存头像」即可</p>
  </div>

  <div class="section">
    <div class="section-title">🔄 重新生成网站</div>
    <p style="font-size:13px;color:#666;margin-bottom:12px">保存头像后，需要重新生成网站才能看到效果。</p>
    <a href="/admin/regen" class="btn btn-green">🔄 重新生成网站</a>
  </div>

  <div class="logout-row">
    <a href="/admin/logout" class="btn btn-red" style="width:100%">🚪 退出登录</a>
  </div>`;
}

// ===== 重新生成等待页 =====
function regenWaitPage(initialLog, done, ok, exitCode) {
  const title = done ? (ok ? '✅ 生成完成！' : '⚠️ 生成失败') : '🔄 正在重新生成网站...';
  const sub = done ? (ok ? '正在跳转首页...' : '退出码: ' + exitCode + '，请检查日志') : '约需 5-30 秒，请勿关闭页面';
  const spinner = done ? '' : '<span class="spinner"></span>';
  const safeLog = initialLog ? initialLog.replace(/[<>&]/g, function(c) { return ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]); }) : '';
  const autoScript = (done && ok) ? '<script>setTimeout(function(){location.href="/"},3000)</scr' + 'ipt>' : '';
  const pollScript = done ? '' : '<scr' + 'ipt>function upd(){fetch("/admin/regen_status").then(function(r){return r.text()}).then(function(d){try{var st=JSON.parse(d);document.getElementById("log").textContent=st.log||"";if(st.running===false&&st.done){var o=st.code===0;document.getElementById("title").innerHTML=(o?"✅ ":"⚠️ ")+(o?"生成完成！":"生成失败");document.getElementById("sub").textContent=o?"正在跳转首页...":"退出码: "+st.code;if(o){setTimeout(function(){location.href="/"},3000);}else{setTimeout(function(){location.reload()},3000);}return;}}catch(e){}setTimeout(upd,1500);}).catch(function(){setTimeout(upd,2000);});}setTimeout(upd,800);</scr' + 'ipt>';

  return '<!DOCTYPE html>\n'
    + '<html lang="zh-CN">\n'
    + '<head><meta charset="UTF-8"><title>' + title + ' - 灵见科技</title>\n'
    + '<style>\n'
    + 'body{font-family:-apple-system,sans-serif;background:#f0f2f5;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}\n'
    + '.card{background:#fff;border-radius:14px;padding:40px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,.1);width:560px;max-width:95vw}\n'
    + 'h2{color:#1a1a2e;margin-bottom:8px;font-size:22px}\n'
    + 'p{color:#888;font-size:14px}\n'
    + '.log{background:#1a1a2e;color:#a5f3fc;padding:16px;border-radius:8px;font-size:12px;text-align:left;max-height:380px;overflow:auto;white-space:pre-wrap;margin-top:16px;line-height:1.5}\n'
    + 'a{color:#6366f1;text-decoration:none;display:inline-block;margin-top:16px;padding:8px 20px;border:1px solid #6366f1;border-radius:8px}\n'
    + 'a:hover{background:#6366f1;color:#fff}\n'
    + '.spinner{display:inline-block;width:20px;height:20px;border:3px solid #e0e7ff;border-top-color:#6366f1;border-radius:50%;animation:spin 1s linear infinite;vertical-align:middle;margin-right:8px}\n'
    + '@keyframes spin{to{transform:rotate(360deg)}}\n'
    + '</style></head>\n'
    + '<body><div class="card">\n'
    + '  <h2 id="title">' + spinner + title + '</h2>\n'
    + '  <p id="sub">' + sub + '</p>\n'
    + '  <div class="log" id="log">' + safeLog + '</div>\n'
    + '  <a href="/admin/">← 返回管理面板</a>\n'
    + '  ' + autoScript + '\n'
    + '</div>\n'
    + pollScript + '\n'
    + '</body></html>';
}

// ===== Connect 中间件：解析 POST body =====
function parseBody(req, res, next) {
  if (req.method !== 'POST') { next(); return; }
  const ct = req.headers['content-type'] || '';
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
      req.body = body;
    }
    next();
  });
}

// ===== Connect 中间件：路由 =====
function adminRouter(req, res, next) {
  const url = req.url.split('?')[0];
  const pathname = url.split('#')[0];

  // 拦截 /admin/ 开头的请求
  if (!pathname.startsWith('/admin') && pathname !== '/admin') {
    return next();
  }

  const admin = getAdminData();
  const isAuth = admin.token && admin.token.length > 0;

  // ===== 静态页面路由 =====
  if (pathname === '/admin' || pathname === '/admin/' || pathname === '/admin/index.html') {
    const html = pageHtml({ isLogin: isAuth, logo: getCurrentLogo() });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
    return;
  }

  // ===== 登录 =====
  if (pathname === '/admin/login' && req.method === 'POST') {
    const params = new URLSearchParams(req.body || '');
    const pw = params.get('password') || '';
    const hash = crypto.createHash('md5').update(pw).digest('hex');
    if (hash === ADMIN_HASH) {
      setAdminData({ token: hash, ts: Date.now() });
    }
    res.setHeader('Location', '/admin/');
    res.statusCode = 302;
    res.end();
    return;
  }

  // ===== 登出 =====
  if (pathname === '/admin/logout' && req.method === 'GET') {
    setAdminData({ token: '' });
    res.setHeader('Location', '/admin/');
    res.statusCode = 302;
    res.end();
    return;
  }

  // ===== 需要认证的接口 =====
  if (!isAuth) {
    res.setHeader('Location', '/admin/');
    res.statusCode = 302;
    res.end();
    return;
  }

  // ===== 保存头像 =====
  if (pathname === '/admin/save' && req.method === 'POST') {
    const params = new URLSearchParams(req.body || '');
    const logo = params.get('logo_url') || '';
    if (logo) {
      setLogo(logo);
    }
    const html = pageHtml({
      isLogin: true,
      logo: logo || getCurrentLogo(),
      msg: logo ? '✅ 头像已保存！请点击「重新生成网站」查看效果。' : '⚠️ 请输入有效的图片链接。'
    });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
    return;
  }

  // ===== 重新生成 =====
  if (pathname === '/admin/regen' && req.method === 'GET') {
    const statusFile = path.join(PROJECT_ROOT, 'source', '_data', 'regen_status.json');

    // 如果已有进程在运行，显示等待页
    if (fs.existsSync(statusFile)) {
      try {
        const st = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
        if (st.running) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(regenWaitPage(st.log || '', false));
          return;
        } else if (st.done) {
          // 上次生成已完成，直接显示结果
          const ok = st.code === 0;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(regenWaitPage(st.log || '', true, ok, st.code));
          return;
        }
      } catch(e) {}
    }

    // 启动 hexo generate，写入状态文件
    const logFile = path.join(PROJECT_ROOT, 'source', '_data', 'regen_log.txt');
    fs.writeFileSync(statusFile, JSON.stringify({ running: true, start: Date.now(), log: '' }), 'utf8');
    fs.writeFileSync(logFile, '', 'utf8');

    const npmGlobalDir = 'C:\\Users\\小软\\AppData\\Roaming\\QClaw\\npm-global';
    const nodeBinDir = 'C:\\Program Files\\QClaw\\v0.2.30.594\\resources\\openclaw\\config\\bin\\node';
    const hexoCmd = npmGlobalDir + '\\hexo.cmd';
    const cleanPath = [
      'C:\\WINDOWS\\system32', 'C:\\WINDOWS',
      'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\',
      npmGlobalDir, nodeBinDir
    ].join(';');
    const { spawn } = require('child_process');

    const appendLog = (line) => {
      try {
        const st = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
        st.log = (st.log || '') + line;
        fs.writeFileSync(statusFile, JSON.stringify(st), 'utf8');
      } catch(e) {}
    };

    const ps = spawn('cmd.exe', ['/c', hexoCmd + ' clean && ' + hexoCmd + ' g'], {
      cwd: PROJECT_ROOT,
      env: { ...process.env, PATH: cleanPath },
      stdio: ['ignore', 'pipe', 'pipe']
    });

    let out = '';
    ps.stdout.on('data', d => {
      const line = d.toString();
      out += line;
      appendLog(line);
    });
    ps.stderr.on('data', d => {
      const line = d.toString();
      out += line;
      appendLog(line);
    });
    ps.on('close', code => {
      const st = { running: false, code, done: Date.now(), log: out };
      fs.writeFileSync(statusFile, JSON.stringify(st), 'utf8');
      // 重启 hexo server（如果是本地预览）
      console.log(`[admin] 网站重新生成完成，退出码: ${code}`);
    });

    // 立即返回等待页
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(regenWaitPage('', false));
    return;
  }

  // ===== 生成状态（轮询接口） =====
  if (pathname === '/admin/regen_status') {
    const statusFile = path.join(PROJECT_ROOT, 'source', '_data', 'regen_status.json');
    if (fs.existsSync(statusFile)) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(fs.readFileSync(statusFile, 'utf8'));
    } else {
      res.end('{}');
    }
    return;
  }

  // ===== 文件上传 =====
  if (pathname === '/admin/upload' && req.method === 'POST') {
    const ct = req.headers['content-type'] || '';
    const boundary = ct.match(/boundary=(.+)/);
    if (!boundary) { res.end(JSON.stringify({ ok: false, msg: 'no boundary' })); return; }

    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      try {
        const buf = Buffer.concat(chunks);
        const parts = buf.toString('binary').split('--' + boundary[1]);
        let fileData = null, fileName = '';
        for (const p of parts) {
          if (p.includes('filename="')) {
            const m = p.match(/filename="([^"]+)"/);
            if (m) {
              fileName = m[1];
              const end = p.indexOf('\r\n\r\n');
              let body = p.substring(end + 4);
              if (body.endsWith('\r\n')) body = body.slice(0, -2);
              fileData = Buffer.from(body, 'binary');
              break;
            }
          }
        }
        if (!fileData) { res.end(JSON.stringify({ ok: false, msg: '解析失败' })); return; }

        const ext = path.extname(fileName) || '.png';
        const saveName = `avatar_${Date.now()}${ext}`;
        const imgDir = path.join(PROJECT_ROOT, 'source', 'images');
        if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
        fs.writeFileSync(path.join(imgDir, saveName), fileData);
        res.end(JSON.stringify({ ok: true, path: '/images/' + saveName }));
      } catch(e) {
        res.end(JSON.stringify({ ok: false, msg: e.message }));
      }
    });
    return;
  }

  next();
}

// 注册到 Hexo 服务器中间件（Connect app）
hexo.extend.filter.register('server_middleware', function(app) {
  // 添加 body parser 中间件
  app.use(parseBody);
  // 添加路由中间件
  app.use(adminRouter);
});

console.log('[admin] 管理员插件已加载（Connect 中间件模式）');
