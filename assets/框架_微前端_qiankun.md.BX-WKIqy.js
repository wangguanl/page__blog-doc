import{az as n,P as a,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/微前端/qiankun.md","filePath":"框架/微前端/qiankun.md","lastUpdated":1738557268000}'),o={name:"框架/微前端/qiankun.md"};function t(e,s,c,r,y,D){return a(),l("div",null,[...s[0]||(s[0]=[p(`<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1. 注册应用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* import { registerMicroApps, start } from &quot;qiankun&quot;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">registerMicroApps([</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    name: &quot;react app&quot;, // app name registered</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    entry: &quot;//localhost:7100&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    container: &quot;#yourContainer&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    activeRule: &quot;/yourActiveRule&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    name: &quot;vue app&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    entry: { scripts: [&quot;//localhost:7100/main.js&quot;] },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    container: &quot;#yourContainer2&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    activeRule: &quot;/yourActiveRule2&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">start(); */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 注册应用</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> apps </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  {</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">react app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;"> // app name registered</span></span>
<span class="line"><span style="color:#F07178;">    entry</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">//localhost:7100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    container</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">#yourContainer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    activeRule</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/yourActiveRule</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span></span>
<span class="line"><span style="color:#89DDFF;">  {</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">vue app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    entry</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span><span style="color:#F07178;"> scripts</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//localhost:7100/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    container</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">#yourContainer2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    activeRule</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">/yourActiveRule2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  },</span></span>
<span class="line"><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 监听路由变化匹配应用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 监听路由前进后退</span></span>
<span class="line"><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">popstate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pathname</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 重写劫持路由切换</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> rowPushState </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pushState</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pushState</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  rowPushState</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pathname</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 重写劫持路由替换</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> rowReplaceState </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">replaceState</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replaceState</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  rowReplaceState</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">history</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> args</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">pathname</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. 匹配应用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. 加载子应用</span></span></code></pre></div>`,1)])])}const E=n(o,[["render",t]]);export{B as __pageData,E as default};
