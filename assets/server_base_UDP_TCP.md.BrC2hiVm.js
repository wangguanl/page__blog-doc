import{az as a,P as n,Q as l,aQ as t}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/base/UDP_TCP.md","filePath":"server/base/UDP_TCP.md","lastUpdated":1785339991000}'),e={name:"server/base/UDP_TCP.md"};function p(o,s,c,i,r,d){return n(),l("div",null,[...s[0]||(s[0]=[t(`<h2 id="udp-与-tcp-协议" tabindex="-1">UDP 与 TCP 协议 <a class="header-anchor" href="#udp-与-tcp-协议" aria-label="Permalink to “UDP 与 TCP 协议”">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Glossary/TCP" target="_blank" rel="noreferrer">MDN TCP 与 UDP</a></p><p>TCP（Transmission Control Protocol）与 UDP（User Datagram Protocol）是传输层的两大核心协议。TCP 提供面向连接的可靠传输，UDP 提供无连接的高效传输，二者适用场景截然不同。</p><h2 id="协议对比" tabindex="-1">协议对比 <a class="header-anchor" href="#协议对比" aria-label="Permalink to “协议对比”">​</a></h2><table tabindex="0"><thead><tr><th>特性</th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>连接方式</td><td>面向连接</td><td>无连接</td></tr><tr><td>可靠性</td><td>可靠（保证送达）</td><td>不可靠（尽力而为）</td></tr><tr><td>传输顺序</td><td>有序</td><td>无序</td></tr><tr><td>传输速度</td><td>较慢</td><td>快</td></tr><tr><td>头部开销</td><td>20 字节</td><td>8 字节</td></tr><tr><td>流量/拥塞控制</td><td>有</td><td>无</td></tr><tr><td>典型场景</td><td>网页、文件传输、邮件</td><td>视频直播、DNS、游戏</td></tr></tbody></table><h2 id="tcp-三次握手" tabindex="-1">TCP 三次握手 <a class="header-anchor" href="#tcp-三次握手" aria-label="Permalink to “TCP 三次握手”">​</a></h2><p>TCP 通过三次握手建立连接，确保双方都能发送和接收数据。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 三次握手流程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第一次握手：客户端 -&gt; SYN -&gt; 服务器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   客户端进入 SYN_SENT 状态</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   SYN = 1, seq = x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第二次握手：服务器 -&gt; SYN+ACK -&gt; 客户端</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   服务器进入 SYN_RCVD 状态</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   SYN = 1, ACK = 1, seq = y, ack = x+1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第三次握手：客户端 -&gt; ACK -&gt; 服务器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   双方进入 ESTABLISHED 状态</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   ACK = 1, seq = x+1, ack = y+1</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 tcpdump 抓包观察三次握手</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#C3E88D;"> tcpdump</span><span style="color:#C3E88D;"> -i</span><span style="color:#C3E88D;"> eth0</span><span style="color:#C3E88D;"> -n</span><span style="color:#89DDFF;"> &#39;</span><span style="color:#C3E88D;">tcp port 80</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> -c</span><span style="color:#F78C6C;"> 6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 输出示例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># IP 10.0.0.1.54321 &gt; 10.0.0.2.80: Flags [S], seq 100</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># IP 10.0.0.2.80 &gt; 10.0.0.1.54321: Flags [S.], seq 200, ack 101</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># IP 10.0.0.1.54321 &gt; 10.0.0.2.80: Flags [.], ack 201</span></span></code></pre></div><h3 id="为什么是三次而非两次" tabindex="-1">为什么是三次而非两次 <a class="header-anchor" href="#为什么是三次而非两次" aria-label="Permalink to “为什么是三次而非两次”">​</a></h3><p>两次握手无法防止历史失效连接。若客户端的 SYN 延迟到达，服务器回复后误以为连接已建立，会浪费资源等待永远不会来的数据。第三次握手让客户端确认连接有效性。</p><h2 id="tcp-四次挥手" tabindex="-1">TCP 四次挥手 <a class="header-anchor" href="#tcp-四次挥手" aria-label="Permalink to “TCP 四次挥手”">​</a></h2><p>TCP 通过四次挥手断开连接，因为 TCP 是全双工的，每个方向都需要独立关闭。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 四次挥手流程</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第一次挥手：客户端 -&gt; FIN -&gt; 服务器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   客户端进入 FIN_WAIT_1，表示不再发送数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第二次挥手：服务器 -&gt; ACK -&gt; 客户端</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   服务器进入 CLOSE_WAIT，客户端进入 FIN_WAIT_2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第三次挥手：服务器 -&gt; FIN -&gt; 客户端</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   服务器进入 LAST_ACK，表示数据已发完</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 第四次挥手：客户端 -&gt; ACK -&gt; 服务器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#   客户端进入 TIME_WAIT（等待 2MSL），服务器关闭</span></span></code></pre></div><h3 id="time-wait-状态" tabindex="-1">TIME_WAIT 状态 <a class="header-anchor" href="#time-wait-状态" aria-label="Permalink to “TIME_WAIT 状态”">​</a></h3><p>主动关闭方在发送最后 ACK 后进入 TIME_WAIT，持续 2 个 MSL（Maximum Segment Lifetime）。目的有二：</p><ol><li>确保最后的 ACK 能到达对端，若丢失对端会重发 FIN。</li><li>等待本连接的报文在网络中消亡，防止干扰新连接。</li></ol><h2 id="tcp-可靠性机制" tabindex="-1">TCP 可靠性机制 <a class="header-anchor" href="#tcp-可靠性机制" aria-label="Permalink to “TCP 可靠性机制”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># TCP 保证可靠性的核心机制</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 1. 序列号与确认号：保证有序与不丢</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 重传机制：超时未收到 ACK 则重传</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. 流量控制：滑动窗口，接收方告知发送速率</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4. 拥塞控制：慢启动、拥塞避免、快重传、快恢复</span></span></code></pre></div><h2 id="适用场景选择" tabindex="-1">适用场景选择 <a class="header-anchor" href="#适用场景选择" aria-label="Permalink to “适用场景选择”">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;">// TCP 适用：需要可靠传输</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - HTTP/HTTPS（网页请求）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - FTP（文件传输）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - SMTP（邮件发送）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - SSH（远程登录）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// UDP 适用：追求实时性，容忍丢包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - DNS（域名查询）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - 视频直播 / 语音通话</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - 在线游戏（位置同步）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// - IoT 设备上报</span></span></code></pre></div><p>TCP 与 UDP 没有绝对的优劣。TCP 牺牲速度换取可靠性，适合必须完整到达的数据；UDP 牺牲可靠性换取低延迟，适合实时性要求高的场景。很多应用层协议（如 QUIC/HTTP3）在 UDP 之上自行实现可靠性，兼得二者之长。</p>`,22)])])}const P=a(e,[["render",p]]);export{b as __pageData,P as default};
