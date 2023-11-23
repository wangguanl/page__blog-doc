import{_ as s,v as n,b as a,R as l}from"./chunks/framework.4f207390.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"框架/web3D/threejs/index.md","filePath":"框架/web3D/threejs/index.md","lastUpdated":1692174619000}'),p={name:"框架/web3D/threejs/index.md"},e=l(`<p>是一个用于创建3D图形和动画的库。它基于WebGL技术，提供了一组简化和抽象化的API，使开发者能够更轻松地在浏览器中创建和渲染3D图形。使用Three.js，您可以创建复杂的场景、添加灯光和材质、加载和动画模型，以及处理用户交互等。它主要用于游戏开发、虚拟现实、数据可视化等需要展示3D图形的领域。</p><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><ol><li>创建场景</li><li>创建相机</li><li>创建物体</li><li>物体分为几何体：正方体、圆体、多面体...</li><li>创建材质</li><li>将几何体和材质融合成物体</li><li>给场景添加已创建好的相机、物体</li><li>使用渲染器，通过相机将场景渲染出来</li></ol><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><h2 id="相机-机位" tabindex="-1">相机(机位) <a class="header-anchor" href="#相机-机位" aria-label="Permalink to &quot;相机(机位)&quot;">​</a></h2><h2 id="物体" tabindex="-1">物体 <a class="header-anchor" href="#物体" aria-label="Permalink to &quot;物体&quot;">​</a></h2><h2 id="灯光" tabindex="-1">灯光 <a class="header-anchor" href="#灯光" aria-label="Permalink to &quot;灯光&quot;">​</a></h2><ul><li>环境光(AmbientLight)：环境光会均匀的照亮所有物体，所有物体都有反射光。环境光不能用投射阴影。常见是太阳照射不到朝北的房子，但屋内也是微亮的，因为正是受到了其他物体的反光。</li><li>平行光(DirectionLight): 平行光是沿着特定方向发射的逛。常常用于模拟太阳，表现像是无限远，发出的光线是平行的。</li><li>点光源(PointLight): 从一个点向各个方向发射的光源。常见模拟一个灯泡、蜡烛。</li><li>聚光灯(SpotLight): 光线从一个点沿着一个方向射出，随着光线照射变远，光线圆锥体的尺寸也逐渐增大。</li></ul><p>因为创造出来的出来的是<strong>静态没有交互</strong>的3d页面，所以需要改善为可<strong>动态交互</strong>。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-BA5zW" id="tab-CQOeKNw" checked="checked"><label for="tab-CQOeKNw">基础</label><input type="radio" name="group-BA5zW" id="tab-ib12gsT"><label for="tab-ib12gsT">增加动态交互</label><input type="radio" name="group-BA5zW" id="tab-9Sd6JWp"><label for="tab-9Sd6JWp">动态交互完整版</label></div><div class="blocks"><div class="language-js active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.创建场景</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.创建相机</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置相机位置</span></span>
<span class="line"><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.创建几何体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeGeometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建材质</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeMaterial </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据几何体和材质创建物体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cube </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(cubeGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cubeMaterial)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.给场景添加已创建好的相机、物体</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(cube)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将机位添加到场景中</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(camera)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5.使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化渲染器</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> renderer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置渲染器的尺寸大小</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将webGl渲染的canvas内容添加到页面</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> camera)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines has-diff"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line diff add"><span style="color:#676E95;font-style:italic;">// 导入轨道控制器 </span></span>
<span class="line diff add highlighted"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OrbitControls</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three/examples/jsm/controls/OrbitControls</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.创建场景</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.创建相机</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置相机位置</span></span>
<span class="line"><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.创建几何体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeGeometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建材质</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeMaterial </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据几何体和材质创建物体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cube </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(cubeGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cubeMaterial)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.给场景添加已创建好的相机、物体</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(cube)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将机位添加到场景中</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(camera)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5.使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化渲染器</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> renderer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置渲染器的尺寸大小</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将webGl渲染的canvas内容添加到页面</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line diff remove highlighted"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(scene</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> camera)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add highlighted"><span style="color:#676E95;font-style:italic;">// 创建轨道控制器 </span></span>
<span class="line diff add highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> controls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OrbitControls</span><span style="color:#A6ACCD;">(camera</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add highlighted"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line diff add highlighted"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line diff add highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 渲染下一帧时调用render函数 </span></span>
<span class="line diff add highlighted"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line diff add highlighted"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add highlighted"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-focused-lines has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">// 导入轨道控制器 </span></span>
<span class="line has-focus highlighted"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OrbitControls</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three/examples/jsm/controls/OrbitControls</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.创建场景</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.创建相机</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置相机位置</span></span>
<span class="line"><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.创建几何体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeGeometry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建材质</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cubeMaterial </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshBasicMaterial</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据几何体和材质创建物体</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cube </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#A6ACCD;">(cubeGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cubeMaterial)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.给场景添加已创建好的相机、物体</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(cube)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将机位添加到场景中</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(camera)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5.使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化渲染器</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> renderer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置渲染器的尺寸大小</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHeight)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将webGl渲染的canvas内容添加到页面</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus"></span>
<span class="line has-focus"><span style="color:#676E95;font-style:italic;">// 使用渲染器，通过相机将场景渲染出来</span></span>
<span class="line has-focus highlighted"><span style="color:#676E95;font-style:italic;">// 创建轨道控制器</span></span>
<span class="line has-focus highlighted"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> controls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OrbitControls</span><span style="color:#A6ACCD;">(camera</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement)</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus highlighted"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line has-focus highlighted"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 渲染下一帧时调用render函数</span></span>
<span class="line has-focus highlighted"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus highlighted"><span style="color:#89DDFF;">}</span></span>
<span class="line has-focus highlighted"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line has-focus"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></div></div>`,10),o=[e];function r(c,t,D,y,i,F){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
