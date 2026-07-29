import{az as n,P as a,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/nginx/index.md","filePath":"server/nginx/index.md","lastUpdated":1740545259000}'),e={name:"server/nginx/index.md"};function o(t,s,c,i,r,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="下载window版" tabindex="-1"><a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">下载window版</a> <a class="header-anchor" href="#下载window版" aria-label="Permalink to “下载window版”">​</a></h2><h2 id="nginx常用命令" tabindex="-1">Nginx常用命令 <a class="header-anchor" href="#nginx常用命令" aria-label="Permalink to “Nginx常用命令”">​</a></h2><ol><li>重启</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">./nginx.exe</span><span style="color:#C3E88D;"> -s</span><span style="color:#C3E88D;"> reload</span></span></code></pre></div><ol start="2"><li>停止</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">./nginx.exe</span><span style="color:#C3E88D;"> -s</span><span style="color:#C3E88D;"> stop</span></span></code></pre></div><ol start="3"><li>退出</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">./nginx.exe</span><span style="color:#C3E88D;"> -s</span><span style="color:#C3E88D;"> quit</span></span></code></pre></div><ol start="4"><li>查看更多命令</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">./nginx.exe</span><span style="color:#C3E88D;"> -h</span></span></code></pre></div><p>以上命令不可用时执行以下命令</p><h3 id="查看所有nginx进程" tabindex="-1">查看所有nginx进程 <a class="header-anchor" href="#查看所有nginx进程" aria-label="Permalink to “查看所有nginx进程”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">tasklist</span><span style="color:#C3E88D;">  /fi</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">imagename eq nginx.exe</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="杀死所有nginx进程" tabindex="-1">杀死所有nginx进程 <a class="header-anchor" href="#杀死所有nginx进程" aria-label="Permalink to “杀死所有nginx进程”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#FFCB6B;">taskkill</span><span style="color:#C3E88D;"> /f</span><span style="color:#C3E88D;"> /t</span><span style="color:#C3E88D;"> /im</span><span style="color:#C3E88D;"> nginx.exe</span></span></code></pre></div><h2 id="conf-nginx-conf" tabindex="-1">conf/nginx.conf <a class="header-anchor" href="#conf-nginx-conf" aria-label="Permalink to “conf/nginx.conf”">​</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="color:#89DDFF;">worker_processes </span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">events</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    worker_connections </span><span style="color:#F78C6C;"> 1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">    include </span><span style="color:#BABED8;">      mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    default_type </span><span style="color:#BABED8;"> application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    sendfile </span><span style="color:#89DDFF;">       on;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#89DDFF;">    keepalive_timeout </span><span style="color:#F78C6C;"> 65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">    server</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        listen </span><span style="color:#F78C6C;">      80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        server_name </span><span style="color:#BABED8;"> localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">        location</span><span style="color:#FFCB6B;"> / </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            root </span><span style="color:#BABED8;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">            index </span><span style="color:#BABED8;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #</span></span>
<span class="line"><span style="color:#89DDFF;">        error_page </span><span style="color:#F78C6C;">  500</span><span style="color:#F78C6C;"> 502</span><span style="color:#F78C6C;"> 503</span><span style="color:#F78C6C;"> 504</span><span style="color:#BABED8;">  /50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">        location</span><span style="color:#89DDFF;"> =</span><span style="color:#C3E88D;"> /50x.html </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            root </span><span style="color:#BABED8;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    root           html;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #    deny  all;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        #}</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#C792EA;">    server</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#89DDFF;">        listen </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        server_name </span><span style="color:#BABED8;">gentry.mobi</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">        location</span><span style="color:#FFCB6B;"> /api/ </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            proxy_pass </span><span style="color:#BABED8;">http://123.56.217.228:9999/api/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#C792EA;">        location</span><span style="color:#FFCB6B;"> /back/ </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            proxy_pass </span><span style="color:#BABED8;">http://123.56.217.228:9998</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#C792EA;">        location</span><span style="color:#FFCB6B;"> / </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            proxy_pass </span><span style="color:#BABED8;">http://123.56.217.228:9997</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #server {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    listen       8000;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    listen       somename:8080;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    location / {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #        root   html;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    # HTTPS server</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #server {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    listen       443 ssl;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    location / {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #        root   html;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #    }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #}</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre></div>`,17)])])}const h=n(e,[["render",o]]);export{E as __pageData,h as default};
