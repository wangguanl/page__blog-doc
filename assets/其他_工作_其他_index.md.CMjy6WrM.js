import{az as a,P as n,Q as l,aQ as p}from"./chunks/framework.oHSDCGnP.js";import"./chunks/theme.SRuXo2Mz.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"其他/工作/其他/index.md","filePath":"其他/工作/其他/index.md","lastUpdated":1785339991000}'),o={name:"其他/工作/其他/index.md"};function e(t,s,c,r,D,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h2 id="其他工作经验" tabindex="-1">其他工作经验 <a class="header-anchor" href="#其他工作经验" aria-label="Permalink to “其他工作经验”">​</a></h2><p><a href="https://github.com/stanzhai/notes" target="_blank" rel="noreferrer">软件工程师的修养</a></p><p>除了核心的编码与架构能力，日常工作中还有许多值得积累的经验，包括效率工具、文档习惯、跨部门协作和问题复盘等。这些&quot;软经验&quot;往往决定了工作的实际产出质量。</p><h2 id="效率工具使用" tabindex="-1">效率工具使用 <a class="header-anchor" href="#效率工具使用" aria-label="Permalink to “效率工具使用”">​</a></h2><h3 id="命令行效率" tabindex="-1">命令行效率 <a class="header-anchor" href="#命令行效率" aria-label="Permalink to “命令行效率”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 常用别名配置（~/.zshrc 或 ~/.bashrc）</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> gs</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git status</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> gp</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git push</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> gl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git log --oneline --graph</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> dev</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run dev</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> build</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm run build</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 快速跳转项目目录</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> proj</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cd ~/Projects</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 fzf 快速查找文件</span></span>
<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> vf</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim </span><span style="color:#BABED8;">\\$</span><span style="color:#C3E88D;">(fzf)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 zoxide 智能跳转</span></span>
<span class="line"><span style="color:#FFCB6B;">z</span><span style="color:#C3E88D;"> my-project</span></span></code></pre></div><h3 id="git-工作流" tabindex="-1">Git 工作流 <a class="header-anchor" href="#git-工作流" aria-label="Permalink to “Git 工作流”">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 功能分支开发</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> checkout</span><span style="color:#C3E88D;"> -b</span><span style="color:#C3E88D;"> feature/user-login</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 交互式 rebase 整理提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> rebase</span><span style="color:#C3E88D;"> -i</span><span style="color:#C3E88D;"> HEAD~3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cherry-pick 合并特定提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> cherry-pick</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#C3E88D;">commit-has</span><span style="color:#BABED8;">h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># stash 暂存修改</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> stash</span><span style="color:#C3E88D;"> pop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查找引入 bug 的提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> bisect</span><span style="color:#C3E88D;"> start</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> bisect</span><span style="color:#C3E88D;"> bad</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> bisect</span><span style="color:#C3E88D;"> good</span><span style="color:#89DDFF;"> &lt;</span><span style="color:#C3E88D;">commit-has</span><span style="color:#BABED8;">h</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="文档习惯" tabindex="-1">文档习惯 <a class="header-anchor" href="#文档习惯" aria-label="Permalink to “文档习惯”">​</a></h2><h3 id="技术文档模板" tabindex="-1">技术文档模板 <a class="header-anchor" href="#技术文档模板" aria-label="Permalink to “技术文档模板”">​</a></h3><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">功能名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">背景</span></span>
<span class="line"><span style="color:#BABED8;">为什么需要这个功能，解决什么问题。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">方案设计</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 技术选型及理由</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 核心流程图</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 数据结构设计</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 接口定义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">影响范围</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 涉及的模块</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 兼容性考虑</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 回滚方案</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">排期</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 任务 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 预估时间 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 负责人 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;"> ---</span><span style="color:#89DDFF;"> |</span><span style="color:#89DDFF;"> ---</span><span style="color:#89DDFF;"> |</span><span style="color:#89DDFF;"> ---</span><span style="color:#89DDFF;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 开发 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 2天 </span><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;"> -</span><span style="color:#89DDFF;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 测试 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 1天 </span><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;"> -</span><span style="color:#89DDFF;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 上线 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 0.5天 </span><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;"> -</span><span style="color:#89DDFF;"> |</span></span></code></pre></div><h3 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-label="Permalink to “接口文档”">​</a></h3><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 接口：用户登录</span></span>
<span class="line"><span style="color:#C3E88D;">POST /api/login</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">请求体</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  username</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> string</span><span style="color:#676E95;font-style:italic;">  # 用户名</span></span>
<span class="line"><span style="color:#F07178;">  password</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> string</span><span style="color:#676E95;font-style:italic;">  # 密码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">响应</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">  code</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> number</span><span style="color:#676E95;font-style:italic;">       # 0 表示成功</span></span>
<span class="line"><span style="color:#F07178;">  data</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    token</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> string</span><span style="color:#676E95;font-style:italic;">    # 认证令牌</span></span>
<span class="line"><span style="color:#F07178;">    userInfo</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> object</span><span style="color:#676E95;font-style:italic;"> # 用户信息</span></span>
<span class="line"><span style="color:#F07178;">  message</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> string</span><span style="color:#676E95;font-style:italic;">    # 提示信息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">错误码</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F78C6C;">  1001</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 用户名或密码错误</span></span>
<span class="line"><span style="color:#F78C6C;">  1002</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> 账号已被锁定</span></span></code></pre></div><h2 id="跨部门协作" tabindex="-1">跨部门协作 <a class="header-anchor" href="#跨部门协作" aria-label="Permalink to “跨部门协作”">​</a></h2><h3 id="与产品经理协作" tabindex="-1">与产品经理协作 <a class="header-anchor" href="#与产品经理协作" aria-label="Permalink to “与产品经理协作”">​</a></h3><table tabindex="0"><thead><tr><th>场景</th><th>协作要点</th></tr></thead><tbody><tr><td>需求评审</td><td>提前阅读文档，评估可行性，提出技术约束</td></tr><tr><td>需求变更</td><td>评估影响范围，及时沟通排期调整</td></tr><tr><td>验收测试</td><td>明确验收标准，记录偏差项</td></tr><tr><td>上线确认</td><td>确认功能完整性和回滚方案</td></tr></tbody></table><h3 id="与后端协作" tabindex="-1">与后端协作 <a class="header-anchor" href="#与后端协作" aria-label="Permalink to “与后端协作”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span>协作规范：</span></span>
<span class="line"><span>1. 接口先行：前后端先约定接口格式，并行开发</span></span>
<span class="line"><span>2. Mock 数据：前端使用 Mock 数据开发，不依赖后端进度</span></span>
<span class="line"><span>3. 联调对接：约定联调时间，准备测试数据</span></span>
<span class="line"><span>4. 异常处理：统一错误码规范，前端做兜底处理</span></span></code></pre></div><h2 id="问题复盘" tabindex="-1">问题复盘 <a class="header-anchor" href="#问题复盘" aria-label="Permalink to “问题复盘”">​</a></h2><h3 id="线上故障复盘模板" tabindex="-1">线上故障复盘模板 <a class="header-anchor" href="#线上故障复盘模板" aria-label="Permalink to “线上故障复盘模板”">​</a></h3><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight" style="background-color:#292D3E;color:#babed8;" tabindex="0" dir="ltr"><code><span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">故障复盘</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">故障描述</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 发生时间：2024-01-15 14:30</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 影响范围：用户无法登录，持续 30 分钟</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> 影响用户数：约 5000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">根因分析</span></span>
<span class="line"><span style="color:#BABED8;">Token 刷新逻辑未处理接口超时，导致刷新失败后用户被登出。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">时间线</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 时间 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 事件 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#89DDFF;"> ---</span><span style="color:#89DDFF;"> |</span><span style="color:#89DDFF;"> ---</span><span style="color:#89DDFF;"> |</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 14:30 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 监控告警，用户登录失败率飙升 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 14:35 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 定位到 Token 刷新接口超时 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 14:45 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 临时修复：增加重试机制 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 15:00 </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> 验证修复，恢复正常 </span><span style="color:#89DDFF;">|</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">改进措施</span></span>
<span class="line"><span style="color:#89DDFF;">1.</span><span style="color:#BABED8;"> Token 刷新增加重试和降级逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">2.</span><span style="color:#BABED8;"> 接口超时统一设置 10s 上限</span></span>
<span class="line"><span style="color:#89DDFF;">3.</span><span style="color:#BABED8;"> 增加登录失败率监控告警</span></span>
<span class="line"><span style="color:#89DDFF;">4.</span><span style="color:#BABED8;"> 完善 Token 异常处理的单元测试</span></span></code></pre></div><h2 id="工作方法论" tabindex="-1">工作方法论 <a class="header-anchor" href="#工作方法论" aria-label="Permalink to “工作方法论”">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>说明</th><th>应用场景</th></tr></thead><tbody><tr><td>二八法则</td><td>80% 的价值来自 20% 的工作</td><td>优先级排序</td></tr><tr><td>MVP</td><td>最小可行产品，快速验证</td><td>新功能开发</td></tr><tr><td>PDCA</td><td>计划-执行-检查-改进</td><td>持续优化</td></tr><tr><td>5W1H</td><td>What/Why/When/Where/Who/How</td><td>问题分析</td></tr><tr><td>时间盒</td><td>固定时间产出，避免过度完美</td><td>任务估算</td></tr></tbody></table>`,23)])])}const B=a(o,[["render",e]]);export{d as __pageData,B as default};
