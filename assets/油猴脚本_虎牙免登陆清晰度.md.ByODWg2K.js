import{az as n,P as a,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"油猴脚本/虎牙免登陆清晰度.md","filePath":"油猴脚本/虎牙免登陆清晰度.md","lastUpdated":1768802017000}'),o={name:"油猴脚本/虎牙免登陆清晰度.md"};function t(e,s,c,y,r,F){return a(),l("div",null,[...s[0]||(s[0]=[p(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ==UserScript==</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @name         虎牙免登陆清晰度</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @namespace    https://www.huya.com/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @version      2025-12-19</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @description  try to take over the world!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @author       You</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @match        https://www.huya.com/majiajia</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @icon         https://www.google.com/s2/favicons?sz=64&amp;domain=huya.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @grant        none</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ==/UserScript==</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    &#39;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 监听节点</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> waitNode</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ({</span><span style="color:#BABED8;font-style:italic;"> selector</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> &#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> timeNum</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 500</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> callback</span><span style="color:#89DDFF;"> =</span><span style="color:#FFCB6B;"> Function</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> frq</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">})</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    try</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">      const</span><span style="color:#BABED8;"> node</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">selector</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">node</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">        callback</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">node</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> selector</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        return</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span><span style="color:#89DDFF;font-style:italic;"> else</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">        setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">          if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">frq</span><span style="color:#89DDFF;"> &gt;=</span><span style="color:#F78C6C;"> 10</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#82AAFF;">          waitNode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> selector</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> timeNum</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> callback</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> frq</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> ++</span><span style="color:#BABED8;">frq</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        },</span><span style="color:#BABED8;"> timeNum</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#89DDFF;font-style:italic;"> catch</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">waitNode err: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">error</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 判断对象是否含有指定字段(可深层字段)</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> _hasOwnProperty</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">__obj</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> {},</span><span style="color:#BABED8;font-style:italic;"> __key</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> &#39;&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    let</span><span style="color:#BABED8;"> keys</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> __key</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">keys</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> ===</span><span style="color:#F78C6C;"> 1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#FFCB6B;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">hasOwnProperty</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">__obj</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> __key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> childObj</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> __obj</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">keys</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]]</span></span>
<span class="line"><span style="color:#BABED8;">    keys</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    return</span><span style="color:#82AAFF;"> _hasOwnProperty</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">childObj</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> keys</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 关闭登录弹窗</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> closeLogin</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#82AAFF;"> waitNode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    selector</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">#UDBSdkLgn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    callback</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> (</span><span style="color:#BABED8;font-style:italic;">node</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> selector</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      node</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">style</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cssText</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">display: none;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 更新画质项 节点属性</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> changeVideotypeItem</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">    $</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.player-videotype-list li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">each</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> t</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">      let</span><span style="color:#BABED8;"> obj</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> $</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">t</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#BABED8;">      obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">status</span><span style="color:#89DDFF;"> =</span><span style="color:#F78C6C;"> 1</span></span>
<span class="line"><span style="color:#82AAFF;">      $</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">t</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> obj</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> videotypeList</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> $</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.player-menu-panel ul.player-videotype-list &gt; li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">videotypeList</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#F78C6C;"> 0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      videotypeList</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  // 清空倒计时</span></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> clearCountdown</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> timeNum</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">roomHeartbeat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isInteger</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">timeNum</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">roomHeartbeat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> -Infinity</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 跳过未登录时间检测</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">  const</span><span style="color:#BABED8;"> main</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 覆盖关闭窗口事件</span></span>
<span class="line"><span style="color:#BABED8;">      window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">HyLogin</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closeUdbLogin</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">        window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">HyLogin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">notice</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">loginClose</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 避免多开浏览器tab有某个tab失效导致重新触发登录时间</span></span>
<span class="line"><span style="color:#82AAFF;">      clearCountdown</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      // 防止未重置登录弹窗关闭事件前,手动关闭登录弹窗</span></span>
<span class="line"><span style="color:#82AAFF;">      closeLogin</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">      changeVideotypeItem</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">    const</span><span style="color:#BABED8;"> timer</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        if</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">top</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.player-videotype-list li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">length</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">          alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已切换最清晰画质</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#82AAFF;">          clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">          main</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#82AAFF;">          setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">            document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">player-fullpage-btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">          },</span><span style="color:#F78C6C;"> 1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    },</span><span style="color:#F78C6C;"> 1000</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // 1. 避免重复创建按钮（先检查是否已存在）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // if (document.getElementById(&#39;custom-fixed-button&#39;)) return;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //</span><span style="color:#676E95;font-style:italic;"> // 2. 创建按钮元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // const btn = document.createElement(&#39;button&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.id = &#39;custom-fixed-button&#39;;</span><span style="color:#676E95;font-style:italic;"> // 唯一ID，用于去重</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.innerText = &#39;我是一个按钮&#39;;</span><span style="color:#676E95;font-style:italic;"> // 按钮文案</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //</span><span style="color:#676E95;font-style:italic;"> // 3. 设置按钮样式（固定顶部 + 美化）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.style.cssText = \`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     position: fixed;        /* 固定定位 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     top: 0;                 /* 贴顶 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     left: 50%;              /* 水平居中 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     transform: translateX(-50%); /* 修正居中 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     z-index: 999999;        /* 置顶层级，避免被遮挡 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     padding: 12px 24px;     /* 内边距 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     background: #409eff;    /* 背景色（蓝色） */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     color: white;           /* 文字颜色 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     border: none;           /* 去掉边框 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     border-radius: 0 0 8px 8px; /* 圆角（只保留底部） */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     font-size: 16px;        /* 字体大小 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     cursor: pointer;        /* 鼠标指针 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     box-shadow: 0 2px 8px rgba(0,0,0,0.15); /* 阴影 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     outline: none;          /* 去掉聚焦轮廓 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     transition: background 0.2s; /*  hover过渡 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // \`;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //</span><span style="color:#676E95;font-style:italic;"> // 4. 鼠标hover样式（可选，提升体验）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.addEventListener(&#39;mouseover&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     btn.style.background = &#39;#66b1ff&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // });</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.addEventListener(&#39;mouseout&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     btn.style.background = &#39;#409eff&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //</span><span style="color:#676E95;font-style:italic;"> // 5. 点击事件：弹出提示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // btn.addEventListener(&#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //   if(window.top.document.querySelectorAll(&#39;.player-videotype-list li&#39;).length&gt;0){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     main()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //   } else {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //     alert(window.top.document.querySelectorAll(&#39;.player-videotype-list li&#39;).length)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    //</span><span style="color:#676E95;font-style:italic;"> // 6. 追加到页面body</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // document.body.appendChild(btn);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)()</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,1)])])}const A=n(o,[["render",t]]);export{E as __pageData,A as default};
