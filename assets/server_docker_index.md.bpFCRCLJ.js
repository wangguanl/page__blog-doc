import{az as a,P as n,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/index.md","filePath":"server/docker/index.md","lastUpdated":1785339991000}'),e={name:"server/docker/index.md"};function o(t,s,c,r,d,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="docker-容器化技术" tabindex="-1">Docker 容器化技术 <a class="header-anchor" href="#docker-容器化技术" aria-label="Permalink to “Docker 容器化技术”">​</a></h2><p><a href="https://docs.docker.com/" target="_blank" rel="noreferrer">Docker 官方文档</a></p><p>Docker 是一种容器化平台，它将应用及其依赖打包到一个轻量级、可移植的容器中运行。相比传统虚拟机，Docker 容器共享宿主机内核，启动速度快、资源占用低，成为现代应用部署的事实标准。</p><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to “核心概念”">​</a></h2><table tabindex="0"><thead><tr><th>概念</th><th>说明</th><th>类比</th></tr></thead><tbody><tr><td>镜像（Image）</td><td>只读模板，包含应用运行所需的所有内容</td><td>程序安装包</td></tr><tr><td>容器（Container）</td><td>镜像的运行实例，可启动/停止/删除</td><td>运行中的程序</td></tr><tr><td>仓库（Registry）</td><td>存储和分发镜像的服务</td><td>应用商店</td></tr><tr><td>Dockerfile</td><td>描述如何构建镜像的文本文件</td><td>安装脚本</td></tr></tbody></table><h2 id="镜像与容器的关系" tabindex="-1">镜像与容器的关系 <a class="header-anchor" href="#镜像与容器的关系" aria-label="Permalink to “镜像与容器的关系”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 镜像是静态的，容器是动态的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 一个镜像可以创建多个容器实例</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> pull</span><span style="color:#C3E88D;"> node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> images</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 从镜像创建并启动容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -d</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> myapp</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 3000:3000</span><span style="color:#C3E88D;"> node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看运行中的容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec</span><span style="color:#C3E88D;"> -it</span><span style="color:#C3E88D;"> myapp</span><span style="color:#C3E88D;"> sh</span></span></code></pre></div><h2 id="dockerfile-基础" tabindex="-1">Dockerfile 基础 <a class="header-anchor" href="#dockerfile-基础" aria-label="Permalink to “Dockerfile 基础”">​</a></h2><p>Dockerfile 是一组指令，描述如何从基础镜像构建自定义镜像。</p><div class="language-dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 基础镜像</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#BABED8;"> node:18-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置工作目录</span></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#BABED8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 复制依赖文件并安装</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#BABED8;"> package*.json ./</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#BABED8;"> npm ci --production</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 复制源代码</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#BABED8;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 声明端口</span></span>
<span class="line"><span style="color:#F78C6C;">EXPOSE</span><span style="color:#BABED8;"> 3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动命令</span></span>
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#BABED8;"> [</span><span style="color:#C3E88D;">&quot;node&quot;</span><span style="color:#BABED8;">, </span><span style="color:#C3E88D;">&quot;server.js&quot;</span><span style="color:#BABED8;">]</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 构建镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> build</span><span style="color:#C3E88D;"> -t</span><span style="color:#C3E88D;"> myapp:1.0</span><span style="color:#C3E88D;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> run</span><span style="color:#C3E88D;"> -d</span><span style="color:#C3E88D;"> -p</span><span style="color:#C3E88D;"> 3000:3000</span><span style="color:#C3E88D;"> --name</span><span style="color:#C3E88D;"> app</span><span style="color:#C3E88D;"> myapp:1.0</span></span></code></pre></div><h2 id="dockerfile-常用指令" tabindex="-1">Dockerfile 常用指令 <a class="header-anchor" href="#dockerfile-常用指令" aria-label="Permalink to “Dockerfile 常用指令”">​</a></h2><table tabindex="0"><thead><tr><th>指令</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td>FROM</td><td>指定基础镜像</td><td><code>FROM node:18</code></td></tr><tr><td>WORKDIR</td><td>设置工作目录</td><td><code>WORKDIR /app</code></td></tr><tr><td>COPY</td><td>复制文件到镜像</td><td><code>COPY . .</code></td></tr><tr><td>RUN</td><td>构建时执行命令</td><td><code>RUN npm install</code></td></tr><tr><td>CMD</td><td>容器启动命令</td><td><code>CMD [&quot;node&quot;, &quot;app.js&quot;]</code></td></tr><tr><td>ENV</td><td>设置环境变量</td><td><code>ENV NODE_ENV=production</code></td></tr><tr><td>EXPOSE</td><td>声明端口</td><td><code>EXPOSE 3000</code></td></tr><tr><td>ENTRYPOINT</td><td>固定启动入口</td><td><code>ENTRYPOINT [&quot;node&quot;]</code></td></tr></tbody></table><h2 id="多阶段构建" tabindex="-1">多阶段构建 <a class="header-anchor" href="#多阶段构建" aria-label="Permalink to “多阶段构建”">​</a></h2><p>多阶段构建可以减小最终镜像体积，只保留运行所需的文件。</p><div class="language-dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 阶段1：构建</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#BABED8;"> node:18 </span><span style="color:#F78C6C;">AS</span><span style="color:#BABED8;"> builder</span></span>
<span class="line"><span style="color:#F78C6C;">WORKDIR</span><span style="color:#BABED8;"> /app</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#BABED8;"> package*.json ./</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#BABED8;"> npm ci</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#BABED8;"> . .</span></span>
<span class="line"><span style="color:#F78C6C;">RUN</span><span style="color:#BABED8;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 阶段2：运行（仅包含构建产物）</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#BABED8;"> nginx:alpine</span></span>
<span class="line"><span style="color:#F78C6C;">COPY</span><span style="color:#BABED8;"> --from=builder /app/dist /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#F78C6C;">EXPOSE</span><span style="color:#BABED8;"> 80</span></span>
<span class="line"><span style="color:#F78C6C;">CMD</span><span style="color:#BABED8;"> [</span><span style="color:#C3E88D;">&quot;nginx&quot;</span><span style="color:#BABED8;">, </span><span style="color:#C3E88D;">&quot;-g&quot;</span><span style="color:#BABED8;">, </span><span style="color:#C3E88D;">&quot;daemon off;&quot;</span><span style="color:#BABED8;">]</span></span></code></pre></div><h2 id="docker-vs-虚拟机" tabindex="-1">Docker vs 虚拟机 <a class="header-anchor" href="#docker-vs-虚拟机" aria-label="Permalink to “Docker vs 虚拟机”">​</a></h2><table tabindex="0"><thead><tr><th>特性</th><th>Docker 容器</th><th>虚拟机</th></tr></thead><tbody><tr><td>虚拟化层面</td><td>操作系统层</td><td>硬件层</td></tr><tr><td>启动速度</td><td>秒级</td><td>分钟级</td></tr><tr><td>资源占用</td><td>MB 级</td><td>GB 级</td></tr><tr><td>隔离性</td><td>进程级隔离</td><td>完整 OS 隔离</td></tr><tr><td>镜像大小</td><td>通常几十 MB</td><td>通常几 GB</td></tr></tbody></table><h2 id="docker-compose-多容器编排" tabindex="-1">Docker Compose 多容器编排 <a class="header-anchor" href="#docker-compose-多容器编排" aria-label="Permalink to “Docker Compose 多容器编排”">​</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># docker-compose.yml</span></span>
<span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">3.8</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  web</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    build</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> .</span></span>
<span class="line"><span style="color:#F07178;">    ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      -</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">3000:3000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    depends_on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      -</span><span style="color:#C3E88D;"> db</span></span>
<span class="line"><span style="color:#F07178;">    environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      -</span><span style="color:#C3E88D;"> DB_HOST=db</span></span>
<span class="line"><span style="color:#F07178;">  db</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    image</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> mysql:8</span></span>
<span class="line"><span style="color:#F07178;">    environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> secret</span></span>
<span class="line"><span style="color:#F07178;">      MYSQL_DATABASE</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> app</span></span>
<span class="line"><span style="color:#F07178;">    volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      -</span><span style="color:#C3E88D;"> db_data:/var/lib/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  db_data</span><span style="color:#89DDFF;">:</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动所有服务</span></span>
<span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#C3E88D;"> up</span><span style="color:#C3E88D;"> -d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看日志</span></span>
<span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#C3E88D;"> logs</span><span style="color:#C3E88D;"> -f</span><span style="color:#C3E88D;"> web</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止并清理</span></span>
<span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#C3E88D;"> down</span></span></code></pre></div><p>Docker 通过容器化解决了&quot;在我机器上能跑&quot;的环境一致性问题。掌握 Dockerfile 编写与多阶段构建，能够显著提升部署效率与镜像质量。配合 Docker Compose 和 Kubernetes，可以实现从开发到生产的完整容器化工作流。</p>`,22)])])}const E=a(e,[["render",o]]);export{C as __pageData,E as default};
