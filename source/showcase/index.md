---
title: 案例展示
date: 2025-01-01 00:00:00
type: showcase
---

<style>
.showcase-page { padding: 40px 0; }
.showcase-hero {
  text-align: center;
  padding: 50px 24px;
  background: linear-gradient(135deg, #0f0c29, #302b63);
  border-radius: 20px;
  color: #fff;
  margin-bottom: 50px;
}
.showcase-hero h1 { font-size: 36px; font-weight: 800; margin-bottom: 12px; }
.showcase-hero p { font-size: 16px; opacity: 0.8; max-width: 600px; margin: 0 auto; }

.case-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0,0,0,0.08);
  margin-bottom: 48px;
  border: 1px solid #f0f0f0;
}
.case-card:nth-child(even) { direction: rtl; }
.case-card:nth-child(even) .case-info { direction: ltr; }
.case-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  position: relative;
  overflow: hidden;
}
.case-thumb-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
.case-thumb-3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }
.case-thumb-4 { background: linear-gradient(135deg, #43e97b, #38f9d7); }
.case-thumb-icon { font-size: 72px; opacity: 0.9; }
.case-thumb-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(0,0,0,0.4);
  color: #fff;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
}
.case-info { padding: 40px; display: flex; flex-direction: column; justify-content: center; }
.case-tag {
  display: inline-block;
  background: rgba(14,165,233,0.1);
  color: #0284c7;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
  width: fit-content;
}
.case-info h2 { font-size: 22px; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; }
.case-client { font-size: 13px; color: #999; margin-bottom: 16px; }
.case-desc { font-size: 14px; color: #555; line-height: 1.9; margin-bottom: 20px; }
.case-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
.case-stat {
  background: #f0f9ff;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}
.case-stat strong { display: block; font-size: 22px; color: #0284c7; font-weight: 800; }
.case-stat span { font-size: 11px; color: #888; }
.case-tech { font-size: 12px; color: #888; }
.case-tech strong { color: #555; }

.showcase-cta {
  text-align: center;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 20px;
  padding: 50px 24px;
  color: #fff;
}
.showcase-cta h2 { font-size: 26px; font-weight: 700; margin-bottom: 10px; }
.showcase-cta p { opacity: 0.85; margin-bottom: 24px; font-size: 15px; }
.cta-btn {
  display: inline-block;
  background: #fff;
  color: #0284c7;
  padding: 13px 36px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s;
}
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }

@media (max-width: 768px) {
  .case-card { grid-template-columns: 1fr; }
  .case-card:nth-child(even) { direction: ltr; }
  .case-thumb { min-height: 200px; }
  .case-stats { grid-template-columns: 1fr 1fr; }
}
</style>

<div class="showcase-page">

## 案例展示

<div class="showcase-hero">
### 🏆 我们的实战案例

真实项目经验，覆盖 VR 培训、AR 营销、MR 工业、VR 展厅四大方向

*每个案例都经过实际交付和客户验收，以下为部分代表项目*
</div>

---

<!-- 案例一 -->
<div class="case-card">

<div class="case-thumb">
<span class="case-thumb-icon">🏭</span>
<span class="case-thumb-label">VR 安全生产培训</span>
</div>

<div class="case-info">

<span class="case-tag">🎮 VR 培训</span>
<h2>化工企业安全生产 VR 培训系统</h2>
<p class="case-client">👤 客户：某大型化工集团（华东）｜ 2024 年交付</p>

<p class="case-desc">
为该化工集团定制了一套**沉浸式安全生产培训系统**，覆盖 8 种危险场景模拟，包括：高处坠落、化学品泄漏、电气事故、火灾应急等。员工戴上 VR 头显即可"亲身"体验危险操作的后果，从根本上提升安全意识。
</p>

<div class="case-stats">
<div class="case-stat"><strong>40%</strong><span>学员通过率提升</span></div>
<div class="case-stat"><strong>8</strong><span>危险场景覆盖</span></div>
<div class="case-stat"><strong>3天→2小时</strong><span>培训周期压缩</span></div>
<div class="case-stat"><strong>2000+</strong><span>年度培训人次</span></div>
</div>

<p class="case-tech"><strong>技术栈：</strong>Unity 3D + HTC Vive + C# 自研交互逻辑</p>
</div>

</div>

---

<!-- 案例二 -->
<div class="case-card">

<div class="case-thumb case-thumb-2">
<span class="case-thumb-icon">📱</span>
<span class="case-thumb-label">AR 营销互动</span>
</div>

<div class="case-info">

<span class="case-tag">📱 AR 营销</span>
<h2>家居品牌 AR 产品手册</h2>
<p class="case-client">👤 客户：某知名家居品牌（江西）｜ 2025 年交付</p>

<p class="case-desc">
为家居品牌打造了一款**AR 电子产品手册**，消费者用手机扫描产品海报，即可看到 1:1 的 3D 产品模型在真实客厅中"摆放"效果，支持颜色切换、尺寸对比、材质预览。产品上市后，门店客户停留时间提升 **60%**，线上咨询转化率提升 **35%**。
</p>

<div class="case-stats">
<div class="case-stat"><strong>60%</strong><span>客户停留时间提升</span></div>
<div class="case-stat"><strong>35%</strong><span>线上咨询转化增长</span></div>
<div class="case-stat"><strong>WebAR</strong><span>无需下载 App</span></div>
<div class="case-stat"><strong>50+</strong><span>SKU 产品覆盖</span></div>
</div>

<p class="case-tech"><strong>技术栈：</strong>WebAR（8th Wall）+ Three.js + GLTF 模型</p>
</div>

</div>

---

<!-- 案例三 -->
<div class="case-card">

<div class="case-thumb case-thumb-3">
<span class="case-thumb-icon">🏗️</span>
<span class="case-thumb-label">MR 工业装配</span>
</div>

<div class="case-info">

<span class="case-tag">🥽 MR 工业</span>
<h2>精密设备 MR 装配指导系统</h2>
<p class="case-client">👤 客户：某智能制造企业（华南）｜ 2025 年交付</p>

<p class="case-desc">
为精密设备制造企业开发了一套 **MR（混合现实）装配指导系统**。工程师佩戴 HoloLens 2，叠加在真实设备上的虚拟指引可逐步引导装配步骤，标注零件位置、提示拧紧力矩、自动检测装配错误。系统上线后，装配返工率下降 **55%**，新员工上手时间从 2 周缩短到 **3 天**。
</p>

<div class="case-stats">
<div class="case-stat"><strong>55%</strong><span>装配返工率下降</span></div>
<div class="case-stat"><strong>3天</strong><span>新员工上岗周期</span></div>
<div class="case-stat"><strong>MR</strong><span>空间感知交互</span></div>
<div class="case-stat"><strong>50+</strong><span>装配工序覆盖</span></div>
</div>

<p class="case-tech"><strong>技术栈：</strong>Microsoft HoloLens 2 + Unity + Azure Spatial Anchors</p>
</div>

</div>

---

<!-- 案例四 -->
<div class="case-card">

<div class="case-thumb case-thumb-4">
<span class="case-thumb-icon">🌐</span>
<span class="case-thumb-label">VR 云展厅</span>
</div>

<div class="case-info">

<span class="case-tag">🌍 VR 展厅</span>
<h2>科技企业 VR 云展厅</h2>
<p class="case-client">👤 客户：某科技集团（全国巡展）｜ 2024-2025 年交付</p>

<p class="case-desc">
为该科技集团打造了一座**全年无休的 VR 云展厅**，客户无论身在何处，打开链接即可身临其境参观企业展厅、了解产品线、观看演示视频。支持多语言切换、语音讲解、实时在线客服。先后在全国 20 场线下展会使用，触达客户 **10 万+ 人次**，大幅降低线下布展成本。
</p>

<div class="case-stats">
<div class="case-stat"><strong>10万+</strong><span>触达人次</span></div>
<div class="case-stat"><strong>20场</strong><span>线下展会应用</span></div>
<div class="case-stat"><strong>3种</strong><span>语言切换支持</span></div>
<div class="case-stat"><strong>7×24</strong><span>全天候在线</span></div>
</div>

<p class="case-tech"><strong>技术栈：</strong>Three.js + PBR 渲染 + WebXR + 自研展厅编辑器</p>
</div>

</div>

---

<div class="showcase-cta">

### 💡 有类似需求？

我们为每个项目提供**从需求评估到交付上线的全流程服务**。

无论是 VR 培训、AR 营销、MR 工业应用还是 VR 展厅，我们都能为您定制专属方案。

<a href="/contact/" class="cta-btn">📞 立即咨询，获取方案报价</a>

</div>

</div>
