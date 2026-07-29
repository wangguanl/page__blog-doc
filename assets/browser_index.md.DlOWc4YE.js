import{az as n,P as a,Q as l,aQ as t}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"browser/index.md","filePath":"browser/index.md","lastUpdated":1737529718000}'),p={name:"browser/index.md"};function o(e,s,c,r,y,F){return a(),l("div",null,[...s[0]||(s[0]=[t(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	&lt;</span><span style="color:#F07178;">div</span><span style="color:#C792EA;"> id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">		{{ran}}</span></span>
<span class="line"><span style="color:#89DDFF;">		&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">		&lt;</span><span style="color:#F07178;">button</span><span style="color:#C792EA;"> @click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">切换</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">	function</span><span style="color:#82AAFF;"> ajaxSync</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">url</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;font-style:italic;"> data</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">		var</span><span style="color:#BABED8;"> xhr</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> new</span><span style="color:#82AAFF;"> XMLHttpRequest</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onreadystatechange</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">readyState</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 4</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> xhr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">status</span><span style="color:#89DDFF;"> ==</span><span style="color:#F78C6C;"> 200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">				var</span><span style="color:#BABED8;"> responseValue</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> xhr</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">responseText</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">			}</span></span>
<span class="line"><span style="color:#89DDFF;">		};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		//true：异步；false：同步</span></span>
<span class="line"><span style="color:#BABED8;">		xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#89DDFF;">			&quot;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">			url</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FF9CAC;">			false</span></span>
<span class="line"><span style="color:#F07178;">		)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setRequestHeader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">application/json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">		xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">data</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">	function</span><span style="color:#82AAFF;"> myBrowser</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">		var</span><span style="color:#BABED8;"> userAgent</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> navigator</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">userAgent</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> //取得浏览器的userAgent字符串</span></span>
<span class="line"><span style="color:#C792EA;">		var</span><span style="color:#BABED8;"> isOpera</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Opera</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">		if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">isOpera</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Opera</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">		};</span><span style="color:#676E95;font-style:italic;"> //判断是否Opera浏览器</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">		if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Firefox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">FF</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		}</span><span style="color:#676E95;font-style:italic;"> //判断是否Firefox浏览器</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">		if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Chrome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Chrome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">		if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Safari</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">Safari</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		}</span><span style="color:#676E95;font-style:italic;"> //判断是否Safari浏览器</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">		if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#BABED8;"> userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MSIE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> -</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;"> &amp;&amp;</span><span style="color:#89DDFF;"> !</span><span style="color:#BABED8;">isOpera</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">IE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">		};</span><span style="color:#676E95;font-style:italic;"> //判断是否IE浏览器</span></span>
<span class="line"><span style="color:#89DDFF;">	}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">	import</span><span style="color:#BABED8;"> axios </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">	function</span><span style="color:#82AAFF;"> postData</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">type</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#C792EA;">		const</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;"> =</span><span style="color:#82AAFF;"> myBrowser</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">		const</span><span style="color:#BABED8;"> ip</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> \`</span><span style="color:#C3E88D;">http://192.168.13.61:3000</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		// const ip = \`http://localhost:3000\`</span></span>
<span class="line"><span style="color:#BABED8;">		localStorage</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">type</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">		ajaxSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#BABED8;">ip</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">			[</span><span style="color:#BABED8;">type</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> myBrowser</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> +</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">		}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		/* axios.get(\`\${ip}?\${type}=\${myBrowser() + &#39;：&#39; + Math.random()}\`)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		axios.post(\`\${ip}/\` + type, {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			[type]: myBrowser() + &#39;：&#39; + Math.random()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		}) */</span></span>
<span class="line"><span style="color:#89DDFF;">	}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">	export</span><span style="color:#89DDFF;font-style:italic;"> default</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">		data</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">			return</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">				ran</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">			}</span></span>
<span class="line"><span style="color:#89DDFF;">		},</span></span>
<span class="line"><span style="color:#F07178;">		mounted</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				浏览器会不稳定的触发接口事件，接口传参时有时无</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				console时触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				vivo默认浏览器{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onbeforeunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onpagehide:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onunload:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				Safari浏览器{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onbeforeunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onpagehide:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onunload:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				搜狗浏览器 {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: 全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				QQ浏览器{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onbeforeunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onpagehide:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onunload:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				UC览器{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onbeforeunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onpagehide:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				Chrome浏览器 {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: 全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				Firefox浏览器 {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: 全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				微信浏览器 {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onbeforeunload:false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onpagehide:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">						onunload:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				抖音浏览器 {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					刷新：全部触发</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">					关闭：全部触发 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">				}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			// 函数在刷新页面时可以触发</span></span>
<span class="line"><span style="color:#BABED8;">			window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#89DDFF;"> =</span><span style="color:#89DDFF;"> ()</span><span style="color:#C792EA;"> =&gt;</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#BABED8;">				window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onbeforeunload</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">					postData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onbeforeunload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">				}</span></span>
<span class="line"><span style="color:#BABED8;">				window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onpagehide</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">					postData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onpagehide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">				}</span></span>
<span class="line"><span style="color:#BABED8;">				window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onunload</span><span style="color:#89DDFF;"> =</span><span style="color:#C792EA;"> function</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">					postData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">onunload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">				}</span></span>
<span class="line"><span style="color:#89DDFF;">			}</span></span>
<span class="line"><span style="color:#89DDFF;">		},</span></span>
<span class="line"><span style="color:#F07178;">		beforeDestroy</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			// postData(&#39;beforeDestroy&#39;);</span></span>
<span class="line"><span style="color:#89DDFF;">		},</span></span>
<span class="line"><span style="color:#F07178;">		destroyed</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">			// postData(&#39;destroyed&#39;);</span></span>
<span class="line"><span style="color:#89DDFF;">		},</span></span>
<span class="line"><span style="color:#F07178;">		methods</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#F07178;">			change</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;"> {</span></span>
<span class="line"><span style="color:#82AAFF;">				postData</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">change</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">				this.</span><span style="color:#BABED8;">ran</span><span style="color:#89DDFF;"> =</span><span style="color:#BABED8;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">			}</span></span>
<span class="line"><span style="color:#89DDFF;">		},</span></span>
<span class="line"><span style="color:#89DDFF;">	}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1)])])}const f=n(p,[["render",o]]);export{E as __pageData,f as default};
