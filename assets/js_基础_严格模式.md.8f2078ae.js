import{_ as l,v as e,b as i,R as t}from"./chunks/framework.4f207390.js";const h=JSON.parse('{"title":"严格模式主要有以下限制。","description":"","frontmatter":{},"headers":[],"relativePath":"js/基础/严格模式.md","filePath":"js/基础/严格模式.md","lastUpdated":1663119548000}'),a={name:"js/基础/严格模式.md"},s=t('<h1 id="严格模式主要有以下限制。" tabindex="-1">严格模式主要有以下限制。 <a class="header-anchor" href="#严格模式主要有以下限制。" aria-label="Permalink to &quot;严格模式主要有以下限制。&quot;">​</a></h1><ul><li>变量必须声明后再使用</li><li>函数的参数不能有同名属性，否则报错</li><li>不能使用with语句</li><li>不能对只读属性赋值，否则报错</li><li>不能使用前缀 0 表示八进制数，否则报错</li><li>不能删除不可删除的属性，否则报错</li><li>不能删除变量delete prop，会报错，只能删除属性delete global[prop]</li><li>eval不会在它的外层作用域引入变量</li><li>eval和arguments不能被重新赋值</li><li>arguments不会自动反映函数参数的变化</li><li>不能使用arguments.callee</li><li>不能使用arguments.caller</li><li>禁止this指向全局对象</li><li>不能使用fn.caller和fn.arguments获取函数调用的堆栈</li><li>增加了保留字（比如protected、static和interface）</li></ul>',2),r=[s];function n(o,c,d,_,p,m){return e(),i("div",null,r)}const f=l(a,[["render",n]]);export{h as __pageData,f as default};
