import{az as a,P as s,Q as e,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"规范/编辑器/editorconfig.md","filePath":"规范/编辑器/editorconfig.md","lastUpdated":1782201232000}'),l={name:"规范/编辑器/editorconfig.md"};function i(t,n,r,o,c,d){return s(),e("div",null,[...n[0]||(n[0]=[p(`<h2 id="统一不同编辑器下的文件格式" tabindex="-1">统一不同编辑器下的文件格式 <a class="header-anchor" href="#统一不同编辑器下的文件格式" aria-label="Permalink to “统一不同编辑器下的文件格式”">​</a></h2><ol><li>有助于为跨不同编辑器和IDE处理同一项目的多个开发人员维护一致的编码风格。</li><li>项目由一个用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵守定义的样式。</li><li>文件易于阅读，与版本控制系统配合良好。</li></ol><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span># https://editorconfig.org</span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>insert_final_newline = false</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre></div>`,3)])])}const g=a(l,[["render",i]]);export{m as __pageData,g as default};
