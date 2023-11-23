import{_ as s,v as a,b as n,R as l}from"./chunks/framework.4f207390.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/utils/index.md","filePath":"js/utils/index.md","lastUpdated":1661234872000}'),p={name:"js/utils/index.md"},o=l(`<h2 id="判断是对象" tabindex="-1">判断是对象 <a class="header-anchor" href="#判断是对象" aria-label="Permalink to &quot;判断是对象&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[Object object]</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="判断是数组" tabindex="-1">判断是数组 <a class="header-anchor" href="#判断是数组" aria-label="Permalink to &quot;判断是数组&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(arr)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toString</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(arr) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[Object array]</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="判断对象是否为空对象" tabindex="-1">判断对象是否为空对象 <a class="header-anchor" href="#判断对象是否为空对象" aria-label="Permalink to &quot;判断对象是否为空对象&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isEmptyObj</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//3</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div>`,6),t=[o];function e(c,r,y,D,F,i){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};