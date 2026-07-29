import{az as n,P as a,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css/预编译/BEM.md","filePath":"css/预编译/BEM.md","lastUpdated":1672982112000}'),o={name:"css/预编译/BEM.md"};function e(t,s,c,D,F,r){return a(),l("div",null,[...s[0]||(s[0]=[p(`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#BABED8;">$elementSeparator</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">$modifierSeparator</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">--</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#82AAFF;"> containsModifier</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  $selector</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> selectorToString</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  @if</span><span style="color:#82AAFF;"> str-index</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> $modifierSeparator</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    @return</span><span style="color:#BABED8;"> true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;font-style:italic;"> @else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    @return</span><span style="color:#BABED8;"> false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#82AAFF;"> selectorToString</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  $selector</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> inspect</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> //cast to string</span></span>
<span class="line"><span style="color:#BABED8;">  $selector</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> str-slice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> -2</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;"> //remove brackets</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  @return</span><span style="color:#BABED8;"> $selector</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#82AAFF;"> getBlock</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  $selector</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> selectorToString</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  $modifierStart</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> str-index</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> $modifierSeparator</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  @return</span><span style="color:#82AAFF;"> str-slice</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> $modifierStart</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#82AAFF;"> B</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$block</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">  .#{</span><span style="color:#BABED8;">$block</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    @content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#82AAFF;"> E</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$element</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">  $selector</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> &amp;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  @if</span><span style="color:#82AAFF;"> containsModifier</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">    $block</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> getBlock</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    @at-root</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">      #{</span><span style="color:#BABED8;">$selector</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        #{</span><span style="color:#BABED8;">$block </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> $elementSeparator </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> $element</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">          @content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        }</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span><span style="color:#89DDFF;font-style:italic;"> @else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">    @at-root</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">      #{</span><span style="color:#BABED8;">$selector </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> $elementSeparator </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> $element</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">        @content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      }</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#82AAFF;"> M</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$modifier</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">  @at-root</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    #{</span><span style="color:#BABED8;">&amp;</span><span style="color:#89DDFF;">}#{</span><span style="color:#BABED8;">$modifierSeparator </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> $modifier</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">      @content</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,1)])])}const A=n(o,[["render",e]]);export{B as __pageData,A as default};
