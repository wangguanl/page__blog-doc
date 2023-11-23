import{_ as s,v as a,b as n,R as l}from"./chunks/framework.4f207390.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/runtime/event-loop.md","filePath":"js/runtime/event-loop.md","lastUpdated":1660298300000}'),o={name:"js/runtime/event-loop.md"},p=l(`<p><strong>程序中设置两个线程</strong>：</p><ul><li>一个负责程序本身的运行，称为&quot;主线程&quot;；</li><li>另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为&quot;Event Loop线程&quot;（可以译为&quot;消息线程&quot;）。</li></ul><p><strong>所有任务可以分成两种</strong>，</p><ul><li><p>一种是同步任务（synchronous），同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；</p></li><li><p>另一种是异步任务（asynchronous），异步任务指的是，不进入主线程、而进入&quot;<strong>任务队列</strong>&quot;（task queue）的任务，只有&quot;任务队列&quot;通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。</p><p><strong>异步任务</strong>有以下三种类型：</p><ol><li><p>普通事件，如click、resize等</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div></li><li><p>资源加载，如load、error等</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span></code></pre></div></li><li><p>定时器，包括setInterval、setTimeout等</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li></ol><p><strong>任务</strong>又被分为两种类型：</p><ul><li><p><strong>宏任务（MacroTask）</strong></p><p>宿主环境提供的（浏览器和node）</p><p>script全部代码、setTimeout、setInterval。</p><p>浏览器为了能够使得JS内部task与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染 （task-&gt;渲染-&gt;task-&gt;...）</p></li><li><p><strong>微任务（MicroTask）</strong></p><p>语言标准提供的</p><p>Promise、await</p><p>async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把await表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 第2秒时输出: 1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li></ul><p><strong>宏任务与微任务执行顺序</strong>：同步—&gt;微任务—&gt;宏任务</p><ul><li>执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务队列是否为空，如果为空的话，就执行宏任务，否则就一次性执行完所有微任务。</li><li>每次单个宏任务执行完毕后，检查微任务队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务后，设置微任务队列为null，然后再执行宏任务，如此循环。 <img src="https://img.jbzj.com/file_images/article/202009/2020090211501426.png" alt="2020090211501426.png"></li></ul><p><strong>事件循环</strong>具体过程：</p><ul><li>同步任务进入主线程，异步任务进入Event Table并注册函数。</li><li>当异步任务完成时，Event Table会将这个函数移入Event Queue。</li><li>主线程内的任务执行完毕执行栈为空，会去Event Queue读取对应的函数，进入主线程执行。</li><li>上述过程会不断重复，也就是常说的Event Loop(事件循环)。</li></ul></li></ul>`,4),t=[p];function e(c,r,i,y,F,D){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{C as __pageData,u as default};