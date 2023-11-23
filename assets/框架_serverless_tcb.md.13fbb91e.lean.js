import{_ as e,v as t,b as r,R as l}from"./chunks/framework.4f207390.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/serverless/tcb.md","filePath":"框架/serverless/tcb.md","lastUpdated":1663229156000}'),o={name:"框架/serverless/tcb.md"},s=l('<h2 id="腾讯云的各项产品使用场景都是什么" tabindex="-1">腾讯云的各项产品使用场景都是什么 <a class="header-anchor" href="#腾讯云的各项产品使用场景都是什么" aria-label="Permalink to &quot;腾讯云的各项产品使用场景都是什么&quot;">​</a></h2><ol><li>云开发cloudBase：<a href="https://console.cloud.tencent.com/tcb/env/index?rid=4" target="_blank" rel="noreferrer">https://console.cloud.tencent.com/tcb/env/index?rid=4</a></li><li>serverless：<a href="https://console.cloud.tencent.com/sls" target="_blank" rel="noreferrer">https://console.cloud.tencent.com/sls</a></li><li>Serverless HTTP服务：<a href="https://cloud.tencent.com/product/slshttp" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/slshttp</a></li><li>Serverless SSR：<a href="https://cloud.tencent.com/product/ssr" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/ssr</a></li><li>web应用托管：<a href="https://cloud.tencent.com/product/webify" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/webify</a></li><li>静态网站托管：<a href="https://cloud.tencent.com/product/wh" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/wh</a></li><li>微信云开发：<a href="https://cloud.weixin.qq.com/cloudbase" target="_blank" rel="noreferrer">https://cloud.weixin.qq.com/cloudbase</a></li><li>微信云托管：<a href="https://cloud.weixin.qq.com/cloudrun" target="_blank" rel="noreferrer">https://cloud.weixin.qq.com/cloudrun</a></li><li>云开发 Webify：<a href="https://webify.cloudbase.net/" target="_blank" rel="noreferrer">https://webify.cloudbase.net/</a></li><li>云托管：<a href="https://cloud.tencent.com/product/tcbr" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/tcbr</a></li></ol><ul><li>如果不使用cloudBase全家桶，单独购买的费用总和（都需要购买哪些）</li></ul><ol><li>对象存储 COS：<a href="https://cloud.tencent.com/product/cos" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/cos</a></li><li>文件存储：<a href="https://cloud.tencent.com/product/cfs" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/cfs</a></li><li>云数据库：<a href="https://cloud.tencent.com/product/mongodb%EF%BC%8C" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/mongodb，</a></li><li>Redis：<a href="https://cloud.tencent.com/product/crs" target="_blank" rel="noreferrer">https://cloud.tencent.com/product/crs</a></li></ol><p>CloudBase-cli (CloudBase-Framework)(<a href="https://cloud.tencent.com/document/product/1209/42665" target="_blank" rel="noreferrer">https://cloud.tencent.com/document/product/1209/42665</a>)</p><ol><li>tcb login</li></ol><h2 id="名词解释" tabindex="-1">名词解释： <a class="header-anchor" href="#名词解释" aria-label="Permalink to &quot;名词解释：&quot;">​</a></h2><ol><li>SCF：云函数（Serverless Cloud Function）</li></ol><ul><li><p>scf-cli: 本地开发调试</p><ul><li>scf init</li></ul></li><li><p>要保证云函数的独立性</p></li></ul><h2 id="应用、函数、服务、环境、目录、云函数的区别" tabindex="-1">应用、函数、服务、环境、目录、云函数的区别， <a class="header-anchor" href="#应用、函数、服务、环境、目录、云函数的区别" aria-label="Permalink to &quot;应用、函数、服务、环境、目录、云函数的区别，&quot;">​</a></h2><ol><li>应用和访问服务是什么关系？</li><li>vue、express、node等模板有什么区别</li><li>云函数和访问服务之间有什么联系？</li></ol><ul><li>访问服务向外提供一个路径，通过HTTP触发路径匹配已关联的资源（云函数、云托管、静态网站托管）</li><li>云函数可以被应用使用SDK直接调用</li></ul><ol start="4"><li>云函数、云托管、静态网站托管的区别</li></ol><ul><li>云托管、静态网站托管可以通过SDK直接访问云函数</li></ul><ol start="5"><li>应用和云函数的关系</li></ol><ul><li>应用包含云函数，在应用中创建cloudfunctions目录，并配置cloudbaserc的functionRoot</li><li>云函数也可以单独被调用，应用可以使用单独域名访问，应用也可以被配置外部访问路径被访问（就像云函数一样）</li></ul><ol start="6"><li>云函数和整体的Express应用提供的接口有什么区别</li><li>如果使用express的方式包装云函数，还如何进行调用，可以采用HTTP服务的形式吗？</li></ol><h2 id="云开发是包含了serverless吗" tabindex="-1">云开发是包含了serverless吗 <a class="header-anchor" href="#云开发是包含了serverless吗" aria-label="Permalink to &quot;云开发是包含了serverless吗&quot;">​</a></h2><h2 id="函数计算和serverless有什么区别" tabindex="-1">函数计算和serverLess有什么区别 <a class="header-anchor" href="#函数计算和serverless有什么区别" aria-label="Permalink to &quot;函数计算和serverLess有什么区别&quot;">​</a></h2><p>serverless是否只是简单一个服务，云开发才是完整的数据库、存储、函数、CDN的吗。单独购买存储、CDN又是如何收费的，有免费额度吗</p><h2 id="serverless还需要考虑负载均衡吗" tabindex="-1">serverLess还需要考虑负载均衡吗 <a class="header-anchor" href="#serverless还需要考虑负载均衡吗" aria-label="Permalink to &quot;serverLess还需要考虑负载均衡吗&quot;">​</a></h2>',21),c=[s];function a(n,i,d,u,h,p){return t(),r("div",null,c)}const m=e(o,[["render",a]]);export{b as __pageData,m as default};
