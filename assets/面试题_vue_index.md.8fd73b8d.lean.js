import{_ as e,v as a,b as t,R as i}from"./chunks/framework.4f207390.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试题/vue/index.md","filePath":"面试题/vue/index.md","lastUpdated":1660556470000}'),l={name:"面试题/vue/index.md"},r=i('<h2 id="vue-组件通信" tabindex="-1">Vue 组件通信 <a class="header-anchor" href="#vue-组件通信" aria-label="Permalink to &quot;Vue 组件通信&quot;">​</a></h2><ul><li>props、$emit</li><li>$on、$emit</li><li>vuex</li><li>$attrs、$listeners</li><li>$parent 、 $children 、 ref</li><li>provide、inject</li></ul><h2 id="computed-和-watch-的区别" tabindex="-1">computed 和 watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-label="Permalink to &quot;computed 和 watch 的区别&quot;">​</a></h2><ul><li>computed创建的属性会被缓存，在页面多次使用也只会触发一次。依赖的数据发生变化时会再次更新。</li><li>watch用于异步监听数据。</li></ul><h2 id="完整版-vue-js-和运行版-vue-runtime-js-有什么区别" tabindex="-1">完整版（vue.js）和运行版（vue.runtime.js）有什么区别 <a class="header-anchor" href="#完整版-vue-js-和运行版-vue-runtime-js-有什么区别" aria-label="Permalink to &quot;完整版（vue.js）和运行版（vue.runtime.js）有什么区别&quot;">​</a></h2><p>template解析器占据代码的三分之一。完整版包含template解析器；运行版去除了template解析器，保留了核心功能</p><h2 id="key起到什么作用" tabindex="-1">key起到什么作用 <a class="header-anchor" href="#key起到什么作用" aria-label="Permalink to &quot;key起到什么作用&quot;">​</a></h2><p>vnode 在更新时会用 key 进行对比，在对比时发现相同的 key， 直接会复用元素。如果不填写 key，vue 则会默认生成，不会干扰 vnode 的对比。更新 key 时页面元素会重新渲染。</p><h2 id="v-show和v-if的区别" tabindex="-1">v-show和v-if的区别 <a class="header-anchor" href="#v-show和v-if的区别" aria-label="Permalink to &quot;v-show和v-if的区别&quot;">​</a></h2><h2 id="vue最小化更新过程是什么样子的" tabindex="-1">Vue最小化更新过程是什么样子的 <a class="header-anchor" href="#vue最小化更新过程是什么样子的" aria-label="Permalink to &quot;Vue最小化更新过程是什么样子的&quot;">​</a></h2><h2 id="vue-如何实现指令系统" tabindex="-1">Vue 如何实现指令系统 <a class="header-anchor" href="#vue-如何实现指令系统" aria-label="Permalink to &quot;Vue 如何实现指令系统&quot;">​</a></h2><h2 id="用到了哪些开发小技巧" tabindex="-1">用到了哪些开发小技巧 <a class="header-anchor" href="#用到了哪些开发小技巧" aria-label="Permalink to &quot;用到了哪些开发小技巧&quot;">​</a></h2><ul><li>提升性能：函数科里化</li><li>函数拦截：处理数组的 push、pop、shift、unshift、revers、sort、splice 方法</li></ul>',13),o=[r];function s(u,h,n,d,c,v){return a(),t("div",null,o)}const f=e(l,[["render",s]]);export{m as __pageData,f as default};
