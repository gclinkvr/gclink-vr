---
title: 灵见科技 - VR/AR内容开发专家
layout: false
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>灵见科技 | VR/AR内容开发专家</title>
<meta name="description" content="江西灵见虚拟现实科技有限公司，专注VR/AR内容开发、元宇宙内容定制、沉浸式体验解决方案。">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;line-height:1.6;background:#fff}
a{text-decoration:none;color:inherit}

/* Hero */
.hero{
  background:linear-gradient(135deg,#e0f2fe 0%,#bae6fd 50%,#e0f2fe 100%);
  padding:100px 24px 80px;
  text-align:center;
  color:#0c4a6e;
  position:relative;
  overflow:hidden;
}
.hero::before{
  content:'';
  position:absolute;inset:0;
  background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230c4a6e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events:none;
}
.hero-inner{max-width:780px;margin:0 auto;position:relative;z-index:1;}
.hero-badge{display:inline-block;background:rgba(14,165,233,0.12);border:1px solid rgba(14,165,233,0.3);color:#0284c7;font-size:13px;padding:5px 16px;border-radius:50px;margin-bottom:20px;letter-spacing:1px;}
.hero h1{font-size:52px;font-weight:800;line-height:1.2;margin-bottom:16px;letter-spacing:-1px;color:#0c4a6e;}
.hero h1 span{background:linear-gradient(90deg,#0ea5e9,#0284c7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-desc{font-size:19px;color:#0369a1;max-width:560px;margin:0 auto 36px;line-height:1.7;}
.hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
.hero-btn{padding:13px 30px;border-radius:50px;font-size:15px;font-weight:600;transition:all 0.3s;display:inline-block;}
.hero-btn-primary{background:#0ea5e9;color:#fff;}
.hero-btn-primary:hover{background:#0284c7;transform:translateY(-2px);box-shadow:0 8px 25px rgba(14,165,233,0.35);}
.hero-btn-outline{border:2px solid #0ea5e9;color:#0284c7;}
.hero-btn-outline:hover{border-color:#0284c7;background:rgba(14,165,233,0.08);transform:translateY(-2px);}

/* Stats */
.stats{background:linear-gradient(135deg,#0ea5e9,#38bdf8);padding:50px 24px;color:#fff;}
.stats-grid{max-width:800px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;}
.stat-item h2{font-size:42px;font-weight:800;margin-bottom:4px;}
.stat-item p{font-size:13px;opacity:0.9;letter-spacing:0.5px;}

/* Services */
.section{padding:70px 24px;}
.section-title{text-align:center;font-size:30px;font-weight:700;margin-bottom:10px;color:#0c4a6e;}
.section-title-sub{text-align:center;color:#64748b;font-size:15px;margin-bottom:44px;}
.section-title::after{content:'';display:block;width:56px;height:4px;background:linear-gradient(90deg,#0ea5e9,#38bdf8);margin:12px auto 0;border-radius:2px;}
.svc-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;}
.svc-card{background:#fff;border-radius:16px;padding:36px 28px;text-align:center;box-shadow:0 4px 20px rgba(14,165,233,0.08);border:1px solid #e0f2fe;transition:all 0.3s;}
.svc-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(14,165,233,0.15);border-color:#0ea5e9;}
.svc-icon{font-size:52px;margin-bottom:16px;display:block;}
.svc-card h3{font-size:18px;margin-bottom:10px;color:#0c4a6e;}
.svc-card p{font-size:14px;color:#64748b;line-height:1.75;}
.svc-link{display:inline-block;margin-top:16px;color:#0ea5e9;font-weight:600;font-size:13px;}
.svc-link:hover{color:#0284c7;}

/* About teaser */
.about-teaser{background:#f0f9ff;padding:70px 24px;}
.about-inner{max-width:760px;margin:0 auto;text-align:center;}
.about-inner p{font-size:17px;line-height:2;color:#475569;margin-bottom:28px;}
.about-btn{display:inline-block;padding:12px 28px;background:#0ea5e9;color:#fff;border-radius:8px;font-weight:600;font-size:14px;transition:background 0.2s;}
.about-btn:hover{background:#0284c7;}

/* Latest posts */
.posts-grid{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;}
.post-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(14,165,233,0.07);border:1px solid #e0f2fe;transition:all 0.3s;display:flex;flex-direction:column;}
.post-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(14,165,233,0.12);}
.post-card-body{padding:24px;flex:1;display:flex;flex-direction:column;}
.post-card h3{font-size:16px;margin-bottom:10px;line-height:1.4;color:#0c4a6e;}
.post-card h3 a:hover{color:#0ea5e9;}
.post-card p{font-size:13px;color:#64748b;line-height:1.7;flex:1;}
.post-card-footer{margin-top:14px;padding-top:14px;border-top:1px solid #e0f2fe;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#94a3b8;}
.post-tag{background:#e0f2fe;color:#0284c7;padding:3px 10px;border-radius:50px;font-size:11px;}
.more-link{color:#0ea5e9;font-weight:600;font-size:13px;margin-top:16px;display:inline-block;}
.more-link:hover{color:#0284c7;}

/* CTA */
.cta{background:linear-gradient(135deg,#0369a1,#0ea5e9);padding:70px 24px;text-align:center;color:#fff;}
.cta h2{font-size:30px;font-weight:700;margin-bottom:14px;}
.cta p{font-size:16px;opacity:0.9;margin-bottom:30px;max-width:500px;margin-left:auto;margin-right:auto;}
.cta-btn{display:inline-block;padding:14px 36px;background:#fff;color:#0284c7;border-radius:50px;font-size:15px;font-weight:700;transition:all 0.3s;}
.cta-btn:hover{background:#f0f9ff;transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,0.15);}

/* Footer */
footer{background:#0c4a6e;padding:32px 24px;color:rgba(255,255,255,0.6);font-size:13px;}
footer .footer-inner{max-width:900px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:30px;}
footer .footer-brand h3{color:#fff;font-size:16px;margin-bottom:8px;}
footer .footer-brand p{line-height:1.8;}
footer .footer-col h4{color:#fff;font-size:13px;margin-bottom:10px;letter-spacing:1px;}
footer .footer-col a{display:block;color:rgba(255,255,255,0.6);margin-bottom:6px;font-size:13px;transition:color 0.2s;}
footer .footer-col a:hover{color:#fff;}
footer .footer-bottom{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.1);text-align:center;font-size:12px;}
footer a{color:rgba(255,255,255,0.7);}
footer a:hover{color:#fff;}

@media(max-width:768px){
  .hero h1{font-size:32px;}
  .hero-desc{font-size:16px;}
  .stats-grid{grid-template-columns:repeat(2,1fr);}
  .stat-item h2{font-size:30px;}
  .section{padding:50px 20px;}
  .svc-grid{grid-template-columns:1fr;}
  .posts-grid{grid-template-columns:1fr;}
}
</style>
</head>
<body>

<!-- Hero -->
<section class="hero">
<div class="hero-inner">
<div class="hero-badge">🌐 VR / AR / 元宇宙</div>
<h1>用<span>虚拟</span>改变真实世界</h1>
<p class="hero-desc">江西灵见虚拟现实科技有限公司，专注VR/AR内容开发与定制，为企业打造沉浸式数字体验解决方案。</p>
<div class="hero-btns">
<a href="/services/" class="hero-btn hero-btn-primary">📦 查看服务项目</a>
<a href="/contact/" class="hero-btn hero-btn-outline">📞 联系我们</a>
</div>
</div>
</section>

<!-- Stats -->
<section class="stats">
<div class="stats-grid">
<div class="stat-item"><h2>50+</h2><p>服务案例</p></div>
<div class="stat-item"><h2>30+</h2><p>企业客户</p></div>
<div class="stat-item"><h2>5+</h2><p>年行业经验</p></div>
<div class="stat-item"><h2>100%</h2><p>项目交付率</p></div>
</div>
</section>

<!-- Services -->
<section class="section">
<h2 class="section-title">我们的服务</h2>
<p class="section-title-sub">从创意到交付，一站式VR/AR内容定制</p>
<div class="svc-grid">
<div class="svc-card">
<span class="svc-icon">🕶️</span>
<h3>VR 内容开发</h3>
<p>沉浸式虚拟场景、VR培训系统、虚拟展厅、数字孪生解决方案</p>
<a href="/services/" class="svc-link">了解更多 →</a>
</div>
<div class="svc-card">
<span class="svc-icon">📱</span>
<h3>AR 应用定制</h3>
<p>AR营销互动、AR产品说明、AR教育课件、AR地理信息导航</p>
<a href="/services/" class="svc-link">了解更多 →</a>
</div>
<div class="svc-card">
<span class="svc-icon">🌍</span>
<h3>元宇宙内容</h3>
<p>虚拟空间搭建、数字人设计、虚拟发布会、虚拟社交空间定制</p>
<a href="/services/" class="svc-link">了解更多 →</a>
</div>
<div class="svc-card">
<span class="svc-icon">🔧</span>
<h3>技术咨询</h3>
<p>VR/AR项目评估、硬件选型建议、技术培训、开发流程顾问</p>
<a href="/services/" class="svc-link">了解更多 →</a>
</div>
</div>
</section>

<!-- About teaser -->
<section class="about-teaser">
<div class="about-inner">
<h2 class="section-title" style="text-align:center">关于灵见科技</h2>
<p>江西灵见虚拟现实科技有限公司成立于VR/AR行业高速发展期，团队成员具备多年三维开发、游戏引擎和交互设计经验。熟练掌握 Unity、Unreal Engine、Blender 等主流工具，可承接从概念设计到交付上线的全流程服务。</p>
<a href="/about/" class="about-btn">🏢 了解更多 →</a>
</div>
</section>

<!-- Cases -->
<section class="section" style="background:#f0f9ff;padding:60px 24px;">
<h2 class="section-title">🏆 合作案例</h2>
<p class="section-title-sub">真实项目交付，覆盖 VR培训 / AR营销 / MR工业 / VR展厅</p>
<div class="posts-grid">
<div class="post-card"><div class="post-card-body"><h3>🏭 VR 安全生产培训系统</h3><p>化工企业沉浸式危险场景模拟，培训通过率提升40%，覆盖8种危险场景</p><a href="/showcase/" class="svc-link">查看详情 →</a></div></div>
<div class="post-card"><div class="post-card-body"><h3>📱 AR 家居产品手册</h3><p>WebAR 1:1产品摆放预览，门店客户停留时间提升60%，线上转化增长35%</p><a href="/showcase/" class="svc-link">查看详情 →</a></div></div>
<div class="post-card"><div class="post-card-body"><h3>🥽 MR 装配指导系统</h3><p>HoloLens 2混合现实装配指引，返工率下降55%，新员工3天即可上岗</p><a href="/showcase/" class="svc-link">查看详情 →</a></div></div>
<div class="post-card"><div class="post-card-body"><h3>🌐 VR 云展厅</h3><p>7×24全天候在线展厅，触达10万+客户，覆盖全国20场线下展会</p><a href="/showcase/" class="svc-link">查看详情 →</a></div></div>
</div>
<div style="text-align:center;margin-top:28px"><a href="/showcase/" class="more-link">📋 浏览全部案例 →</a></div>
</section>

<!-- CTA -->
<section class="cta">
<h2>准备好开启 VR/AR 项目了吗？</h2>
<p>无论是产品展示、培训系统还是品牌营销，我们都能为您打造独特的沉浸式体验。</p>
<a href="tel:15970985939" class="cta-btn">📞 15970985939</a>
</section>

<!-- Footer -->
<footer>
<div class="footer-inner">
<div class="footer-brand">
<h3>🌐 灵见科技</h3>
<p>江西灵见虚拟现实科技有限公司<br>
专注VR/AR内容开发与元宇宙内容定制</p>
</div>
<div class="footer-col">
<h4>快速链接</h4>
<a href="/">首页</a>
<a href="/about/">关于我们</a>
<a href="/services/">服务项目</a>
</div>
<div class="footer-col">
<h4>联系我们</h4>
<a href="tel:15970985939">📞 15970985939</a>
<a href="mailto:483448996@qq.com">📧 483448996@qq.com</a>
<a href="/contact/">📍 联系我们</a>
</div>
</div>
<div class="footer-bottom">
<p>© 2025 江西灵见虚拟现实科技有限公司 | 专注VR/AR内容开发</p>
</div>
</footer>

</body>
</html>
