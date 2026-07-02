[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$env:PATH = 'C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files\QClaw\v0.2.30.594\resources\openclaw\config\bin\node;C:\Users\小软\AppData\Roaming\QClaw\npm-global'
Set-Location 'C:\Users\小软\projects\gclink-vr'
npm install hexo-theme-butterfly
npm install hexo-renderer-pug hexo-renderer-stylus
