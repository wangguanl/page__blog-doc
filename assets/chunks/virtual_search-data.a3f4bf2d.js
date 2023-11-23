`,l:"css/基础/flex/index.html",a:"flex"},"1.0":{t:"转载：Flex 演示\r",p:`&lt;CustomComponent /&gt;
`,l:"css/基础/flex/show.html",a:"转载-flex-演示"},"2.0":{t:"# `grid`\r",p:`演示
`,l:"css/基础/grid/index.html",a:"grid"},"2.1":{t:"`grid` 是一个二维布局\r",p:"\r",l:"css/基础/grid/index.html#grid-是一个二维布局",a:"grid-是一个二维布局"},"2.2":{t:"基本概念\r",p:`
容器（container）
项（item）（每一项元素）
行（row）
列（column）
间距（gap）
区域（area ...`,l:"css/基础/grid/index.html#基本概念",a:"基本概念"},"2.3":{t:"容器属性\r",p:`
grid-template-columns（定义列存放多少项）
grid-template-rows（定义行存放多少项）
 ...`,l:"css/基础/grid/index.html#容器属性",a:"容器属性"},"3.0":{t:"<CustomComponent />",p:"",l:"css/基础/grid/show.html",a:"customcomponent"},"4.0":{t:"指南",p:"",l:"css/基础/index.html",a:"指南"},"5.0":{t:"vscode 正则 rem 转换为 rpx\r",p:`0.(\\d)rem
$10rpx // $1是括号内容
0.([1-9]\\d)rem
$1rpx
(\\d+).(\\d)rem ...`,l:"css/基础/rem转换rpx.html",a:"vscode-正则-rem-转换为-rpx"},"6.0":{t:"伪类、伪元素",p:"",l:"css/基础/伪类_伪元素.html",a:"伪类、伪元素"},"7.0":{t:"动画效果",p:"",l:"css/基础/动画效果.html",a:"动画效果"},"8.0":{t:"@media 媒体查询",p:"",l:"css/基础/媒体查询.html",a:"media-媒体查询"},"9.0":{t:"弹性盒\r",p:`双飞翼
圣杯
响应式布局
`,l:"css/基础/布局.html",a:"弹性盒"},"10.0":{t:"过渡效果",p:"",l:"css/基础/过渡效果.html",a:"过渡效果"},"11.0":{t:"选择器",p:"",l:"css/基础/选择器.html",a:"选择器"},"12.0":{t:"animate.css",p:"",l:"css/库/animate.html",a:"animate-css"},"13.0":{t:"BootStrap",p:"",l:"css/库/bootstrap.html",a:"bootstrap"},"14.0":{t:"Normalize.css",p:"",l:"css/库/normalize.html",a:"normalize-css"},"15.0":{t:"Tailwind CSS",p:"",l:"css/框架/tailwind.html",a:"tailwind-css"},"16.0":{t:"```scss\r",p:`$elementSeparator: '__';
$modifierSeparator: '--';
@function c ...`,l:"css/预编译/BEM.html",a:"scss"},"17.0":{t:"多行省略\r",p:`@mixin multiline-ellipsis($line: 2) {
  overflow: hidden;
  te ...`,l:"css/预编译/functions.html",a:"多行省略"},"18.0":{t:"1. 确定bem文件是否被编译成一个空中文件\r",p:`
确定_文件和普通文件是否相同
cli脚手架，@import的文件是否被编译了多份， 也就是涉及到的页面都导入了
引入的sa ...`,l:"css/预编译/scss.html",a:"_1-确定bem文件是否被编译成一个空中文件"},"20.0":{t:"网道  \r",p:`MDN
`,l:"html/index.html",a:"网道"},"21.0":{t:"禁止将页面中的数字识别为电话号码\r",p:"&lt;!-- iPhone上的Safari(还有些webkit android手机浏览器)会自动对看起来像是电话号码的数字 ...",l:"html/meta.html",a:"禁止将页面中的数字识别为电话号码"},"21.1":{t:"不识别邮箱\r",p:`&lt;!-- 忽略Android平台中对邮箱地址的识别 --&gt;
&lt;meta content=&quot;ema ...`,l:"html/meta.html#不识别邮箱",a:"不识别邮箱"},"21.2":{t:"当网站添加到主屏幕快速启动方式，可隐藏地址栏（仅针对ios的safari有效）\r",p:"&lt;!-- 这meta的作用就是删除默认的苹果工具栏和菜单栏。content有两个值”yes”和”no”,当我们需要显示 ...",l:"html/meta.html#当网站添加到主屏幕快速启动方式-可隐藏地址栏-仅针对ios的safari有效",a:"当网站添加到主屏幕快速启动方式-可隐藏地址栏-仅针对ios的safari有效"},"21.3":{t:"修改ios移动端浏览器的导航控制栏颜色\r",p:"&lt;!-- 默认值为default（白色），可以定为black（黑色）和black-translucent（灰色半透明） ...",l:"html/meta.html#修改ios移动端浏览器的导航控制栏颜色",a:"修改ios移动端浏览器的导航控制栏颜色"},"21.4":{t:"ios创建应用程序样式的图标\r",p:"&lt;!-- iOS用rel=&quot;apple-touch-icon&quot;,android 用rel=&quo ...",l:"html/meta.html#ios创建应用程序样式的图标",a:"ios创建应用程序样式的图标"},"25.0":{t:"**程序中设置两个线程**：\r",p:`
一个负责程序本身的运行，称为&quot;主线程&quot;；
另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被 ...`,l:"js/runtime/event-loop.html",a:"程序中设置两个线程"},"26.0":{t:"- localStorage：本地存储达到5M或者更大，本地持久化存储\r",p:`
sesstionStorage：本地存储达到5M或者更大，关闭浏览器后自动删除
cookies：服务端可以向浏览器存储，本 ...`,l:"js/runtime/localStorage__sessionStorage__cookies.html",a:"localstorage-本地存储达到5m或者更大-本地持久化存储"},"27.0":{t:"target 和 currentTarget\r",p:`
target是事件发生的元素（点击时命中的元素）
currentTarget是是事件处理绑定的元素（点击时触发绑定事件元素 ...`,l:"js/runtime/target__current-target.html",a:"target-和-currenttarget"},"28.0":{t:"- 联系\r",p:`
都是 事件触发时序问题 的术语。
绑定事件方法（ addEventListener） 的第三个参数是控制事件触发顺序的，  ...`,l:"js/runtime/事件冒泡、事件捕获、事件委托.html",a:"联系"},"29.0":{t:"abstract 抽象类\r",p:`class Person


`,l:"js/typescript/abstract.html",a:"abstract-抽象类"},"32.0":{t:"为什么选择 typescript\r",p:`
增加了代码的可读性和可维护性
非常包容

js不严谨，ts很严谨， 任何事情都遵循定义法， 让任何事情都有迹可循，有因果关 ...`,l:"js/typescript/index.html",a:"为什么选择-typescript"},"33.0":{t:"基础类型\r",p:`
string
number
boolean
null
undefined
symbol
any 任意值表示允许赋值任意类型 ...`,l:"js/typescript/基础类型.html",a:"基础类型"},"33.1":{t:"引用数据类型\r",p:`
Object
Array

`,l:"js/typescript/基础类型.html#引用数据类型",a:"引用数据类型"},"33.2":{t:"类型推论\r",p:`
给变量赋值初始值，如果没有给变量指定类型，则根据初始值进行类型推论
没有给类型初始值，则被推断成 any 类型, 不会被类 ...`,l:"js/typescript/基础类型.html#类型推论",a:"类型推论"},"33.3":{t:"联合类型\r",p:`var multi: string | number = '1';
multi = 2;

`,l:"js/typescript/基础类型.html#联合类型",a:"联合类型"},"33.4":{t:"enum 枚举\r",p:`enum Weeks {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thu ...`,l:"js/typescript/基础类型.html#enum-枚举",a:"enum-枚举"},"33.5":{t:"interface 接口\r",p:`interface I_State {
  n: number;
  s: string | number; // 使用联合 ...`,l:"js/typescript/基础类型.html#interface-接口",a:"interface-接口"},"33.6":{t:"函数\r",p:`
函数声明

function getUserInfo(
  name: string = '张三',
  age: num ...`,l:"js/typescript/基础类型.html#函数",a:"函数"},"33.7":{t:"数组类型\r",p:`
数组 语法

var arr: string[] = ['s', 't']


泛型 语法

var arr: Array ...`,l:"js/typescript/基础类型.html#数组类型",a:"数组类型"},"33.8":{t:"type 类型别名\r",p:`type typeName = string | number | undefined;
var a: typeName = ...`,l:"js/typescript/基础类型.html#type-类型别名",a:"type-类型别名"},"34.0":{t:"*.d.ts 只包含类型声明， 不包含逻辑，不会编译， 不会被打包， 只是在程序运行时提供校验\r",p:`// 表示以css后缀的文件都会遵循以下约定
declare module &quot;*.css&quot; {
  // ...`,l:"js/typescript/定义声明.html",a:"d-ts-只包含类型声明-不包含逻辑-不会编译-不会被打包-只是在程序运行时提供校验"},"35.0":{t:"函数默认赋值\r",p:`function fn(num1: number = 4, num2: number = 5): number {
  re ...`,l:"js/typescript/常用方法.html",a:"函数默认赋值"},"35.1":{t:"函数解构赋值\r",p:`接口 语法
interface I_Fn {
  num1?: number;
  num2?: number;
}
fun ...`,l:"js/typescript/常用方法.html#函数解构赋值",a:"函数解构赋值"},"35.2":{t:"函数类型传参\r",p:`interface I_Options {
  width: number
}
function configure (w: ...`,l:"js/typescript/常用方法.html#函数类型传参",a:"函数类型传参"},"35.3":{t:"类型断言\r",p:`任意字符串都可以声明成类型
此时会出现类型推断错误，因为req的method是string类型，而handleRequest ...`,l:"js/typescript/常用方法.html#类型断言",a:"类型断言"},"36.0":{t:"> - 在定义函数时，输入的类型与输出的类型有关，或者两个输入的类型与已某种方式相关联\r",p:`

泛型指在定义函数、接口、类的时候，不预先指定具体类型，而在使用的时候再指定类型的一种特性


`,l:"js/typescript/泛型.html",a:"在定义函数时-输入的类型与输出的类型有关-或者两个输入的类型与已某种方式相关联"},"36.1":{t:"通用语法\r",p:"function createArray&lt;Type&gt;(l: number, v: Type): Array&lt ...",l:"js/typescript/泛型.html#通用语法",a:"通用语法"},"36.2":{t:"泛型限制条件\r",p:"function longest&lt;T extends { length: number }&gt;(a: T, b:  ...",l:"js/typescript/泛型.html#泛型限制条件",a:"泛型限制条件"},"38.0":{t:"泛型 语法\r",p:`let someValue: any = &quot;this is a string&quot;;
let strLeng ...`,l:"js/typescript/类型断言.html",a:"泛型-语法"},"38.1":{t:"as 语法\r",p:`let someValue: any = &quot;this is a string&quot;;
let strLeng ...`,l:"js/typescript/类型断言.html#as-语法",a:"as-语法"},"38.2":{t:"忽略 undefined 和 null 类型\r",p:`function myFunc(maybeString: string | undefined | null) {
  // ...`,l:"js/typescript/类型断言.html#忽略-undefined-和-null-类型",a:"忽略-undefined-和-null-类型"},"38.3":{t:"调用函数时忽略 undefined 类型\r",p:`type NumGenerator = () =&gt; number;
function myFunc(numGenera ...`,l:"js/typescript/类型断言.html#调用函数时忽略-undefined-类型",a:"调用函数时忽略-undefined-类型"},"38.4":{t:"确定赋值断言\r",p:`let x: number;
function initialize() {
  x = 10;
}
initialize( ...`,l:"js/typescript/类型断言.html#确定赋值断言",a:"确定赋值断言"},"39.0":{t:"判断是对象\r",p:`obj.constructor === Object;

Object.prototype.toString.call(ob ...`,l:"js/utils/index.html",a:"判断是对象"},"39.1":{t:"判断是数组\r",p:`Array.isArray(arr)

obj.constructor === Array;

Object.prototy ...`,l:"js/utils/index.html#判断是数组",a:"判断是数组"},"39.2":{t:"判断对象是否为空对象\r",p:`// 1
function isEmptyObj(obj) {
  for (var item in obj) {
     ...`,l:"js/utils/index.html#判断对象是否为空对象",a:"判断对象是否为空对象"},"40.0":{t:"JQuery\r",p:"",l:"js/utils/libs.html",a:"jquery"},"40.1":{t:"Lodash\r",p:"\r",l:"js/utils/libs.html#lodash",a:"lodash"},"40.2":{t:"iscroll.js  \r",p:`解决页面不支持弹性滚动，不支持fixed引起的问题，实现下拉刷新，滑屏，缩放等功能
`,l:"js/utils/libs.html#iscroll-js",a:"iscroll-js"},"40.3":{t:"underscore.js\r",p:`该库提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象
`,l:"js/utils/libs.html#underscore-js",a:"underscore-js"},"40.4":{t:"slip.js\r",p:"\r",l:"js/utils/libs.html#slip-js",a:"slip-js"},"40.5":{t:"iSlider.js\r",p:"\r",l:"js/utils/libs.html#islider-js",a:"islider-js"},"40.6":{t:"fullpage.js\r",p:"\r",l:"js/utils/libs.html#fullpage-js",a:"fullpage-js"},"40.7":{t:"swiper.js\r",p:"",l:"js/utils/libs.html#swiper-js",a:"swiper-js"},"40.8":{t:"FastClick\r",p:"\r",l:"js/utils/libs.html#fastclick",a:"fastclick"},"40.9":{t:"d3\r",p:"",l:"js/utils/libs.html#d3",a:"d3"},"40.10":{t:"three\r",p:"",l:"js/utils/libs.html#three",a:"three"},"40.11":{t:"echarts\r",p:"",l:"js/utils/libs.html#echarts",a:"echarts"},"40.12":{t:"Yui\r",p:"",l:"js/utils/libs.html#yui",a:"yui"},"40.13":{t:"layui\r",p:"",l:"js/utils/libs.html#layui",a:"layui"},"40.14":{t:"moment\r",p:"",l:"js/utils/libs.html#moment",a:"moment"},"40.15":{t:"zepot\r",p:"",l:"js/utils/libs.html#zepot",a:"zepot"},"40.16":{t:"backbone\r",p:"",l:"js/utils/libs.html#backbone",a:"backbone"},"40.17":{t:"rax",p:"",l:"js/utils/libs.html#rax",a:"rax"},"41.0":{t:"call、apply、bind\r",p:`
三者都是用来修改this指向

apply 和 call 的功能是一样的，只是传入的参数列表形式不同。都“可以用来代替另一 ...`,l:"js/基础/call__apply__bind.html",a:"call、apply、bind"},"42.0":{t:"阮一峰ES6教程  \r",p:`网道ES6教程
`,l:"js/基础/es6.html",a:"阮一峰es6教程"},"42.1":{t:"声明变量\r",p:`增加了块级作用域、模块的概念。
let 声明变量和 const 声明常量，两个都有块级作用域。
ES5 中是没有块级作用域的 ...`,l:"js/基础/es6.html#声明变量",a:"声明变量"},"42.2":{t:"箭头函数\r",p:`
函数内是没有 this 的，调用时会自动向上查找 this， 由上下文来确定 this 。
不能使用 new 关键字
不能 ...`,l:"js/基础/es6.html#箭头函数",a:"箭头函数"},"42.3":{t:"模板字符串\r",p:"模板字符串是增强版的字符串，用反引号（`）标识，可以当作普通字符串使用，也可以用来定义多行字符串。使用 ${} 代替反斜杠\n",l:"js/基础/es6.html#模板字符串",a:"模板字符串"},"42.4":{t:"数组对象解构赋值\r",p:"\r",l:"js/基础/es6.html#数组对象解构赋值",a:"数组对象解构赋值"},"42.5":{t:"Promise\r",p:`三个状态：pending、fulfilled、reject
两个过程：padding -&gt; fulfilled、pad ...`,l:"js/基础/es6.html#promise",a:"promise"},"42.6":{t:"async／await\r",p:"将链式调用变得更加简化， 是因为 async 函数是 Generator 函数的语法糖， 容易理解， 而且和 promise ...",l:"js/基础/es6.html#async-await",a:"async-await"},"42.7":{t:"generator 管理异步回调的执行流程。\r",p:"\r",l:"js/基础/es6.html#generator-管理异步回调的执行流程。",a:"generator-管理异步回调的执行流程。"},"42.8":{t:"setTimeout、Promise、Async/Await 的区别\r",p:`事件循环中分为宏任务队列和微任务队列
其中setTimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行promis ...`,l:"js/基础/es6.html#settimeout、promise、async-await-的区别",a:"settimeout、promise、async-await-的区别"},"42.9":{t:"理解 async/await以及对Generator的优势\r",p:`async await 是用来解决异步的，async函数是Generator函数的语法糖
使用关键字async来表示，在函数 ...`,l:"js/基础/es6.html#理解-async-await以及对generator的优势",a:"理解-async-await以及对generator的优势"},"42.10":{t:"Proxy\r",p:"\r",l:"js/基础/es6.html#proxy",a:"proxy"},"42.11":{t:"Class\r",p:"ES6的 Class 可以看作是一个语法糖，它的绝大部分功能 ES5 都可以做到，新的class写法只是让对象原型的写法更加 ...",l:"js/基础/es6.html#class",a:"class"},"42.12":{t:"import、export\r",p:"将 JS 代码分割成不同功能的小块进行模块化，将不同功能的代码分别写在不同文件中，各模块只需导出公共接口部分，然后通过模块的 ...",l:"js/基础/es6.html#import、export",a:"import、export"},"42.13":{t:"Symbol\r",p:`是一种基本类型。Symbol 通过调用symbol函数产生，它接收一个可选的名字参数，该函数返回的symbol是唯一的
`,l:"js/基础/es6.html#symbol",a:"symbol"},"42.14":{t:"Set、Map\r",p:`数据结构类似数组。所有的数据都是唯一的，没有重复的值。它本身是一个构造函数。
应用场景Set用于数据重组，Map用于数据储存 ...`,l:"js/基础/es6.html#set、map",a:"set、map"},"42.15":{t:"for of循环 for...of 循环可以遍历数组、Set和Map结构、某些类似数组的对象、对象，以及字符串",p:"",l:"js/基础/es6.html#for-of循环-for-of-循环可以遍历数组、set和map结构、某些类似数组的对象、对象-以及字符串",a:"for-of循环-for-of-循环可以遍历数组、set和map结构、某些类似数组的对象、对象-以及字符串"},"43.0":{t:"基本类型\r",p:`Number、String、Null、Undefined、Boolean、Symbol
`,l:"js/基础/index.html",a:"基本类型"},"43.1":{t:"引用类型\r",p:`Object、Array
`,l:"js/基础/index.html#引用类型",a:"引用类型"},"43.2":{t:"typeof \r",p:`只能判断基本类型和引用类型，无法得知更具体的类型。
`,l:"js/基础/index.html#typeof",a:"typeof"},"43.3":{t:"instanceof\r",p:"相当于 arr.constructor,把要判断的类型指向构造函数,看是否一致,但是再不同的作用域指针会出现不相等,因为作用 ...",l:"js/基础/index.html#instanceof",a:"instanceof"},"43.4":{t:"this 指针作用域",p:"",l:"js/基础/index.html#this-指针作用域",a:"this-指针作用域"},"44.0":{t:"# Object.defineProperty\r",p:"\r",l:"js/基础/Object-defineProperty.html",a:"object-defineproperty"},"44.1":{t:"语法\r",p:`const obj = {}
Object.defineProperty(obj, 'a', {
  configurabl ...`,l:"js/基础/Object-defineProperty.html#语法",a:"语法"},"44.2":{t:"configurable 默认为 false\r",p:`值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除
`,l:"js/基础/Object-defineProperty.html#configurable-默认为-false",a:"configurable-默认为-false"},"44.3":{t:"enumerable 默认为 false\r",p:"值为 true 时，该属性才会出现在对象的枚举属性中。值为 false 时 for-in、Object.keys等都遍历到属 ...",l:"js/基础/Object-defineProperty.html#enumerable-默认为-false",a:"enumerable-默认为-false"},"44.4":{t:"writable 默认为 false\r",p:`值为 true 时，属性的值才可以被改变
`,l:"js/基础/Object-defineProperty.html#writable-默认为-false",a:"writable-默认为-false"},"44.5":{t:"get\r",p:`当访问该属性时，会调用此函数
`,l:"js/基础/Object-defineProperty.html#get",a:"get"},"44.6":{t:"set\r",p:`当修改该属性值时，会调用此函数
`,l:"js/基础/Object-defineProperty.html#set",a:"set"},"45.0":{t:"# 严格模式主要有以下限制。\r",p:`
变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错
不能使用前缀 ...`,l:"js/基础/严格模式.html",a:"严格模式主要有以下限制。"},"46.0":{t:"- 声明一个构造函数，在构造函数内部使用 this 定义属性， 在构造函数的 prototype 定义方法\r",p:`

使用 new 构造函数创建实例对象，实例对象是构造函数 this 定义的属性，实例对象的 proto 指向构造函数的 p ...`,l:"js/基础/原型链.html",a:"声明一个构造函数-在构造函数内部使用-this-定义属性-在构造函数的-prototype-定义方法"},"46.1":{t:"Object.defineProperty \r",p:`设置 configurable、enumerable、writable、value、getter、setter
`,l:"js/基础/原型链.html#object-defineproperty",a:"object-defineproperty"},"46.2":{t:"Object.defineProperties \r",p:`设置多个 configurable、enumerable、writable、value、getter、setter
`,l:"js/基础/原型链.html#object-defineproperties",a:"object-defineproperties"},"46.3":{t:"Object.getOwnPropertyDescriptor \r",p:`获取单个对象的configurable、enumerable、writable、value、getter、setter
`,l:"js/基础/原型链.html#object-getownpropertydescriptor",a:"object-getownpropertydescriptor"},"46.4":{t:"Object.getOwnPropertyDescriptors \r",p:`获取对象的全部属性
`,l:"js/基础/原型链.html#object-getownpropertydescriptors",a:"object-getownpropertydescriptors"},"46.5":{t:"Person.prototype.isPrototypeOf(p1(实例))\r",p:`判断实例是否属于此原型
`,l:"js/基础/原型链.html#person-prototype-isprototypeof-p1-实例",a:"person-prototype-isprototypeof-p1-实例"},"46.6":{t:"Object.hasPrototypeOf(p1(实例))\r",p:`获取到实例的原型 对比 Person.prototype (相当于p1.proto)
`,l:"js/基础/原型链.html#object-hasprototypeof-p1-实例",a:"object-hasprototypeof-p1-实例"},"46.7":{t:"obj.hasOwnProperty('type') \r",p:`在实例上是否可以找到属性
`,l:"js/基础/原型链.html#obj-hasownproperty-type",a:"obj-hasownproperty-type"},"46.8":{t:"obj.hasPrototypeProperty('type') \r",p:`在原型(prototype)上是否可以找到属性，前提是实例上不存在
`,l:"js/基础/原型链.html#obj-hasprototypeproperty-type",a:"obj-hasprototypeproperty-type"},"46.9":{t:"继承",p:"",l:"js/基础/原型链.html#继承",a:"继承"},"47.0":{t:"1. 模块化解决了什么问题\r",p:`
全局变量污染，可通过命名解决，可行但不擅长
引用顺序，变量提升
命名空间冲突，两个库可能会使用同一个名称
无法合理地管理项 ...`,l:"js/基础/模块化.html",a:"_1-模块化解决了什么问题"},"47.1":{t:"第三方\r",p:`
AMD - requireJs
CMD - seaJs
CommonJS
UMD

`,l:"js/基础/模块化.html#第三方",a:"第三方"},"47.2":{t:"文章\r",p:`
https://www.cnblogs.com/moxiaowohuwei/p/8692359.html
https:// ...`,l:"js/基础/模块化.html#文章",a:"文章"},"48.0":{t:"1. 什么是hooks\r",p:`
hooks把类组件的一切功能都赋予了函数式组件


hooks产生的原因
常见的hooks函数

`,l:"js/设计模式/hooks.html",a:"_1-什么是hooks"},"50.0":{t:"应用这个模式时，单例对象的类必须保证只有一个实例存在。整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为。\r",p:"https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%B ...",l:"js/设计模式/单例模式.html",a:"应用这个模式时-单例对象的类必须保证只有一个实例存在。整个系统只需要拥有一个的全局对象-这样有利于我们协调系统整体的行为。"},"51.0":{t:"```javascript\r",p:`    /* class Observer {
        constructor(data) {
           ...`,l:"js/设计模式/发布订阅模式.html",a:"javascript"},"53.0":{t:"转载文章：三言两语说透柯里化和反柯里化  ",p:"JavaScript中的柯里化(Currying)和反柯里化(Uncurrying)是两种很有用的技术，可以帮助我们写出更加 ...",l:"js/设计模式/柯里化和反柯里化.html",a:"转载文章-三言两语说透柯里化和反柯里化"},"53.1":{t:"概念",p:"柯里化(Currying)是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数 ...",l:"js/设计模式/柯里化和反柯里化.html#概念",a:"概念"},"53.2":{t:"应用场景",p:`
参数复用

柯里化可以让我们轻松复用参数。例如:
function discounts(price, discount)  ...`,l:"js/设计模式/柯里化和反柯里化.html#应用场景",a:"应用场景"},"53.3":{t:"概念",p:`反柯里化(Uncurrying)与柯里化相反，它将一个接受单一参数的函数转换成接受多个参数的函数。
// 柯里化函数
fun ...`,l:"js/设计模式/柯里化和反柯里化.html#概念",a:"概念"},"53.4":{t:"实现原理",p:`反柯里化的关键是通过递归不停调用函数并传入参数，Until参数的数量达到函数需要的参数个数。
function uncurr ...`,l:"js/设计模式/柯里化和反柯里化.html#实现原理",a:"实现原理"},"53.5":{t:"应用场景",p:`
统一接口规范

有时我们会从其他模块接收到一个柯里化的函数,但我们的接口需要一个普通的多参数函数。这时可以通过反柯里化来实 ...`,l:"js/设计模式/柯里化和反柯里化.html#应用场景",a:"应用场景"},"53.6":{t:"实现add(1)(2)(3)输出6的函数",p:`这是一道典型的柯里化面试题。解析：
function curry(fn) {
  return function curri ...`,l:"js/设计模式/柯里化和反柯里化.html#实现add-1-2-3-输出6的函数",a:"实现add-1-2-3-输出6的函数"},"53.7":{t:"实现单参数compose函数",p:`compose函数可以将多个函数合并成一个函数，这也是一道常见的柯里化面试题。解析：
function compose(fn ...`,l:"js/设计模式/柯里化和反柯里化.html#实现单参数compose函数",a:"实现单参数compose函数"},"53.8":{t:"反柯里化Function.bind",p:`Function.bind 函数实现了部分参数绑定，这本质上是一个反柯里化的过程。解析：
Function.prototyp ...`,l:"js/设计模式/柯里化和反柯里化.html#反柯里化function-bind",a:"反柯里化function-bind"},"54.0":{t:"```javascript\r",p:`class Observer {
constructor(name, fn = () =&gt; {}) {
this.na ...`,l:"js/设计模式/观察者模式.html",a:"javascript"},"55.0":{t:"闭包是指有权访问另一个函数作用域中变量的函数，创建闭包最常见的方式就是在一个函数 内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用域链，将函数内部变量和方法传递到外部。\r",p:`
函数内再嵌套函数
内部函数可以引用外层的参数和变量
参数和变量不会被垃圾回收机制回收

`,l:"js/设计模式/闭包.html",a:"闭包是指有权访问另一个函数作用域中变量的函数-创建闭包最常见的方式就是在一个函数-内创建另一个函数-通过另一个函数访问这个函数的局部变量-利用闭包可以突破作用域链-将函数内部变量和方法传递到外部。"},"56.0":{t:"# `git`\r",p:"\r",l:"node/git/index.html",a:"git"},"56.1":{t:"切换分支\r",p:`git checkout branch

`,l:"node/git/index.html#切换分支",a:"切换分支"},"56.2":{t:"创建分支并切换\r",p:`git checkout -b branch

`,l:"node/git/index.html#创建分支并切换",a:"创建分支并切换"},"56.3":{t:"推送\r",p:`git add .

git commit -m 'message'

git push origin localBranc ...`,l:"node/git/index.html#推送",a:"推送"},"56.4":{t:"拉取\r",p:`git fetch

git merge

git pull = git fetch + git merge
git pul ...`,l:"node/git/index.html#拉取",a:"拉取"},"56.5":{t:"取消add的文件\r",p:`git reset filename

`,l:"node/git/index.html#取消add的文件",a:"取消add的文件"},"56.6":{t:"在本地创建分支dev并切换到该分支\r",p:`git checkout -b dev(本地分支名称) origin/dev(远程分支名称)

`,l:"node/git/index.html#在本地创建分支dev并切换到该分支",a:"在本地创建分支dev并切换到该分支"},"56.7":{t:"贮藏文件\r",p:"",l:"node/git/index.html#贮藏文件",a:"贮藏文件"},"56.8":{t:"保存，save为可选项，message为本次保存的注释\r",p:`git stash [save message]

`,l:"node/git/index.html#保存-save为可选项-message为本次保存的注释",a:"保存-save为可选项-message为本次保存的注释"},"56.9":{t:"所有保存的记录列表\r",p:`git stash list

`,l:"node/git/index.html#所有保存的记录列表",a:"所有保存的记录列表"},"56.10":{t:"恢复，num是可选项，通过git stash list可查看具体值。只能恢复一次\r",p:`git stash pop stash@{num}

`,l:"node/git/index.html#恢复-num是可选项-通过git-stash-list可查看具体值。只能恢复一次",a:"恢复-num是可选项-通过git-stash-list可查看具体值。只能恢复一次"},"56.11":{t:"恢复，num是可选项，通过git stash list可查看具体值。可回复多次\r",p:`git stash apply stash@{num}

`,l:"node/git/index.html#恢复-num是可选项-通过git-stash-list可查看具体值。可回复多次",a:"恢复-num是可选项-通过git-stash-list可查看具体值。可回复多次"},"56.12":{t:"删除某个保存，num是可选项，通过git stash list可查看具体值\r",p:`git stash drop stash@{num}

`,l:"node/git/index.html#删除某个保存-num是可选项-通过git-stash-list可查看具体值",a:"删除某个保存-num是可选项-通过git-stash-list可查看具体值"},"56.13":{t:"删除所有保存\r",p:`git stash clear

`,l:"node/git/index.html#删除所有保存",a:"删除所有保存"},"59.0":{t:"转载文章：nvm-windows安装和配置_小星星zzz的博客-CSDN博客\r",p:`\r
                    \r
                        \r
             ...`,l:"node/nvm-windows安装和配置/index.html",a:"转载文章-nvm-windows安装和配置-小星星zzz的博客-csdn博客"},"59.1":{t:"1.下载nvm-windows\r",p:`https://github.com/coreybutler/nvm-windows/releases
进入后如下图
!在这 ...`,l:"node/nvm-windows安装和配置/index.html#_1-下载nvm-windows",a:"_1-下载nvm-windows"},"59.2":{t:"2.安装\r",p:`2.1 运行安装包，同意协议，下一步
!在这里插入图片描述
2.2 选择nvm的安装目录，安装路径名最好不要有空格
!在这里 ...`,l:"node/nvm-windows安装和配置/index.html#_2-安装",a:"_2-安装"},"59.3":{t:"3.nvm的使用\r",p:`安装指定的node.js版本
nvm install 16.16.0
安装完成之后，需要使用才能生效
nvm use 16. ...`,l:"node/nvm-windows安装和配置/index.html#_3-nvm的使用",a:"_3-nvm的使用"},"59.4":{t:"4.修改npm默认镜像源\r",p:`修改npm镜像源为淘宝镜像
npm config set registry https://registry.npm.tao ...`,l:"node/nvm-windows安装和配置/index.html#_4-修改npm默认镜像源",a:"_4-修改npm默认镜像源"},"60.0":{t:"window 安装 `PM2`\r",p:`
安装到全局

npm install pm2 -g


安装windows自启动包

npm install pm2-wi ...`,l:"node/pm2/index.html",a:"window-安装-pm2"},"60.1":{t:"window 版 PM2 图形化管理\r",p:`
安装

npm install pm2-winweb -g


运行

pm2-winweb


预览

`,l:"node/pm2/index.html#window-版-pm2-图形化管理",a:"window-版-pm2-图形化管理"},"60.2":{t:"运行服务的文件\r",p:`&lt;!-- @include: ./server.js --&gt;

`,l:"node/pm2/index.html#运行服务的文件",a:"运行服务的文件"},"61.0":{t:"```html\r",p:`&lt;template&gt;
&lt;div id=&quot;app&quot;&gt;
{{ran}}
&lt;br ...`,l:"node/浏览器.html",a:"html"},"62.0":{t:"大圣\r",p:`
github
技术博客
图片

`,l:"其他/学习路线/index.html",a:"大圣"},"62.1":{t:"LGD_Sunday\r",p:`
技术博客
文章
!学习路线

`,l:"其他/学习路线/index.html#lgd-sunday",a:"lgd-sunday"},"62.2":{t:"ObjTube\r",p:`
github
bilibili
图片

`,l:"其他/学习路线/index.html#objtube",a:"objtube"},"62.3":{t:"学习社区\r",p:`
https://developer.mozilla.org/zh-CN/docs/Web
https://www.ruan ...`,l:"其他/学习路线/index.html#学习社区",a:"学习社区"},"62.4":{t:"https://github.com/ruanyf/jstraining\r",p:"\r",l:"其他/学习路线/index.html#https-github-com-ruanyf-jstraining",a:"https-github-com-ruanyf-jstraining"},"62.5":{t:"待办\r",p:`
整理封装的库，并上传到github和npm上

`,l:"其他/学习路线/index.html#待办",a:"待办"},"63.0":{t:"数据结构与算法\r",p:`
稀疏数组、
单向队列、环形队列、
单向链表、双向链表、环形链表、
约瑟夫问题、
栈、
前缀、中缀、后缀表达式、中缀表达式转 ...`,l:"其他/学习路线/主线/数据结构与算法.html",a:"数据结构与算法"},"63.1":{t:"视频链接\r",p:`

https://www.bilibili.com/video/BV1qq4y1e7zJ?spm_id_from=333. ...`,l:"其他/学习路线/主线/数据结构与算法.html#视频链接",a:"视频链接"},"63.2":{t:"文章\r",p:`
https://leetcode-cn.com/leetbook/detail/illustration-of-algor ...`,l:"其他/学习路线/主线/数据结构与算法.html#文章",a:"文章"},"64.0":{t:"函数式编程\r",p:"",l:"其他/学习路线/主线/编程思想.html",a:"函数式编程"},"64.1":{t:"行业标准",p:"",l:"其他/学习路线/主线/编程思想.html#行业标准",a:"行业标准"},"66.0":{t:"- HTTP / HTTPS / Websocket\r",p:`
DNS
CDN

`,l:"其他/学习路线/支线/互联网.html",a:"http-https-websocket"},"67.0":{t:"调试\r",p:"",l:"其他/学习路线/支线/浏览器.html",a:"调试"},"67.1":{t:"性能监控\r",p:"",l:"其他/学习路线/支线/浏览器.html#性能监控",a:"性能监控"},"67.2":{t:"node调试",p:"",l:"其他/学习路线/支线/浏览器.html#node调试",a:"node调试"},"68.0":{t:"计算机基础\r",p:"\r",l:"其他/学习路线/支线/计算机基础.html",a:"计算机基础"},"68.1":{t:"课程\r",p:`
组成原理：哈工大 刘宏伟老师
操作系统：南大 蒋炎岩
数据库
计算机网络：计算机网络微课堂
数据结构与算法：浙江大学 数据 ...`,l:"其他/学习路线/支线/计算机基础.html#课程",a:"课程"},"68.2":{t:"书籍\r",p:`
深入理解计算机系统
现代操作系统
数据结构与算法分析

`,l:"其他/学习路线/支线/计算机基础.html#书籍",a:"书籍"},"77.0":{t:"介绍\r",p:`
更强调程序员团队与业务专家之间的紧密协作、面对面的沟通（认为比书面的文档更有效）
频繁交付新的软件版本
紧凑而自我组织型的 ...`,l:"其他/工作/其他/敏捷式开发.html",a:"介绍"},"77.1":{t:"优点\r",p:`

更快交付价值：敏捷是基于价值驱动交付，项目团队要频繁的且尽快的给客户交付可以使用的产品，并尽早的让让产品投入市场可以尽早 ...`,l:"其他/工作/其他/敏捷式开发.html#优点",a:"优点"},"77.2":{t:"缺点\r",p:`
很难进行准确的资源规划： 由于敏捷团队不是一开始就知道产品“最终的样子”，而是在过程中探索用户的需求逐渐知道产品真正的终局 ...`,l:"其他/工作/其他/敏捷式开发.html#缺点",a:"缺点"},"77.3":{t:"个人要素\r",p:`
人员彼此信任，所作决定得到认可
人少但是精干，能独挡一面
应对快速变化的需求

`,l:"其他/工作/其他/敏捷式开发.html#个人要素",a:"个人要素"},"77.4":{t:"错误的做法\r",p:`

不复盘


不重视需求分析


不重视文档


不重视测试
导致结果：

需求混乱
产品缺陷
bug多
维护困难
在开发 ...`,l:"其他/工作/其他/敏捷式开发.html#错误的做法",a:"错误的做法"},"78.0":{t:'问题越多越好， 最怕的是没有问题。 "问题"是什么？ 问题就是需求的产出的前提，有需求，产品才能进一步完善，用户才会喜欢，或者说让产品销量更好\r',p:"目的（初衷）：为什么想做项目，想自己单干、创业，现在是一个信息的时代，倒卖信息差，让你增加盈利点，并且自己处于互联网之中，免 ...",l:"其他/工作/其他/电商.html",a:"问题越多越好-最怕的是没有问题。-问题-是什么-问题就是需求的产出的前提-有需求-产品才能进一步完善-用户才会喜欢-或者说让产品销量更好"},"79.0":{t:"1. 研发流程\r",p:`
需求会：先理清楚再工作，不然就是摸黑干活，返工、想法差异。


独立解决问题的能力。

工作没有进展，一直在填坑，
1.专 ...`,l:"其他/工作/工作储备.html",a:"_1-研发流程"},"80.0":{t:"产品介绍\r",p:`
将 Sketch、PSD 的视觉稿通过智能化技术生成代码。
将设计稿生成的代码通过可视化编辑控制台打开，在编辑器中可以进行 ...`,l:"其他/工作/技术文档/imgcook/产品介绍.html",a:"产品介绍"},"80.1":{t:"使用流程\r",p:`!img
`,l:"其他/工作/技术文档/imgcook/产品介绍.html#使用流程",a:"使用流程"},"80.2":{t:"工作流程\r",p:`\r
\r
\r`,l:"其他/工作/技术文档/imgcook/产品介绍.html#工作流程",a:"工作流程"},"80.3":{t:"关键词解释\r",p:`

Schema：设计图解析出的 JSON 数据格式
DSL：DSL (Domain-Specific Language 领 ...`,l:"其他/工作/技术文档/imgcook/产品介绍.html#关键词解释",a:"关键词解释"},"80.4":{t:"底层实现原理\r",p:`
使用插件解析设计稿生成 Schema 树，通过 DSL 解析  Schema 生成代码

`,l:"其他/工作/技术文档/imgcook/产品介绍.html#底层实现原理",a:"底层实现原理"},"80.5":{t:"定制化流程\r",p:`
设计师遵循设计稿规范产出设计稿，使用插件解析设计稿生成 Schema 树，编写 自定义 DSL 解析 Schema 生成代 ...`,l:"其他/工作/技术文档/imgcook/产品介绍.html#定制化流程",a:"定制化流程"},"80.6":{t:"设计稿概念\r",p:`
设计图层分为两种：静态、交互

静态：使用 #merge# 创建组包裹所有静态内容
交互：创建组包裹交互的内容


交互的 ...`,l:"其他/工作/技术文档/imgcook/产品介绍.html#设计稿概念",a:"设计稿概念"},"80.7":{t:"设计稿基本规范（https://www.imgcook.com/docs/basic-rule#220a2509）\r",p:`
首层必须要编组
粒度划分,编组要明确
将全局多个背景图层整理成一个背景图（生成组）
删除无用图层

`,l:"其他/工作/技术文档/imgcook/产品介绍.html#设计稿基本规范-https-www-imgcook-com-docs-basic-rule-220a2509",a:"设计稿基本规范-https-www-imgcook-com-docs-basic-rule-220a2509"},"80.8":{t:"流程缺陷\r",p:`
Sketch 比 PS  支持的高级规范更多


`,l:"其他/工作/技术文档/imgcook/产品介绍.html#流程缺陷",a:"流程缺陷"},"80.9":{t:"岗位职责\r",p:`
前端：开发人员不再直接介入，而是持续优化 DSL、Plugin、编写业务组件、培训、为设计师提供技术支持
设计师：遵循设计 ...`,l:"其他/工作/技术文档/imgcook/产品介绍.html#岗位职责",a:"岗位职责"},"81.0":{t:"https://www.imgcook.com/docs/simple-example\r",p:`
安装插件

sketch
PhotoShop
figma




`,l:"其他/工作/技术文档/imgcook/教程文档_快速上手.html",a:"https-www-imgcook-com-docs-simple-example"},"82.0":{t:"设计概念\r",p:`
设计图层分为两种：静态、交互

静态：使用 #merge# 创建组包裹所有静态内容
交互：创建组包裹交互的内容


交互的 ...`,l:"其他/工作/技术文档/imgcook/设计稿规范.html",a:"设计概念"},"82.1":{t:"设计稿基本规范（https://www.imgcook.com/docs/basic-rule#220a2509）\r",p:`
首层必须要编组
粒度划分,编组要明确
将全局多个背景图层整理成一个背景图（生成组）
删除无用图层

`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#设计稿基本规范-https-www-imgcook-com-docs-basic-rule-220a2509",a:"设计稿基本规范-https-www-imgcook-com-docs-basic-rule-220a2509"},"82.2":{t:"设计稿高级规范（https://www.imgcook.com/docs/advanced-rules）\r",p:`设计稿高级规范
`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#设计稿高级规范-https-www-imgcook-com-docs-advanced-rules",a:"设计稿高级规范-https-www-imgcook-com-docs-advanced-rules"},"82.3":{t:"设计图维度（交互图层命名、交互规范）\r",p:`
静态
交互



静态

设计图图层、区域划分
1200 版心图层
背景图层



交互

表单
按钮
400电话
swi ...`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#设计图维度-交互图层命名、交互规范",a:"设计图维度-交互图层命名、交互规范"},"82.4":{t:"imgcook  原理分析\r",p:`
设计师按照设计稿基本规范（设计图规范、交互规范、物料、组件：基础组件、业务组件）产出设计图
通过PS、sketch、fig ...`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#imgcook-原理分析",a:"imgcook-原理分析"},"82.5":{t:"现在支持\r",p:`可以产出静态页（不可维护、混乱的、仅机器可以运行）
`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#现在支持",a:"现在支持"},"82.6":{t:"架构\r",p:`
搭建整体业务线（自定义DSL、plugin、组件（物料、静态组件、业务组件）），培训设计师使用，后续开发人员不再开发页面、 ...`,l:"其他/工作/技术文档/imgcook/设计稿规范.html#架构",a:"架构"},"83.0":{t:"参考成品\r",p:`
小程序自带拖拽
https://lab.lowcode-engine.cn/#/
imgcook

`,l:"其他/工作/技术文档/index.html",a:"参考成品"},"83.1":{t:"物料模块\r",p:`可参考
创客贴
图司机
兔展
易企秀
MAKA
`,l:"其他/工作/技术文档/index.html#物料模块",a:"物料模块"},"84.0":{t:"参考\r",p:`小程序原生自带
[1]craftjs: https://craft.js.org/docs/overview
[2]deom ...`,l:"其他/工作/技术文档/乐高/index.html",a:"参考"},"85.0":{t:"# 产品介绍\r",p:"乐高是高效、高性能的拖拽式无代码开发平台，通过行业化模板、拖放式组件和可视化配置快速构建专题，将繁琐的底层架构和基础设施抽象 ...",l:"其他/工作/技术文档/乐高/产品文档.html",a:"产品介绍"},"85.1":{t:"其他平台\r",p:`
不符合企业现有业务流程
不仅仅是无代码，还主要具备如下四个特性：物料接入、编排能力、渲染能力、出码能力。技术介入：美恰对话 ...`,l:"其他/工作/技术文档/乐高/产品文档.html#其他平台",a:"其他平台"},"85.2":{t:"乐高\r",p:`
低门槛：

无论你懂不懂代码，无论你是技术岗还是其他岗位，简单的拖拽应用即可搭建专题；
内置了非常多的模板和自定义组件可直 ...`,l:"其他/工作/技术文档/乐高/产品文档.html#乐高",a:"乐高"},"85.3":{t:"**由技术经理带队发起项目实施，一款产品设计到开发功能再到项目落地测试，技术全权驱动整体流程，共计30个工作日**\r",p:"\r",l:"其他/工作/技术文档/乐高/产品文档.html#由技术经理带队发起项目实施-一款产品设计到开发功能再到项目落地测试-技术全权驱动整体流程-共计30个工作日",a:"由技术经理带队发起项目实施-一款产品设计到开发功能再到项目落地测试-技术全权驱动整体流程-共计30个工作日"},"85.4":{t:"组件列表\r",p:`

基础组件：文本、超链接、咨询热线、在线客服、顶部导航、底部导航、


媒体组件：图片、视频、轮播图、


表单组件：输入 ...`,l:"其他/工作/技术文档/乐高/产品文档.html#组件列表",a:"组件列表"},"85.5":{t:"画布\r",p:`

组件

鼠标选中组件：使用 Ctrl + C 组合键复制， 使用 Ctrl + V 组合键粘贴
可进行 拖拽移动、拖拽缩 ...`,l:"其他/工作/技术文档/乐高/产品文档.html#画布",a:"画布"},"85.6":{t:"控制面板\r",p:`
样式面板

自由拖拽
独占一行
容器样式

宽度自适应、像素、百分比单位
高度自适应、像素
左边距，可快捷对齐
上边距
内 ...`,l:"其他/工作/技术文档/乐高/产品文档.html#控制面板",a:"控制面板"},"86.0":{t:"1. 容器嵌套\r",p:`
富文本编辑器
样式

溢出隐藏
:hover、等伪类的应用
阴影


事件

鼠标划入效果放大
锚点


组件

地图
弹 ...`,l:"其他/工作/技术文档/乐高/优化.html",a:"_1-容器嵌套"},"87.0":{t:"vite\r",p:"在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包 ...",l:"其他/工作/技术文档/乐高/引入新技术.html",a:"vite"},"88.0":{t:"# Schema\r",p:`收集画布配置、节点配置
`,l:"其他/工作/技术文档/乐高/技术架构.html",a:"schema"},"88.1":{t:"DSL\r",p:`将 Schema 转代码（领域特定语言）
`,l:"其他/工作/技术文档/乐高/技术架构.html#dsl",a:"dsl"},"89.0":{t:"```\r",p:`├─ resize
│  ├─ sort
│  |  ├─ resize
|  |  |   └─ render
│  |  ...`,l:"其他/工作/技术文档/乐高/技术解析.html",a:""},"90.0":{t:"# 拖拽式建站的利弊分析，不要再选错了\r",p:`上传时间：2021-05-22      浏览次数：188
现在很多卖服务器的平台上，都会有卖拖拽式建站的。昨天还看到有一个 ...`,l:"其他/工作/技术文档/乐高/拖拽建站的利弊.html",a:"拖拽式建站的利弊分析-不要再选错了"},"90.1":{t:"优势：小白也能快速上手做网站\r",p:"这也许是唯一这种建站方式能拿得出手的事情了。另外很多平台说这种网站的优势是成本低，但大概率的是对建站公司的优势，对于客户来讲 ...",l:"其他/工作/技术文档/乐高/拖拽建站的利弊.html#优势-小白也能快速上手做网站",a:"优势-小白也能快速上手做网站"},"90.2":{t:"缺点：太多了，没有独立源码，续费贵，需要自己设计操作……\r",p:`这里边太多，所以我们来分享说明。起码你要接受这些弊端之后再去取选择这种建站方式。
1、不利于SEO
2、代码繁杂不规范
3、 ...`,l:"其他/工作/技术文档/乐高/拖拽建站的利弊.html#缺点-太多了-没有独立源码-续费贵-需要自己设计操作",a:"缺点-太多了-没有独立源码-续费贵-需要自己设计操作"},"90.3":{t:"以下是摘选的网友对于拖拽式网站的利弊分析：\r",p:"一、不管是使用什么建站方式，在建站前，你都需要明白它的利弊。使用拖拽建站软件，好处是即使是纯小白也能快速上手，毕竟它不需要你 ...",l:"其他/工作/技术文档/乐高/拖拽建站的利弊.html#以下是摘选的网友对于拖拽式网站的利弊分析",a:"以下是摘选的网友对于拖拽式网站的利弊分析"},"91.0":{t:"什么是低代码\r",p:"\r",l:"其他/工作/技术文档/低代码.html",a:"什么是低代码"},"91.1":{t:"为什么要做低代码\r",p:"\r",l:"其他/工作/技术文档/低代码.html#为什么要做低代码",a:"为什么要做低代码"},"91.2":{t:"低代码和无代码\r",p:"\r",l:"其他/工作/技术文档/低代码.html#低代码和无代码",a:"低代码和无代码"},"91.3":{t:"低代码有哪些场景\r",p:"",l:"其他/工作/技术文档/低代码.html#低代码有哪些场景",a:"低代码有哪些场景"},"91.4":{t:"目前市场上有很多种场景，以大厂为例，在云服务器上（腾讯、阿里、华为等）都有自己的拖拽建站（要单独购买服务）。\r",p:"",l:"其他/工作/技术文档/低代码.html#目前市场上有很多种场景-以大厂为例-在云服务器上-腾讯、阿里、华为等-都有自己的拖拽建站-要单独购买服务-。",a:"目前市场上有很多种场景-以大厂为例-在云服务器上-腾讯、阿里、华为等-都有自己的拖拽建站-要单独购买服务-。"},"91.5":{t:"主要功能：\r",p:`
拖拽站预设使用场景，提供大量的交互功能组件。
提供一套完整的流程：低代码、物料上传、部署上线。
创建自己的后台，页面所触发 ...`,l:"其他/工作/技术文档/低代码.html#主要功能",a:"主要功能"},"91.6":{t:"出发点：优化人员（淘汰前端），让用户自己上传物料构建页面。\r",p:`优势：能够快速建站，对非技术人员体验友好，安照浏览经验即可构建一个落地页。
劣势：太有局限性，超出场景之外的无法实现，无法扩 ...`,l:"其他/工作/技术文档/低代码.html#出发点-优化人员-淘汰前端-让用户自己上传物料构建页面。",a:"出发点-优化人员-淘汰前端-让用户自己上传物料构建页面。"},"91.7":{t:"小站\r",p:`出发点：供开发人员和非技术人员使用
拖拽生成真实页面和代码，提供解析器，将schema转换成自己可使用的代码。开发人员也可以 ...`,l:"其他/工作/技术文档/低代码.html#小站",a:"小站"},"91.8":{t:"乐高是哪种低代码\r",p:`针对人群
技术人员：可完整的使用所有功能，可额外编写代码，让做页面更上一层。
UI人员：可了解页面结构，快速上手，根据页面结 ...`,l:"其他/工作/技术文档/低代码.html#乐高是哪种低代码",a:"乐高是哪种低代码"},"91.9":{t:"面对的后续升级维护\r",p:`
对已生成的代码打补丁
对使用的库打补丁

`,l:"其他/工作/技术文档/低代码.html#面对的后续升级维护",a:"面对的后续升级维护"},"92.0":{t:"# 2021 年 4季度\r",p:"",l:"其他/工作/述职/2021年4季度总结.html",a:"_2021-年-4季度"},"92.1":{t:"复盘与总结\r",p:"\r",l:"其他/工作/述职/2021年4季度总结.html#复盘与总结",a:"复盘与总结"},"92.2":{t:"需求\r",p:`
原创官网共处理 22  个需求，发版 12 次；
整装官网共处理 7 个需求，发版 7 次；
原创微信小程序共处理 18个 ...`,l:"其他/工作/述职/2021年4季度总结.html#需求",a:"需求"},"92.3":{t:"专题\r",p:`
工作内容

完善专题页项目体系，梳理专题排期表，排期后在全国专题对接群内进行公示，公开透明专题排期，减少排期沟通。
收集全 ...`,l:"其他/工作/述职/2021年4季度总结.html#专题",a:"专题"},"92.4":{t:"核心问题及解决措施（项目推进）\r",p:`
持续推进原创、整装的专题、官网、小程序业务线，参加需求评审会给出专业性建议，评审后进行工期评估，给出技术方案、预防风险及因 ...`,l:"其他/工作/述职/2021年4季度总结.html#核心问题及解决措施-项目推进",a:"核心问题及解决措施-项目推进"},"92.5":{t:"个人swot分析\r",p:`
优势强：Strength

熟练掌握前端技术，能够在前端领域独挡一面；
对后端技术有了解，能顺畅地与后端进行协作，进行方案 ...`,l:"其他/工作/述职/2021年4季度总结.html#个人swot分析",a:"个人swot分析"},"92.6":{t:"展望与规划\r",p:`\r
\r
\r`,l:"其他/工作/述职/2021年4季度总结.html#展望与规划",a:"展望与规划"},"92.7":{t:"工作方向\r",p:`
保障前端需求的流畅开发
每月开展一次技术分享，营造团队技术气氛，与团队共进步
提升线索数量

访问速度：目前原创小程序已进 ...`,l:"其他/工作/述职/2021年4季度总结.html#工作方向",a:"工作方向"},"92.8":{t:"落地规划\r",p:"\r",l:"其他/工作/述职/2021年4季度总结.html#落地规划",a:"落地规划"},"92.9":{t:"一季度：专题页建站工具：调研了一些自建站工具， 因为门槛高，要求用户有专业知识，使用场景复杂，而不符合公司的业务场景。\r",p:`
底层框架搭建，基础功能：组件拖拽、缩放
营销组件：交互动画、轮播图、报名获客表单、IM通讯工具美恰、埋点、TDK。
用户自 ...`,l:"其他/工作/述职/2021年4季度总结.html#一季度-专题页建站工具-调研了一些自建站工具-因为门槛高-要求用户有专业知识-使用场景复杂-而不符合公司的业务场景。",a:"一季度-专题页建站工具-调研了一些自建站工具-因为门槛高-要求用户有专业知识-使用场景复杂-而不符合公司的业务场景。"},"92.10":{t:"二季度：用户体验 + 内容力提升\r",p:`

日常需求迭代


小程序


进行拆包，提升访问速度


主要获客页面优化，缩短用户报名路径，优化填写手机号报名方式，场 ...`,l:"其他/工作/述职/2021年4季度总结.html#二季度-用户体验-内容力提升",a:"二季度-用户体验-内容力提升"},"92.11":{t:"三季度：中台\r",p:`
整合现有后台系统，完成登录鉴权
日常需求迭代
优化原创后台系统模块（文章管理、案例中心），优化操作逻辑，提升效率
使用规范 ...`,l:"其他/工作/述职/2021年4季度总结.html#三季度-中台",a:"三季度-中台"},"92.12":{t:"四季度：中台\r",p:`
日常需求迭代
完善监控报警系统，快速定位发现线上问题。
根据性能报告分析，进行项目优化。
编写测试用例，保证功能稳定，达到 ...`,l:"其他/工作/述职/2021年4季度总结.html#四季度-中台",a:"四季度-中台"},"93.0":{t:"# 研发内容\r",p:"\r",l:"其他/工作/述职/2022年1季度总结.html",a:"研发内容"},"93.1":{t:"专题\r",p:`
开发了52套专题
整理记录参考错误问题10个
修改需求共26个

`,l:"其他/工作/述职/2022年1季度总结.html#专题",a:"专题"},"93.2":{t:"需求\r",p:`
原创、直投

官网、小程序年限替换
官网查看整套案例图片时，图片大小会不同，按钮位置也不同，在图片右下方展示[同步直投]
 ...`,l:"其他/工作/述职/2022年1季度总结.html#需求",a:"需求"},"94.0":{t:"# 维护微信、百度、头条三端小程序\r",p:"\r",l:"其他/工作/述职/2022年3季度总结.html",a:"维护微信、百度、头条三端小程序"},"94.1":{t:"总结\r",p:`
共处理 20 个需求，需求保质保量按时达成；程序功能细节优化 12 个；修复bug 5 个，线上阻断性bug 0 个； 发 ...`,l:"其他/工作/述职/2022年3季度总结.html#总结",a:"总结"},"94.2":{t:"用户体验、重要功能改动\r",p:`
增加搜索模块，首页、楼盘、案例、设计师、工地等页面增加搜索入口，让用户获取信息的途径更加便捷，搜索后获取相关内容，解决用户 ...`,l:"其他/工作/述职/2022年3季度总结.html#用户体验、重要功能改动",a:"用户体验、重要功能改动"},"94.3":{t:"代码优化\r",p:`
访问速度：数装微信小程序已完成拆包，总包由 2.1MB 压缩至 1.4MB，体积降低了66%，性能评估报告由 43%提升至 ...`,l:"其他/工作/述职/2022年3季度总结.html#代码优化",a:"代码优化"},"95.0":{t:"# 复盘与总结\r",p:`共计 71 个需求， 发版 65 次，发版成功率 100% ， 阻断性BUG 0 个。
`,l:"其他/工作/述职/2022年度总结.html",a:"复盘与总结"},"95.1":{t:"官网\r",p:`
原创官网：共处理 26 个需求，发版 18 次；
数装官网：共处理 10 个需求，发版 8 次；

`,l:"其他/工作/述职/2022年度总结.html#官网",a:"官网"},"95.2":{t:"小程序\r",p:`

需求


原创小程序共处理 22个需求，发版 28 次；


整装小程序共处理 13 个需求，发版11 次；




代 ...`,l:"其他/工作/述职/2022年度总结.html#小程序",a:"小程序"},"95.3":{t:"专题\r",p:`
专题开发

开发了52套专题
完善专题页项目体系，梳理专题排期表，排期后在全国专题对接群内进行公示，公开透明专题排期，减少 ...`,l:"其他/工作/述职/2022年度总结.html#专题",a:"专题"},"95.4":{t:"项目沉淀\r",p:`
代码重构：开发需求、修复bug、优化功能的同时对相关业务逻辑的代码进行重写，提升访问加载速度，使页面更丝滑流畅
规范文档沉 ...`,l:"其他/工作/述职/2022年度总结.html#项目沉淀",a:"项目沉淀"},"95.5":{t:"22年目标计划完成情况\r",p:`
[x] 保障业务线的稳定和功能迭代
[x] 小程序业务逻辑更替和项目架构底层改版
[x] 完善专题项目体系，专题建站工具平 ...`,l:"其他/工作/述职/2022年度总结.html#_22年目标计划完成情况",a:"_22年目标计划完成情况"},"96.0":{t:"1. 脱稿演讲的框架和公式\r",p:`
有效说服评委的三二一法则
现场演讲和应对的三大细节


自信：站上讲台就会被放大，任何一个动作都会影响到你的印象
开场：统 ...`,l:"其他/工作/述职/index.html",a:"_1-脱稿演讲的框架和公式"},"97.0":{t:"自我介绍\r",p:"各位领导、各位同事，大家上午好，我是前端开发工程师 - 王刚，今天为大家做个人述职报告，那我就直奔主题。在两个月的努力下做多 ...",l:"其他/工作/述职/述职大纲.html",a:"自我介绍"},"97.1":{t:"工作大事件\r",p:`

原创小程序（微信、百度、头条）


业务层面

用户手机号一键授权登录
对项目进行分包，通过组件化提升维护性，对全局业务 ...`,l:"其他/工作/述职/述职大纲.html#工作大事件",a:"工作大事件"},"97.2":{t:"目标计划\r",p:`
对 原创小程序 和 原创 App 做了大量的业务逻辑更替和项目架构底层改版，使得焕然一新。但还不够完善，需要通过技术层面一 ...`,l:"其他/工作/述职/述职大纲.html#目标计划",a:"目标计划"},"97.3":{t:"项目隐患：\r",p:`
整体结构逐渐衰弱
代码质量不断降低
代码无可读性
弹性越来越差
冗余代码越来越多
新的需求只能胡乱拼凑上
老旧代码无人能懂 ...`,l:"其他/工作/述职/述职大纲.html#项目隐患",a:"项目隐患"},"97.4":{t:"“戴商业的眼镜”来写项目，创造更大价值\r",p:`
通过技术给公司带来持续的竞争力
预研：为将来的发展作铺垫，做出别人不能做出的产品
完善埋点系统，供运营去分析数据，持续改进 ...`,l:"其他/工作/述职/述职大纲.html#戴商业的眼镜-来写项目-创造更大价值",a:"戴商业的眼镜-来写项目-创造更大价值"},"97.5":{t:"2021-规划\r",p:`
保障业务团队的流畅开发
完善专题页项目体系
专题项目的相关培训
绘制重构蓝图

`,l:"其他/工作/述职/述职大纲.html#_2021-规划",a:"_2021-规划"},"97.6":{t:"2022-规划\r",p:`
提升技术：团队士气最重要，技术不断更新，过度具象化不可取
团队规范标准化：工作流规范、编码规范、文档规范、UI设计规范、测 ...`,l:"其他/工作/述职/述职大纲.html#_2022-规划",a:"_2022-规划"},"98.0":{t:"转载文章：你可能觉得是 “PUA”：这个事换一个人能不能做？【前端晋升必看】\r",p:`
关注前端试炼

!图片
最近脉脉上这张图片在前端圈子中火了起来。这个故事中“毫无人性”的评委在晋升中对前端同学提出了两个置 ...`,l:"其他/工作/述职/述职晋升.html",a:"转载文章-你可能觉得是-pua-这个事换一个人能不能做-【前端晋升必看】"},"98.1":{t:"案例一：\r",p:`产品经理想做一批营销页面，推广产品。

A 同学按三天一个营销页面的速度产出页面，满足产品经理需求。在营销页面上线之后，需要 ...`,l:"其他/工作/述职/述职晋升.html#案例一",a:"案例一"},"98.2":{t:"案例二：\r",p:"C 同学发现大家的代码，经常会犯同样的错误，于是就总结了前端常出现的代码问题，写了一个小工具，帮助扫描这些低级问题。并在发布 ...",l:"其他/工作/述职/述职晋升.html#案例二",a:"案例二"},"99.0":{t:"项目架构\r",p:`问题1：底层框架需要调整。
问题2：代码没有对接。已知：目录结构混乱导致代码层混乱,造成全局污染。全局样式未统一风格，页面J ...`,l:"其他/工作/项目架构.html",a:"项目架构"},"101.0":{t:"转载文章：如何下载 blob 地址的视频资源 - 吹吹风喝喝酒 - 博客园\r",p:`如何下载视频资源以blob:http开头的资源
一、问题场景
想下载知乎视频资源，却发现视频链接是这个样子的
!
blob: ...`,l:"其他/工具库/m3u8.html",a:"转载文章-如何下载-blob-地址的视频资源-吹吹风喝喝酒-博客园"},"101.1":{t:"油猴\r",p:"什么是油猴？它是一款免费的浏览器插件，可以实现各种意想不到的功能，如观看 VIP 电影、去除网页防止复制功能、直接下载网盘文 ...",l:"其他/工具库/m3u8.html#油猴",a:"油猴"},"101.2":{t:"Greasy Fork\r",p:"Greasy Fork 又是什么呢？这是个提供用户脚本的网站 ，具体使用见网址https://greasyfork.org/ ...",l:"其他/工具库/m3u8.html#greasy-fork",a:"greasy-fork"},"101.3":{t:"观看 VIP 电影\r",p:"打开爱奇艺上这部 《雪暴》，播放后左上角有vip图标 https://www.iqiyi.com/v_19rr614cr8. ...",l:"其他/工具库/m3u8.html#观看-vip-电影",a:"观看-vip-电影"},"101.4":{t:"VIP 解析网站\r",p:"其实这个油猴插件用的就是类似 http://tv.wandhi.com/go.html 这类网站来解析，如果你嫌安装插件麻烦 ...",l:"其他/工具库/m3u8.html#vip-解析网站",a:"vip-解析网站"},"102.0":{t:"转载文章：尤雨溪：回顾2022，展望2023 - 掘金\r",p:"2023 年 1 月 1 日，尤雨溪发布博客 《2022 Year In Review》， 文中回顾了 2022 年发生的事 ...",l:"其他/技术博客/evanyou-2022-report.html",a:"转载文章-尤雨溪-回顾2022-展望2023-掘金"},"102.1":{t:"更小和更频繁的次要版本\r",p:`随着最后一个 Vue 2 次要版本 (2.7) 的发布，预计将在 2023 年全速推出 Vue 3 核心的功能。
Vue.j ...`,l:"其他/技术博客/evanyou-2022-report.html#更小和更频繁的次要版本",a:"更小和更频繁的次要版本"},"102.2":{t:"Vapor Mode\r",p:"Vapor Mode 是一直在试验的另一种编译策略，其灵感来自于 Solid。 给定相同的 Vue SFC，与当前基于虚拟  ...",l:"其他/技术博客/evanyou-2022-report.html#vapor-mode",a:"vapor-mode"},"104.0":{t:"# 平面设计和UI设计有什么区别？\r",p:`

定义不同
平面设计：也称为视觉传达设计，是以视觉作为沟通和表现的方式，透过多种方式来创造和结合符号、图片和文字，借此作出 ...`,l:"其他/技术博客/平面设计和UI设计有什么区别.html",a:"平面设计和ui设计有什么区别"},"104.1":{t:"UE/UX\r",p:"用户体验（User Experience，简称UE/UX）是用户在使用产品过程中建立起来的一种纯主观感受。但是对于一个界定明 ...",l:"其他/技术博客/平面设计和UI设计有什么区别.html#ue-ux",a:"ue-ux"},"104.2":{t:"UI设计与平面设计最大的区别\r",p:`UI：会动、有交互
平面：不会动
`,l:"其他/技术博客/平面设计和UI设计有什么区别.html#ui设计与平面设计最大的区别",a:"ui设计与平面设计最大的区别"},"104.3":{t:"平面设计\r",p:`认知、偏见： 海报、广告、杂质、包装
`,l:"其他/技术博客/平面设计和UI设计有什么区别.html#平面设计",a:"平面设计"},"105.0":{t:"1. 工作三年， 三段工作经历， \r",p:`
第一家是2017.07 - 2020.02，
第二家是2020.07 - 2021.02，
最近这家公司是 2021.03 ...`,l:"其他/面试/HR.html",a:"_1-工作三年-三段工作经历"},"106.0":{t:"1. 岗位职责\r",p:`1.负责PC端和移动端的设计开发工作，具体项目：原创、整装、直投官网、小程序、后台、专题页;
2.负责对前端相关部分进行不断 ...`,l:"其他/面试/面试大纲.html",a:"_1-岗位职责"},"108.0":{t:"队列\r",p:`介绍：队列是一个有序列表，可以用数组或是链表来实现，遵循先入先出的原则
`,l:"数据结构与算法/数据结构.html",a:"队列"},"108.1":{t:"链表\r",p:`介绍：链表是以节点的方式来存储，每个节点包含数据和节点指向，节点不一定是连续存储，链表分为带头节点和无头节点
`,l:"数据结构与算法/数据结构.html#链表",a:"链表"},"108.2":{t:"单向链表",p:"",l:"数据结构与算法/数据结构.html#单向链表",a:"单向链表"},"109.0":{t:"使用场景：**当一个数组中大部分值为 0 时或者为同一值时（无意义的重复值），可以使用稀疏数组保存**\r",p:`
二维数组、矩阵，记录数组数组一共有几行几列，有多少不同的值
把具有不同值的元素的行列及值记录在一个小规模的数组中，从而缩小 ...`,l:"数据结构与算法/稀疏数组.html",a:"使用场景-当一个数组中大部分值为-0-时或者为同一值时-无意义的重复值-可以使用稀疏数组保存"},"109.1":{t:"实现一个五子棋盘\r",p:`// 如果稀疏数组的(所有值+1)3 &gt; 原始二位数组的长度（或者另一种算法）， 则不使用

// checkerbo ...`,l:"数据结构与算法/稀疏数组.html#实现一个五子棋盘",a:"实现一个五子棋盘"},"110.0":{t:"冒泡排序\r",p:`var arr = [5, 8, 3, 6, 9];
for (var i = 0; i &lt; arr.length;  ...`,l:"数据结构与算法/算法/排序.html",a:"冒泡排序"},"110.1":{t:"11、10到100的十位随机数并排序\r",p:`for (var i = 1; i &lt;= 10; i++) {
  var ran = Math.floor(Math ...`,l:"数据结构与算法/算法/排序.html#_11、10到100的十位随机数并排序",a:"_11、10到100的十位随机数并排序"},"111.0":{t:"往数组里插入一个值\r",p:"var arr = [&quot;test&quot;, &quot;a&quot;, &quot;b&quot;, &qu ...",l:"数据结构与算法/算法/插入.html",a:"往数组里插入一个值"},"111.1":{t:"让字符串重复3遍\r",p:`var str = &quot;abc&quot;;
function repeat(a, b) {
  var str = ...`,l:"数据结构与算法/算法/插入.html#让字符串重复3遍",a:"让字符串重复3遍"},"112.0":{t:"字符串出现最多个数（2种）\r",p:`//.str=”abcdefgaaass”找字符中出现最多的;第一种
var str = &quot;abcdefgaaas ...`,l:"数据结构与算法/算法/查找.html",a:"字符串出现最多个数-2种"},"112.1":{t:"indexOf\r",p:`var brr = [5, 9, 6, 3, 2, 5];
function findOf(arr, val) {
  fo ...`,l:"数据结构与算法/算法/查找.html#indexof",a:"indexof"},"112.2":{t:"查询数组中最大值和最小值\r",p:`var arr = [2, 41, 3, 1, 8];
var temp = arr[0];

for (var i = 0 ...`,l:"数据结构与算法/算法/查找.html#查询数组中最大值和最小值",a:"查询数组中最大值和最小值"},"112.3":{t:"将字符串转换为驼峰形式\r",p:`var str = &quot;border-bottom-color&quot;;
function toCameHump ...`,l:"数据结构与算法/算法/查找.html#将字符串转换为驼峰形式",a:"将字符串转换为驼峰形式"},"112.4":{t:"字符的每个数字都乘2\r",p:`var url = &quot;a2b4admin3&quot;;
var str = &quot;&quot;;
for  ...`,l:"数据结构与算法/算法/查找.html#字符的每个数字都乘2",a:"字符的每个数字都乘2"},"112.5":{t:"将字符串中的数字用中括号括起来\r",p:`function num(str) {
  var arr = str.split(&quot;&quot;);
  for ...`,l:"数据结构与算法/算法/查找.html#将字符串中的数字用中括号括起来",a:"将字符串中的数字用中括号括起来"},"112.6":{t:"首先判断在数组中哪个数最大，然后让数组中的第一个数与最大的数相乘，返回结果\r",p:`function max(arr) {
  var big = arr[0];
  for (var i = 0; i &l ...`,l:"数据结构与算法/算法/查找.html#首先判断在数组中哪个数最大-然后让数组中的第一个数与最大的数相乘-返回结果",a:"首先判断在数组中哪个数最大-然后让数组中的第一个数与最大的数相乘-返回结果"},"112.7":{t:"判断字符串是否对称\r",p:`var str1 = &quot;abch6g5g6hcba&quot;;
function isDuc(str) {
   ...`,l:"数据结构与算法/算法/查找.html#判断字符串是否对称",a:"判断字符串是否对称"},"112.8":{t:"求数组中字符串的个数\r",p:"var str = [0, 1, 2, 3, 4, 5, &quot;a&quot;, &quot;b&quot;, &qu ...",l:"数据结构与算法/算法/查找.html#求数组中字符串的个数",a:"求数组中字符串的个数"},"113.0":{t:"<!-- 引入另一个md文件内容：https://vitepress.vuejs.org/guide/markdown#markdown-file-inclusion -->\r",p:`&lt;!-- @include: ../../规范/编码规范/index.md --&gt;
&lt;!-- 导入代码：h ...`,l:"构建工具/eslint/index.html",a:"引入另一个md文件内容-https-vitepress-vuejs-org-guide-markdown-markdown-file-inclusion"},"114.0":{t:"查看全局依赖\r",p:`
npm list -g --depth 0
yarn global list
yarn global list --dep ...`,l:"构建工具/npm/index.html",a:"查看全局依赖"},"114.1":{t:"卸载全局依赖\r",p:`
yarn global remove package

`,l:"构建工具/npm/index.html#卸载全局依赖",a:"卸载全局依赖"},"115.0":{t:"npx 是 npm 提供的命令\r",p:"\r",l:"构建工具/npm/npx.html",a:"npx-是-npm-提供的命令"},"115.1":{t:"主要用途\r",p:`
临时安装软件包，执行后删除
执行本地安装的软件包

一、简介
npm从5.25.2版开始，增加了 npx 命令。方便了我在 ...`,l:"构建工具/npm/npx.html#主要用途",a:"主要用途"},"116.0":{t:"csdn\r",p:"",l:"构建工具/npm/package.html",a:"csdn"},"116.1":{t:"必须属性\r",p:"",l:"构建工具/npm/package.html#必须属性",a:"必须属性"},"116.2":{t:"name \r",p:`[项目名称] string

名称的长度必须小于或等于 214 个字符，不能以 “.” 和“_”开头，不能包含大写字母，
名 ...`,l:"构建工具/npm/package.html#name",a:"name"},"116.3":{t:"version\r",p:`[项目、包的版本号] string

项目改动后要改动版本号
版本号的命名遵循语义化版本 2.0.0 规范，格式为：「主版本 ...`,l:"构建工具/npm/package.html#version",a:"version"},"116.4":{t:"描述信息\r",p:"\r",l:"构建工具/npm/package.html#描述信息",a:"描述信息"},"116.5":{t:"description\r",p:`[项目的描述信息] string
`,l:"构建工具/npm/package.html#description",a:"description"},"116.6":{t:"keywords\r",p:`[如果项目是开源的，npm 或 github 则提供关键字搜索][数组]
`,l:"构建工具/npm/package.html#keywords",a:"keywords"},"116.7":{t:"author\r",p:`[项目的作者] string | object
{
  &quot;author&quot;: {
    &quot;na ...`,l:"构建工具/npm/package.html#author",a:"author"},"116.8":{t:"contributors \r",p:`[项目的贡献者] string&lt;array&gt; | object&lt;array&gt;
{
  &quot;c ...`,l:"构建工具/npm/package.html#contributors",a:"contributors"},"116.9":{t:"homepage\r",p:`[项目的主页地址] string
`,l:"构建工具/npm/package.html#homepage",a:"homepage"},"116.10":{t:"repository\r",p:`[表示代码的存放仓库地址] string
`,l:"构建工具/npm/package.html#repository",a:"repository"},"116.11":{t:"依赖配置\r",p:"\r",l:"构建工具/npm/package.html#依赖配置",a:"依赖配置"},"116.12":{t:"dependencies\r",p:`[生产环境中所使用的依赖包]
yarn add jquery --save

yarn add jquery -S

`,l:"构建工具/npm/package.html#dependencies",a:"dependencies"},"116.13":{t:"devDependencies\r",p:`[本地环境中所使用的依赖包]
yarn add jquery --save-dev

yarn add jquery -D
 ...`,l:"构建工具/npm/package.html#devdependencies",a:"devdependencies"},"116.14":{t:"engines\r",p:`[环境要求]
{
  &quot;engines&quot;: {
    &quot;node&quot;: &quot; ...`,l:"构建工具/npm/package.html#engines",a:"engines"},"116.15":{t:"脚本配置\r",p:"\r",l:"构建工具/npm/package.html#脚本配置",a:"脚本配置"},"116.16":{t:"scripts\r",p:`[创建脚本] 使用 npm run xxx 运行
{
  &quot;scripts&quot;: {
    &quot; ...`,l:"构建工具/npm/package.html#scripts",a:"scripts"},"116.17":{t:"config\r",p:`[scripts 运行时的配置参数]
{
  &quot;config&quot;: {
    &quot;port&qu ...`,l:"构建工具/npm/package.html#config",a:"config"},"116.18":{t:"bin\r",p:`
生成bin目录
创建index.js子文件

#! /usr/bin/env node
// 标识文件使用node执行
c ...`,l:"构建工具/npm/package.html#bin",a:"bin"},"116.19":{t:"文件 & 目录\r",p:"",l:"构建工具/npm/package.html#文件-目录",a:"文件-目录"},"116.20":{t:"main\r",p:"[指定被引入的入口文件] string，在 browser 和 Node 环境中都可以使用。如果我们将项目发布为 npm 包 ...",l:"构建工具/npm/package.html#main",a:"main"},"116.21":{t:"browser\r",p:"[browser 环境下的入口文件] string。如果 npm 包只在 web 端使用，并且严禁在 server 端使用， ...",l:"构建工具/npm/package.html#browser",a:"browser"},"116.22":{t:"module\r",p:"[ESM 规范的入口文件]  string，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM ...",l:"构建工具/npm/package.html#module",a:"module"},"116.23":{t:"files\r",p:"[npm 依赖发布文件列表] string&lt;array&gt; 当 npm 包发布时，files 指定的文件会被推送到 ...",l:"构建工具/npm/package.html#files",a:"files"},"116.24":{t:"发布配置\r",p:"",l:"构建工具/npm/package.html#发布配置",a:"发布配置"},"116.25":{t:"private\r",p:`[私有库] boolean
`,l:"构建工具/npm/package.html#private",a:"private"},"116.26":{t:"license\r",p:`[软件的开源协议] string

MIT ：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的 ...`,l:"构建工具/npm/package.html#license",a:"license"},"116.27":{t:"第三方配置\r",p:"",l:"构建工具/npm/package.html#第三方配置",a:"第三方配置"},"116.28":{t:"typings\r",p:`[TypeScript的入口文件]
`,l:"构建工具/npm/package.html#typings",a:"typings"},"116.29":{t:"eslintConfig\r",p:`[eslint的配置文件]
`,l:"构建工具/npm/package.html#eslintconfig",a:"eslintconfig"},"116.30":{t:"babel\r",p:`[Babel 的编译配置]
`,l:"构建工具/npm/package.html#babel",a:"babel"},"116.31":{t:"browserslist\r",p:"[browserslist 字段用来告知支持哪些浏览器及版本。Babel、Autoprefixer 和其他工具会用到它，以将 ...",l:"构建工具/npm/package.html#browserslist",a:"browserslist"},"116.32":{t:"unpkg\r",p:`[发布的文件开启 cdn 服务]
`,l:"构建工具/npm/package.html#unpkg",a:"unpkg"},"116.33":{t:"lint-staged\r",p:"Git 暂存文件上运行 linters 的工具，配置后每次修改一个文件即可给所有文件执行一次 lint 检查，通常配合 gi ...",l:"构建工具/npm/package.html#lint-staged",a:"lint-staged"},"116.34":{t:"gitHooks\r",p:"gitHooks 用来定义一个钩子，在提交（commit）之前执行 ESlint 检查。在执行 lint 命令后，会自动修复 ...",l:"构建工具/npm/package.html#githooks",a:"githooks"},"117.0":{t:"1. 新建项目\r",p:`
注册账号
打开命令行

git init


配置 package.json

{
  &quot;main&quot;: ...`,l:"构建工具/npm/publish.html",a:"_1-新建项目"},"117.1":{t:"发布失败可能是npm源指向错误\r",p:`解决办法

在项目根目录新建.npmrc文件

registry=https://registry.npmjs.org


 ...`,l:"构建工具/npm/publish.html#发布失败可能是npm源指向错误",a:"发布失败可能是npm源指向错误"},"119.0":{t:"# bundle 分析(bundle analysis)\r",p:"一旦开始分离代码，一件很有帮助的事情是，分析输出结果来检查模块在何处结束。 官方分析工具 是一个不错的开始。还有一些其他社区 ...",l:"构建工具/webpack/bundle.html",a:"bundle-分析-bundle-analysis"},"119.1":{t:"Further Reading\r",p:`
webpack 中的
Chrome 中的预加载、预获取和优先级(Preload, Prefetch And Priorit ...`,l:"构建工具/webpack/bundle.html#further-reading",a:"further-reading"},"120.0":{t:"# 引入文件\r",p:"\r",l:"构建工具/webpack/entry.html",a:"引入文件"},"120.1":{t:"多页面应用\r",p:`module.exports = {
  entry: {
    main: 'main.js',
    pageA:  ...`,l:"构建工具/webpack/entry.html#多页面应用",a:"多页面应用"},"121.0":{t:"# 环境变量\r",p:"想要消除 webpack.config.js 在 开发环境 和 生产环境 之间的差异，你可能需要环境变量(environme ...",l:"构建工具/webpack/env.html",a:"环境变量"},"122.0":{t:"待整理\r",p:`
模块打包、split（模块分割）、tree shrink（拆包）
多 html 文件打包
vue 使用图形化
大前端和微前 ...`,l:"构建工具/webpack/index.html",a:"待整理"},"122.1":{t:"名词解释\r",p:`
vendors
bundle
chunk
runtime

`,l:"构建工具/webpack/index.html#名词解释",a:"名词解释"},"123.0":{t:"1. 使用 require 引入 ESM 文件，会将文件内容全部同步引入\r",p:`
require 引入的内容支持被结构，满足 ESM import 规范

`,l:"构建工具/webpack/modules.html",a:"_1-使用-require-引入-esm-文件-会将文件内容全部同步引入"},"123.1":{t:"引入模块（合并打包还是单独打包），import 和 require\r",p:`
import 和 require 引入的文件是将文件代码合并到执行命令的文件中
使用 import(url) 引入的文件会 ...`,l:"构建工具/webpack/modules.html#引入模块-合并打包还是单独打包-import-和-require",a:"引入模块-合并打包还是单独打包-import-和-require"},"123.2":{t:"引入单个目标文件\r",p:`// 假设：如果不使用 import 的变量则不会被打包进入 ： require引入后就一定会被打包
import(
  / ...`,l:"构建工具/webpack/modules.html#引入单个目标文件",a:"引入单个目标文件"},"123.3":{t:"引入多个可能的目标文件（满足以下规则则会被打包）\r",p:`import(
  /* webpackInclude: /\\.json$/ */ // 在导入解析（import reso ...`,l:"构建工具/webpack/modules.html#引入多个可能的目标文件-满足以下规则则会被打包",a:"引入多个可能的目标文件-满足以下规则则会被打包"},"123.4":{t:"webpackMode：从 webpack 2.6.0 开始，可以指定以不同的模式解析动态导入。支持以下选项：\r",p:`
lazy (默认值)：为每个 import() 导入的模块生成一个可延迟加载（lazy-loadable）的 chunk。 ...`,l:"构建工具/webpack/modules.html#webpackmode-从-webpack-2-6-0-开始-可以指定以不同的模式解析动态导入。支持以下选项",a:"webpackmode-从-webpack-2-6-0-开始-可以指定以不同的模式解析动态导入。支持以下选项"},"124.0":{t:"optimization.splitChunks\r",p:"将 node_modules 依赖模块打包到一个新的文件中，不会打包到 main.js 中，避免 main.js 改动后根据 ...",l:"构建工具/webpack/optimization.html",a:"optimization-splitchunks"},"124.1":{t:"optimization.runtimeChunk\r",p:"https://webpack.docschina.org/configuration/optimization/#opti ...",l:"构建工具/webpack/optimization.html#optimization-runtimechunk",a:"optimization-runtimechunk"},"124.2":{t:"Further Reading\r",p:`
Issue 652

`,l:"构建工具/webpack/optimization.html#further-reading",a:"further-reading"},"125.0":{t:"1. 使用异步组件引入vue单文件时\r",p:`
会将单文件中的&lt;script&gt;标签会被单独打包成一个js文件
会将单文件中的&lt;style&gt;标签会被 ...`,l:"构建工具/webpack/vue.html",a:"_1-使用异步组件引入vue单文件时"},"128.0":{t:"是一个用于创建数据可视化的库。它提供了一组丰富的函数和工具，使开发者能够使用HTML、SVG和CSS等Web标准来创建动态的数据可视化。使用D3.js，您可以通过数据驱动的方式，将数据与DOM元素绑定，并利用数据的特性来生成图表、图形、地图等各种可视化形式。它主要用于数据分析、信息可视化、数据报表等领域。\r",p:`生成SVG
`,l:"框架/data-view/d3/index.html",a:"是一个用于创建数据可视化的库。它提供了一组丰富的函数和工具-使开发者能够使用html、svg和css等web标准来创建动态的数据可视化。使用d3-js-您可以通过数据驱动的方式-将数据与dom元素绑定-并利用数据的特性来生成图表、图形、地图等各种可视化形式。它主要用于数据分析、信息可视化、数据报表等领域。"},"129.0":{t:"生成canvas",p:"",l:"框架/data-view/echarts/index.html",a:"生成canvas"},"132.0":{t:"```nginx\r",p:`#user  nobody;
worker_processes  1;
#error_log  logs/error.log ...`,l:"框架/nginx/index.html",a:"nginx"},"133.0":{t:"函数式组件 和 类式组件\r",p:`::: code-group
function Component(){
  return &lt;h1&gt;functi ...`,l:"框架/react/react/index.html",a:"函数式组件-和-类式组件"},"133.1":{t:"`jsx` 语法通过 `babel` 将 `Component` 函数的标签语句进行转换结果\r",p:`::: code-group
// 转换前
function Component(){
  return &lt;h1&gt ...`,l:"框架/react/react/index.html#jsx-语法通过-babel-将-component-函数的标签语句进行转换结果",a:"jsx-语法通过-babel-将-component-函数的标签语句进行转换结果"},"133.2":{t:"修改状态触发视图更新\r",p:`::: code-group
// 只会修改对象的值，不会覆盖源对象
this.setState({  key: val } ...`,l:"框架/react/react/index.html#修改状态触发视图更新",a:"修改状态触发视图更新"},"134.0":{t:"ServerLess解决了什么问题？\r",p:`
无需运维
服务器配置弹性伸缩
按量付费，节省成本
更高的安全性
易于迭代，开发者可以不用关心服务器运维等方面的问题，可以专 ...`,l:"框架/serverless/index.html",a:"serverless解决了什么问题"},"134.1":{t:"名词\r",p:"",l:"框架/serverless/index.html#名词",a:"名词"},"134.2":{t:"BaaS (后端即服务) (Backend as a Service)\r",p:`提供Redis、SQL、等黑盒环境（黑盒：你不需要知道我是怎么实现的，你只管调用就行，开发者对底层服务器是无感知的）
`,l:"框架/serverless/index.html#baas-后端即服务-backend-as-a-service",a:"baas-后端即服务-backend-as-a-service"},"134.3":{t:"FaaS (函数即服务) (Function as a Service)\r",p:"运行业务逻辑代码（比如Node环境运行Js），调用BaaS环境提供的Redis、SQL等接口，由BaaS负责环境的调度和运维 ...",l:"框架/serverless/index.html#faas-函数即服务-function-as-a-service",a:"faas-函数即服务-function-as-a-service"},"134.4":{t:"ServerLess就是 FaaS + BaaS 的组合\r",p:`

应用就是一套环境


BFF (Backend for Frontend) (使用node整合后端提供的接口，作为中间件 ...`,l:"框架/serverless/index.html#serverless就是-faas-baas-的组合",a:"serverless就是-faas-baas-的组合"},"135.0":{t:"腾讯云的各项产品使用场景都是什么\r",p:`
云开发cloudBase：https://console.cloud.tencent.com/tcb/env/index? ...`,l:"框架/serverless/tcb.html",a:"腾讯云的各项产品使用场景都是什么"},"135.1":{t:"名词解释：\r",p:`
SCF：云函数（Serverless Cloud Function）



scf-cli: 本地开发调试

scf in ...`,l:"框架/serverless/tcb.html#名词解释",a:"名词解释"},"135.2":{t:"应用、函数、服务、环境、目录、云函数的区别，\r",p:`
应用和访问服务是什么关系？
vue、express、node等模板有什么区别
云函数和访问服务之间有什么联系？


访问服 ...`,l:"框架/serverless/tcb.html#应用、函数、服务、环境、目录、云函数的区别",a:"应用、函数、服务、环境、目录、云函数的区别"},"135.3":{t:"云开发是包含了serverless吗\r",p:"\r",l:"框架/serverless/tcb.html#云开发是包含了serverless吗",a:"云开发是包含了serverless吗"},"135.4":{t:"函数计算和serverLess有什么区别\r",p:"serverless是否只是简单一个服务，云开发才是完整的数据库、存储、函数、CDN的吗。单独购买存储、CDN又是如何收费的 ...",l:"框架/serverless/tcb.html#函数计算和serverless有什么区别",a:"函数计算和serverless有什么区别"},"135.5":{t:"serverLess还需要考虑负载均衡吗",p:"",l:"框架/serverless/tcb.html#serverless还需要考虑负载均衡吗",a:"serverless还需要考虑负载均衡吗"},"136.0":{t:"微信云服务：\r",p:`云函数：解决了后端与微信服务端的复杂鉴权机制
小程序代码可以直接控制数据库，绕过了后端，而是直接访问微信服务端。
微信云服务 ...`,l:"框架/serverless/wx-service.html",a:"微信云服务"},"137.0":{t:"# Vue 使用\r",p:`
Vue 组件通信

props、$emit
$on、$emit
vuex
$attrs、$listeners
$paren ...`,l:"框架/vue/vue/index.html",a:"vue-使用"},"137.1":{t:"代码风格指南\r",p:`https://mp.weixin.qq.com/s/UDXrBiEfm8igKZlSyoNJIA
https://mp.w ...`,l:"框架/vue/vue/index.html#代码风格指南",a:"代码风格指南"},"138.0":{t:"render\r",p:`在 vue2 中使用 h('el-input') 创建标签
在 vue3 中明确使用 h( resolveComponent ...`,l:"框架/vue/vue/vue2迁移到3.html",a:"render"},"138.1":{t:"keep-alive 和 transition 必须用在 router-view 内部\r",p:`vue3
&lt;router-view #default=&quot;{component}&quot;&gt;
  &l ...`,l:"框架/vue/vue/vue2迁移到3.html#keep-alive-和-transition-必须用在-router-view-内部",a:"keep-alive-和-transition-必须用在-router-view-内部"},"138.2":{t:"异步组件\r",p:`vue2
export default {
  components: {
    name: ()=&gt; new Pr ...`,l:"框架/vue/vue/vue2迁移到3.html#异步组件",a:"异步组件"},"138.3":{t:"v-is\r",p:`dom 内的模板解析需使用 v-is=&quot;&quot; 解析
&lt;component v-is=&quot;sp ...`,l:"框架/vue/vue/vue2迁移到3.html#v-is",a:"v-is"},"138.4":{t:"functional（函数式组件）函数式组件仅能通过简单函数形式声明，接收props和context两个参数\r",p:`
functional选项废弃 {functional: true}
template不能使用functional声明
因为 ...`,l:"框架/vue/vue/vue2迁移到3.html#functional-函数式组件-函数式组件仅能通过简单函数形式声明-接收props和context两个参数",a:"functional-函数式组件-函数式组件仅能通过简单函数形式声明-接收props和context两个参数"},"139.0":{t:"```javascript\r",p:`function reactive(obj, readOnly) {
if (typeof obj === 'object' ...`,l:"框架/vue/vue/vue3.html",a:"javascript"},"140.0":{t:"new Vue 后整个的流程\r",p:`
传入option，合并option配置
初始化生命周期
初始化事件中心
初始化 data、props、computed、w ...`,l:"框架/vue/vue/框架解析.html",a:"new-vue-后整个的流程"},"140.1":{t:"响应式原理\r",p:`vue是通过数据劫持和订阅发布来进行深入响应的。

数据劫持（双向数据绑定）：通过 Object.definePropert ...`,l:"框架/vue/vue/框架解析.html#响应式原理",a:"响应式原理"},"141.0":{t:"```html\r",p:`&lt;div id=&quot;root&quot;&gt;
&lt;span&gt;{{names}}&lt;/span ...`,l:"框架/vue/vue/源码片段/create-virtual-node.html",a:"html"},"142.0":{t:"# 两种写法，意思一致，代码更简略\r",p:"",l:"框架/vue/vue/源码片段/event.html",a:"两种写法-意思一致-代码更简略"},"142.1":{t:"方式1\r",p:`// 全局的 event 对象, 提供 on, off, emit 方法  
var event = (function ( ...`,l:"框架/vue/vue/源码片段/event.html#方式1",a:"方式1"},"142.2":{t:"方式2\r",p:`const EVENTS = (() =&gt; {
    const events = {

    }
    ret ...`,l:"框架/vue/vue/源码片段/event.html#方式2",a:"方式2"},"143.0":{t:"```javascript\r",p:`let callbacks = [];
let pending = false;
function nextTick(cb) ...`,l:"框架/vue/vue/源码片段/nextTick.html",a:"javascript"},"144.0":{t:"```javascript\r",p:`/**


把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来


使用函数柯里化的技巧 ...`,l:"框架/vue/vue/源码片段/observer.html",a:"javascript"},"145.0":{t:"```javascript\r",p:`/**

把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
使用函数柯里化的技巧
/
 ...`,l:"框架/vue/vue/源码片段/parse-path.html",a:"javascript"},"146.0":{t:"```javascript\r",p:`function shallowReadonly(obj) {
	return shallowReactive(obj, t ...`,l:"框架/vue/vue/源码片段/proxy.html",a:"javascript"},"147.0":{t:"```javascript\r",p:`class Vue {
constructor({ el, data }) {
this._el = document.qu ...`,l:"框架/vue/vue/源码片段/vue.html",a:"javascript"},"148.0":{t:"```javascript\r",p:`[
'push',
'pop',
'shift',
'unshift',
'splice',
'sort',
'revers ...`,l:"框架/vue/vue/源码片段/劫持原型.html",a:"javascript"},"149.0":{t:"mustache",p:"",l:"框架/vue/vue/源码解析/模板引擎.html",a:"mustache"},"150.0":{t:"# `diff`算法\r",p:"两个虚拟dom树对比，同层虚拟节点进行对比时，如果元素节点和key都相同的，那就复用元素，再处理不同的地方。如果父元素比较时 ...",l:"框架/vue/vue/源码解析/虚拟节点和diff算法.html",a:"diff-算法"},"150.1":{t:"`patch` 最小量更新\r",p:`key是最关键的一环，通过key的比较进行元素节点的复用，达到最小量更新。
::: code-group
const VNo ...`,l:"框架/vue/vue/源码解析/虚拟节点和diff算法.html#patch-最小量更新",a:"patch-最小量更新"},"152.0":{t:"123",p:"",l:"框架/vue/vue-cli/index.html",a:"_123"},"153.0":{t:"1. 根据 Vite 进行创建项目\r",p:"",l:"框架/vue/vue-cli/vue-cli_trans_vite.html",a:"_1-根据-vite-进行创建项目"},"153.1":{t:"2. 安装依赖 \r",p:`yarn add vite-plugin-vue2 -D

`,l:"框架/vue/vue-cli/vue-cli_trans_vite.html#_2-安装依赖",a:"_2-安装依赖"},"153.2":{t:"3. 创建vite.config.js\r",p:`import path, { resolve } from &quot;path&quot;;
import { creat ...`,l:"框架/vue/vue-cli/vue-cli_trans_vite.html#_3-创建vite-config-js",a:"_3-创建vite-config-js"},"153.3":{t:"其他注意事项\r",p:`

将项目中的 webpack 引入方式需要 vite 提供的方式

webpack

const modulesFiles ...`,l:"框架/vue/vue-cli/vue-cli_trans_vite.html#其他注意事项",a:"其他注意事项"},"154.0":{t:"vue-router 3 升级 4\r",p:"",l:"框架/vue/vue-router/index.html",a:"vue-router-3-升级-4"},"154.1":{t:"base选项使用函数创建\r",p:`import {
  createWebHashHistory,
  createWebHistory,
  createM ...`,l:"框架/vue/vue-router/index.html#base选项使用函数创建",a:"base选项使用函数创建"},"154.2":{t:"通配符 * 被移除\r",p:"\r",l:"框架/vue/vue-router/index.html#通配符-被移除",a:"通配符-被移除"},"154.3":{t:"isReady() 替代 onReady()\r",p:"\r",l:"框架/vue/vue-router/index.html#isready-替代-onready",a:"isready-替代-onready"},"154.4":{t:"scrollBehavior变化\r",p:`x、y 对应 top、left
`,l:"框架/vue/vue-router/index.html#scrollbehavior变化",a:"scrollbehavior变化"},"155.0":{t:"一个基于WebVR的框架，用于创建虚拟现实和增强现实的应用程序。它基于Three.js，并提供了一些用于构建VR场景的高级组件和实用工具。",p:"",l:"框架/web3D/A-Frame/index.html",a:"一个基于webvr的框架-用于创建虚拟现实和增强现实的应用程序。它基于three-js-并提供了一些用于构建vr场景的高级组件和实用工具。"},"156.0":{t:"与Three.js类似的3D图形和游戏开发库，提供了许多相似的功能和api，并且在性能和易用性方面也有很大的相似之处。",p:"",l:"框架/web3D/Babylonjs/index.html",a:"与three-js类似的3d图形和游戏开发库-提供了许多相似的功能和api-并且在性能和易用性方面也有很大的相似之处。"},"157.0":{t:"一个用于创建地球、地图和GIS应用的JavaScript库。它基于Three.js，并提供了许多用于可视化地理空间数据的功能。",p:"",l:"框架/web3D/Cesiumjs/index.html",a:"一个用于创建地球、地图和gis应用的javascript库。它基于three-js-并提供了许多用于可视化地理空间数据的功能。"},"158.0":{t:"# 浏览器创建可视化3D交互场景\r",p:"\r",l:"框架/web3D/index.html",a:"浏览器创建可视化3d交互场景"},"158.1":{t:"`WebGL`是什么\r",p:`WebGL 源于 OpenGL 与 JS 的绑定

OpenGL：用于渲染2D、3D矢量图形的跨语言、跨平台的应用程序编程接 ...`,l:"框架/web3D/index.html#webgl-是什么",a:"webgl-是什么"},"158.2":{t:"为什么使用 `WebGL`：快\r",p:`软件绘制：canvas2D: CPU -&gt; 内存
硬件绘制：WebGL: GPU -&gt; 显存
`,l:"框架/web3D/index.html#为什么使用-webgl-快",a:"为什么使用-webgl-快"},"158.3":{t:"坐标系: x、y、z\r",p:`左手：DirectX、Babylonjs、Unity、UE4
右手(Z值越大距离摄像机越近)：WebGl、ThreeJs、3 ...`,l:"框架/web3D/index.html#坐标系-x、y、z",a:"坐标系-x、y、z"},"158.4":{t:"线性代数\r",p:`将几何与代数在线性代数做了统一

Vector 矢量
根据 点point 线line 面face 体geometry 的组成 ...`,l:"框架/web3D/index.html#线性代数",a:"线性代数"},"159.0":{t:"一个功能强大的2D渲染引擎，用于创建交互式图形和游戏。它与Three.js在性能和渲染方面相似，但更专注于2D渲染。",p:"",l:"框架/web3D/Pixijs/index.html",a:"一个功能强大的2d渲染引擎-用于创建交互式图形和游戏。它与three-js在性能和渲染方面相似-但更专注于2d渲染。"},"160.0":{t:"一个基于WebGL的游戏引擎，类似于Three.js，提供了创建和发布3D游戏的工具和功能。",p:"",l:"框架/web3D/PlayCanvas/index.html",a:"一个基于webgl的游戏引擎-类似于three-js-提供了创建和发布3d游戏的工具和功能。"},"161.0":{t:"是一个用于创建3D图形和动画的库。它基于WebGL技术，提供了一组简化和抽象化的API，使开发者能够更轻松地在浏览器中创建和渲染3D图形。使用Three.js，您可以创建复杂的场景、添加灯光和材质、加载和动画模型，以及处理用户交互等。它主要用于游戏开发、虚拟现实、数据可视化等需要展示3D图形的领域。\r",p:"\r",l:"框架/web3D/threejs/index.html",a:"是一个用于创建3d图形和动画的库。它基于webgl技术-提供了一组简化和抽象化的api-使开发者能够更轻松地在浏览器中创建和渲染3d图形。使用three-js-您可以创建复杂的场景、添加灯光和材质、加载和动画模型-以及处理用户交互等。它主要用于游戏开发、虚拟现实、数据可视化等需要展示3d图形的领域。"},"161.1":{t:"基础知识\r",p:`
创建场景
创建相机
创建物体
物体分为几何体：正方体、圆体、多面体...
创建材质
将几何体和材质融合成物体
给场景添加已 ...`,l:"框架/web3D/threejs/index.html#基础知识",a:"基础知识"},"161.2":{t:"场景\r",p:"\r",l:"框架/web3D/threejs/index.html#场景",a:"场景"},"161.3":{t:"相机(机位)\r",p:"\r",l:"框架/web3D/threejs/index.html#相机-机位",a:"相机-机位"},"161.4":{t:"物体\r",p:"\r",l:"框架/web3D/threejs/index.html#物体",a:"物体"},"161.5":{t:"灯光\r",p:`
环境光(AmbientLight)：环境光会均匀的照亮所有物体，所有物体都有反射光。环境光不能用投射阴影。常见是太阳照射不 ...`,l:"框架/web3D/threejs/index.html#灯光",a:"灯光"},"162.0":{t:"概念：多项目资源共享",p:"",l:"框架/微前端/index.html",a:"概念-多项目资源共享"},"165.0":{t:"```javascript\r",p:`// 1. 注册应用
/* import { registerMicroApps, start } from &quot;q ...`,l:"框架/微前端/原理.html",a:"javascript"},"170.0":{t:"# 小程序\r",p:"",l:"框架/跨端/mp/index.html",a:"小程序"},"170.1":{t:"英文`mini program`，简称 `MP`。\r",p:`&lt;!--
`,l:"框架/跨端/mp/index.html#英文-mini-program-简称-mp-。",a:"英文-mini-program-简称-mp-。"},"170.2":{t:" ",p:"",l:"框架/跨端/mp/index.html#",a:""},"170.3":{t:"只讲技术，不讲业务。 -->\r",p:"\r",l:"框架/跨端/mp/index.html#只讲技术-不讲业务。",a:"只讲技术-不讲业务。"},"170.4":{t:"名词解释\r",p:`
app：应用、软件（微信、百度、头条、抖音、支付宝、飞书...等不局限于这些）
宿主：app本身

`,l:"框架/跨端/mp/index.html#名词解释",a:"名词解释"},"170.5":{t:"小程序是什么\r",p:`小程序是一种新的开放能力，开发者可以快速地开发一个小程序，让程序运行在app内，调用app提供的能力做一些事情（业务）。
小 ...`,l:"框架/跨端/mp/index.html#小程序是什么",a:"小程序是什么"},"170.6":{t:"**小程序** 和 **网页** 有什么不一样\r",p:`
小程序依赖app，因为寄生于app环境内，所以能拿到 web 页面不能拿到权限和功能，看宿主提供什么功能。常用：定位、扫一 ...`,l:"框架/跨端/mp/index.html#小程序-和-网页-有什么不一样",a:"小程序-和-网页-有什么不一样"},"170.7":{t:"体验小程序\r",p:`!
`,l:"框架/跨端/mp/index.html#体验小程序",a:"体验小程序"},"171.0":{t:"# 开发小程序\r",p:"\r",l:"框架/跨端/mp/started.html",a:"开发小程序"},"171.1":{t:"如何开发小程序\r",p:"开发的小程序要运行在app内，app就相当于一个容器（runtime、运行环境），则需要使用app提供的开发语言标准来编写代 ...",l:"框架/跨端/mp/started.html#如何开发小程序",a:"如何开发小程序"},"171.2":{t:"前序准备\r",p:`具有 html、css、js 的基础。
`,l:"框架/跨端/mp/started.html#前序准备",a:"前序准备"},"171.3":{t:"项目目录结构\r",p:"&lt;!-- ```\n├─ app.js #项目入口文件 - 全局配置\n├─ app.json  #页面路由导航 - 全局 ...",l:"框架/跨端/mp/started.html#项目目录结构",a:"项目目录结构"},"171.4":{t:"根目录\r",p:`::: details 文件代码
::: code-group
&lt;!-- @include: ./tmp/app.js ...`,l:"框架/跨端/mp/started.html#根目录",a:"根目录"},"171.5":{t:"pages - 页面文件夹\r",p:`::: details 文件代码
::: code-group
&lt;!-- @include: ./tmp/pages/ ...`,l:"框架/跨端/mp/started.html#pages-页面文件夹",a:"pages-页面文件夹"},"171.6":{t:"html 模板\r",p:`模板语言是基于宿主的，与浏览器有差异。
::: details 文件代码
::: code-group
&lt;view c ...`,l:"框架/跨端/mp/started.html#html-模板",a:"html-模板"},"171.7":{t:"css代码\r",p:`也是根据宿主要求提供，与浏览器有差异。

新增了尺寸单位。在写 CSS 样式时，开发者需要考虑到手机设备的屏幕会有不同的宽度 ...`,l:"框架/跨端/mp/started.html#css代码",a:"css代码"},"171.8":{t:"js\r",p:`因为 js 是一种脚本语言，运行在宿主环境。根据宿主环境提供的功能方法做对应的事情。
`,l:"框架/跨端/mp/started.html#js",a:"js"},"173.0":{t:"gitee\r",p:`
uni-app无需追随微信升级，可不受限使用wx的现在或未来的所有api。就像h5规范升级，不会影响vue一样。
uni- ...`,l:"框架/跨端/uni-app/index.html",a:"gitee"},"174.0":{t:"```js\r",p:`// ==UserScript==
// @name         京东读书
// @version      0.1
/ ...`,l:"油猴脚本/京东读书.html",a:"js"},"175.0":{t:"```js\r",p:`// ==UserScript==
// @name         尚硅谷React教程去除视频选集标题前缀
// @ve ...`,l:"油猴脚本/尚硅谷React教程去除视频选集标题前缀.html",a:"js"},"176.0":{t:"```js\r",p:`// ==UserScript==
// @name         驾考宝典刷题页面去除头部和尾部
// @version ...`,l:"油猴脚本/驾考宝典.html",a:"js"},"177.0":{t:"提交规范\r",p:"",l:"规范/代码提交规范.html",a:"提交规范"},"177.1":{t:"1.安装依赖\r",p:`yarn add commitizen -g

yarn add cz-customizable@7.0.0 -D

`,l:"规范/代码提交规范.html#_1-安装依赖",a:"_1-安装依赖"},"177.2":{t:"2.在package.json中进行新增\r",p:`&quot;config&quot;: {
  &quot;commitizen&quot;: {
    &quot;pa ...`,l:"规范/代码提交规范.html#_2-在package-json中进行新增",a:"_2-在package-json中进行新增"},"177.3":{t:"3.在根目录下新建 .cz-config.js 文件\r",p:`使用 git cz 命令替代 git commit
module.exports = {
  // 可选类型
  types ...`,l:"规范/代码提交规范.html#_3-在根目录下新建-cz-config-js-文件",a:"_3-在根目录下新建-cz-config-js-文件"},"177.4":{t:"4.在 vscode 安装插件 Visual Studio Code Commitizen Support\r",p:`\r
\r
\r`,l:"规范/代码提交规范.html#_4-在-vscode-安装插件-visual-studio-code-commitizen-support",a:"_4-在-vscode-安装插件-visual-studio-code-commitizen-support"},"177.5":{t:"校验提交规范\r",p:"\r",l:"规范/代码提交规范.html#校验提交规范",a:"校验提交规范"},"177.6":{t:"1.使用 husky 进行强制 git 代码提交规范\r",p:`npm install husky@8.0.1 -g

npx husky install

`,l:"规范/代码提交规范.html#_1-使用-husky-进行强制-git-代码提交规范",a:"_1-使用-husky-进行强制-git-代码提交规范"},"177.7":{t:"2.安装校验依赖\r",p:"yarn add @commitlint/config-conventional@17.1.0 @commitlint/cl ...",l:"规范/代码提交规范.html#_2-安装校验依赖",a:"_2-安装校验依赖"},"177.8":{t:"3.在根目录创建 commitlint.config.js 校验规则配置文件\r",p:`module.exports = {
  // 继承的规则
  extends: ['@commitlint/config- ...`,l:"规范/代码提交规范.html#_3-在根目录创建-commitlint-config-js-校验规则配置文件",a:"_3-在根目录创建-commitlint-config-js-校验规则配置文件"},"177.9":{t:"4.新增 husky 配置文件，执行命令生成 commit-msg 文件\r",p:"npx husky add .husky/commit-msg &quot;npx --no-install commitl ...",l:"规范/代码提交规范.html#_4-新增-husky-配置文件-执行命令生成-commit-msg-文件",a:"_4-新增-husky-配置文件-执行命令生成-commit-msg-文件"},"178.0":{t:"编码规范",p:"",l:"规范/编码规范/css.html",a:"编码规范"},"180.0":{t:"ESLint + Prettier 根据配置规则格式化代码\r",p:`
Webpack 配置 ESLint
Vite 配置 ESLint

`,l:"规范/编码规范/index.html",a:"eslint-prettier-根据配置规则格式化代码"},"180.1":{t:"1.安装 ESLint + Prettier 依赖\r",p:"yarn add eslint prettier eslint-config-prettier eslint-plugin- ...",l:"规范/编码规范/index.html#_1-安装-eslint-prettier-依赖",a:"_1-安装-eslint-prettier-依赖"},"180.2":{t:"2.创建 .eslintrc.js 配置文件\r",p:`module.exports = {
  root: true,
  env: {
    es6: true,
    b ...`,l:"规范/编码规范/index.html#_2-创建-eslintrc-js-配置文件",a:"_2-创建-eslintrc-js-配置文件"},"180.3":{t:"3.在项目根目录创建 **.eslintignore** 文件\r",p:`作为 eslint 修复文件时要忽略的文件列表
node_modules
dist
dev

`,l:"规范/编码规范/index.html#_3-在项目根目录创建-eslintignore-文件",a:"_3-在项目根目录创建-eslintignore-文件"},"180.4":{t:"4.创建命令根据配置修复项目文件\r",p:`&quot;scripts&quot;: {
  &quot;eslint-fix&quot;: &quot;eslint  ...`,l:"规范/编码规范/index.html#_4-创建命令根据配置修复项目文件",a:"_4-创建命令根据配置修复项目文件"},"180.5":{t:"使用 husky 强制代码格式化\r",p:"\r",l:"规范/编码规范/index.html#使用-husky-强制代码格式化",a:"使用-husky-强制代码格式化"},"180.6":{t:"1.安装依赖，生成配置目录\r",p:`npm install husky@8.0.1 -g

npx husky install

yarn add lint-s ...`,l:"规范/编码规范/index.html#_1-安装依赖-生成配置目录",a:"_1-安装依赖-生成配置目录"},"180.7":{t:"2.新增 husky 配置文件，执行命令生成 pre-commit 配置文件，并配置在预提交时进行代码格式化\r",p:"npx husky add .husky/pre-commit &quot;npx lint-staged $HUSKY_G ...",l:"规范/编码规范/index.html#_2-新增-husky-配置文件-执行命令生成-pre-commit-配置文件-并配置在预提交时进行代码格式化",a:"_2-新增-husky-配置文件-执行命令生成-pre-commit-配置文件-并配置在预提交时进行代码格式化"},"180.8":{t:"3.在 package.json 中进行新增，用于只修复已修改的文件\r",p:`&quot;lint-staged&quot;: {
  // src目录下所有的js和vue文件
  &quot;**.j ...`,l:"规范/编码规范/index.html#_3-在-package-json-中进行新增-用于只修复已修改的文件",a:"_3-在-package-json-中进行新增-用于只修复已修改的文件"},"181.0":{t:"注释\r",p:`/**
* @overview 对当前代码文件的描述。
* @author wanggang。
* @version 1.0 ...`,l:"规范/编码规范/js.html",a:"注释"},"183.0":{t:"API接口：\r",p:`微信服务端
微信小程序端
后台端
三端代码如何设计
客户端和服务端发版
1.新建迭代.MarkDown，记录每次发版内容，只 ...`,l:"规范/项目版本规范.html",a:"api接口"},"184.0":{t:"清除浮动的几种方式\r",p:`.clear-fix:after{content:&quot;&quot;;clear: both}

`,l:"面试题/css.html",a:"清除浮动的几种方式"},"184.1":{t:"css水平、垂直居中的写法，请写出多种\r",p:`position、flex
`,l:"面试题/css.html#css水平、垂直居中的写法-请写出多种",a:"css水平、垂直居中的写法-请写出多种"},"184.2":{t:"1rem、1em、1vh/vw、1px各自代表的含义？\r",p:`
em对标父级px单位
rem对标root的px单位
vh对标Viewport Width 和 Viewport Heigh ...`,l:"面试题/css.html#_1rem、1em、1vh-vw、1px各自代表的含义",a:"_1rem、1em、1vh-vw、1px各自代表的含义"},"184.3":{t:"画一条0.5px的直线\r",p:`.px{
  height: 1px;
  transform: scale(0.5);
}

`,l:"面试题/css.html#画一条0-5px的直线",a:"画一条0-5px的直线"},"184.4":{t:"CSS3 新特性\r",p:`font-face
border-radius 圆角
box-shadow	阴影
background-gradient	颜 ...`,l:"面试题/css.html#css3-新特性",a:"css3-新特性"},"184.5":{t:"什么是Retina 显示屏，带来了什么问题\r",p:"retina：一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的re ...",l:"面试题/css.html#什么是retina-显示屏-带来了什么问题",a:"什么是retina-显示屏-带来了什么问题"},"184.6":{t:"webkit表单输入框placeholder的颜色值能改变么\r",p:`input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus:: ...`,l:"面试题/css.html#webkit表单输入框placeholder的颜色值能改变么",a:"webkit表单输入框placeholder的颜色值能改变么"},"184.7":{t:"webkit表单元素的默认外观怎么重置\r",p:`.css{
    -webkit-appearance:none;
}

`,l:"面试题/css.html#webkit表单元素的默认外观怎么重置",a:"webkit表单元素的默认外观怎么重置"},"184.8":{t:"WP系统a、input标签被点击时产生的半透明灰色背景怎么去掉\r",p:"&lt;meta name=&quot;msapplication-tap-highlight&quot; content= ...",l:"面试题/css.html#wp系统a、input标签被点击时产生的半透明灰色背景怎么去掉",a:"wp系统a、input标签被点击时产生的半透明灰色背景怎么去掉"},"184.9":{t:"webkit表单输入框placeholder的文字能换行么\r",p:`ios可以，android不行，在textarea标签下都可以换行
`,l:"面试题/css.html#webkit表单输入框placeholder的文字能换行么",a:"webkit表单输入框placeholder的文字能换行么"},"184.10":{t:"IE10（winphone8）表单元素默认外观如何重置\r",p:`
禁用 select 默认下拉箭头

/* ::-ms-expand 适用于表单选择控件下拉箭头的修改，有多个属性值，设置它 ...`,l:"面试题/css.html#ie10-winphone8-表单元素默认外观如何重置",a:"ie10-winphone8-表单元素默认外观如何重置"},"184.11":{t:"禁止iOS长按时触发系统的菜单，禁止iOS&android长按时下载图片\r",p:`.css{-webkit-touch-callout: none}

`,l:"面试题/css.html#禁止ios长按时触发系统的菜单-禁止ios-android长按时下载图片",a:"禁止ios长按时触发系统的菜单-禁止ios-android长按时下载图片"},"184.12":{t:"禁止iOS和android用户选中文字\r",p:`.css{-webkit-user-select:none}

`,l:"面试题/css.html#禁止ios和android用户选中文字",a:"禁止ios和android用户选中文字"},"184.13":{t:"如何模拟按钮hover效果\r",p:"移动端触摸按钮的效果，可明示用户有些事情正要发生，是一个比较好体验，但是移动设备中并没有鼠标指针，使用css的hover并不 ...",l:"面试题/css.html#如何模拟按钮hover效果",a:"如何模拟按钮hover效果"},"184.14":{t:"屏幕旋转的事件和样式\r",p:`事件
// window.orientation ，取值：正负90表示横屏模式、0和180表现为竖屏模式；
window.o ...`,l:"面试题/css.html#屏幕旋转的事件和样式",a:"屏幕旋转的事件和样式"},"184.15":{t:"禁止微信浏览器调整字体大小\r",p:`原理：

android侧是复写了 layoutinflater 对 textview 做了统一处理
ios侧是修改了 bo ...`,l:"面试题/css.html#禁止微信浏览器调整字体大小",a:"禁止微信浏览器调整字体大小"},"184.16":{t:"取消input在ios下，输入的时候英文首字母的默认大写\r",p:"&lt;input autocapitalize=&quot;off&quot; autocorrect=&quot;off ...",l:"面试题/css.html#取消input在ios下-输入的时候英文首字母的默认大写",a:"取消input在ios下-输入的时候英文首字母的默认大写"},"184.17":{t:"android 上去掉语音输入按钮\r",p:`input::-webkit-input-speech-button {display: none}

`,l:"面试题/css.html#android-上去掉语音输入按钮",a:"android-上去掉语音输入按钮"},"184.18":{t:"1px 宽高\r",p:`.border1px {
  position: relative;border: none;
  &amp;:before ...`,l:"面试题/css.html#_1px-宽高",a:"_1px-宽高"},"184.19":{t:"浏览器自动填充表单背景色\r",p:`input:-webkit-autofill {
      background: inhert;
      color ...`,l:"面试题/css.html#浏览器自动填充表单背景色",a:"浏览器自动填充表单背景色"},"184.20":{t:"设计高性能CSS3动画的几个要素\r",p:`参考《 High Performance Animations 》

尽可能地使用合成属性 transform 和 opac ...`,l:"面试题/css.html#设计高性能css3动画的几个要素",a:"设计高性能css3动画的几个要素"},"184.21":{t:"解决PC端屏幕缩放比例对页面布局的影响\r",p:`现在很多笔记本电脑都推荐将缩放设置为125%，等比例放大显示。
`,l:"面试题/css.html#解决pc端屏幕缩放比例对页面布局的影响",a:"解决pc端屏幕缩放比例对页面布局的影响"},"184.22":{t:"这对我们前端的页面的布局会产生一些影响\r",p:`

首先，单独的响应式布局hold不住这个问题，因为出问题的是device-pixel-ratio。


问题现象是高分屏下 ...`,l:"面试题/css.html#这对我们前端的页面的布局会产生一些影响",a:"这对我们前端的页面的布局会产生一些影响"},"184.23":{t:"px、rpx、em、rem、vw、vh等像素单位的区别\r",p:`

px：px就是 pixel的缩写，意味像素。px就是一张图片最小的一个点，一张位图就是无数个这样的点构成的，是web开发 ...`,l:"面试题/css.html#px、rpx、em、rem、vw、vh等像素单位的区别",a:"px、rpx、em、rem、vw、vh等像素单位的区别"},"184.24":{t:"解决方案一\r",p:`@media all
and (-moz-min-device-pixel-ratio: 1.09) and (-moz-m ...`,l:"面试题/css.html#解决方案一",a:"解决方案一"},"184.25":{t:"解决方案二\r",p:`
/***js代码***/
function handleScreen(){
  const m = detectZoom( ...`,l:"面试题/css.html#解决方案二",a:"解决方案二"},"184.26":{t:"css 通用属性有什么区别\r",p:`

initial： 字面意思，初始化。表示该值等于浏览器对于该属性的默认值，不同浏览器实现可能不一致（所有才有了 norm ...`,l:"面试题/css.html#css-通用属性有什么区别",a:"css-通用属性有什么区别"},"185.0":{t:"新特性\r",p:`&lt;canvas&gt;&lt;/canvas&gt;     画图 
&lt;video src=&quot;&quo ...`,l:"面试题/html.html",a:"新特性"},"185.1":{t:"新功能\r",p:`
获取经纬度：Geolocation
多线程：Webworker
长连接通讯：Websocket
将Web应用程序安装到设备 ...`,l:"面试题/html.html#新功能",a:"新功能"},"185.2":{t:"语义化标签\r",p:`&lt;header&gt;&lt;/header&gt; 头部 
&lt;footer&gt;&lt;/footer&gt ...`,l:"面试题/html.html#语义化标签",a:"语义化标签"},"185.3":{t:" 表单控件\r",p:`&lt;input type=&quot;date&quot; /&gt;
&lt;input type=&quot;tim ...`,l:"面试题/html.html#表单控件",a:"表单控件"},"185.4":{t:"打电话发短信写邮件怎么实现\r",p:`
打电话

&lt;a href=&quot;tel:0755-10086&quot;&gt;打电话给:0755-10086 ...`,l:"面试题/html.html#打电话发短信写邮件怎么实现",a:"打电话发短信写邮件怎么实现"},"185.5":{t:"手机拍照和上传图片\r",p:"使用 &lt;input type=&quot;file&quot;&gt; 的 accept 属性，ios 有拍照、录像、 ...",l:"面试题/html.html#手机拍照和上传图片",a:"手机拍照和上传图片"},"185.6":{t:"摇一摇功能\r",p:`HTML5 deviceMotion ：封装了运动传感器数据的事件，可以获取手机运动状态下的运动加速度等数据。
HTML5晃 ...`,l:"面试题/html.html#摇一摇功能",a:"摇一摇功能"},"186.0":{t:"简单说一下 http， http 和 https 有什么区别\r",p:`
http 是无状态的，可以使用 keep-alive 持久连接，一方中断则会断开
http 使用明文传输，可被监听
htt ...`,l:"面试题/http.html",a:"简单说一下-http-http-和-https-有什么区别"},"186.1":{t:"http 和 https 有什么区别\r",p:`协议上使用 SSL 或 TSL 安全协议层。
完整层

应用层：解析 域名、ip、请求信息
传输层： 使用 TCP协议进行连 ...`,l:"面试题/http.html#http-和-https-有什么区别",a:"http-和-https-有什么区别"},"186.2":{t:"输入 url 到 页面发生了哪些\r",p:`
DNS 解析域名IP、解析请求信息
通过 TCP协议 向服务器建立连接，进行三次握手
服务器返回数据和状态码
浏览器进行渲 ...`,l:"面试题/http.html#输入-url-到-页面发生了哪些",a:"输入-url-到-页面发生了哪些"},"186.3":{t:"建立 TCP 协议会增加请求延时\r",p:`
资源打包、合并请求
使用缓存，减少请求
使用 keep-alive
使用多个域名请求，增加并发量；使用 http2 的多线 ...`,l:"面试题/http.html#建立-tcp-协议会增加请求延时",a:"建立-tcp-协议会增加请求延时"},"186.4":{t:"get 和 post 有什么区别\r",p:`
两者都是用于发送数据请求，但更多的是 get 用于查询、post 用于写入，相较于安全无差，都可以使用抓包工具进行查看
g ...`,l:"面试题/http.html#get-和-post-有什么区别",a:"get-和-post-有什么区别"},"187.0":{t:" JS基本类型有哪些\r",p:`string、number、boolean、null、undefined、Symbol、bigint
`,l:"面试题/js.html",a:"js基本类型有哪些"},"187.1":{t:"typeof [0,1,2,3] 的输出 \r",p:`'object'
`,l:"面试题/js.html#typeof-0-1-2-3-的输出",a:"typeof-0-1-2-3-的输出"},"187.2":{t:"js中==和===的区别\r",p:`
==：判断转义的值是否相等
===：值相等并且类型相等

`,l:"面试题/js.html#js中-和-的区别",a:"js中-和-的区别"},"187.3":{t:"Cookie、sessionStorage、localStorage的区别\r",p:`

Cookie：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而 ...`,l:"面试题/js.html#cookie、sessionstorage、localstorage的区别",a:"cookie、sessionstorage、localstorage的区别"},"187.4":{t:"什么是持久cookie?\r",p:`指定了expire time（有效期）的是持久cookie，没有指定的是会话cookie
`,l:"面试题/js.html#什么是持久cookie",a:"什么是持久cookie"},"187.5":{t:"js获取元素的有哪些方法\r",p:`
getElementById
getElementsByClassName
getElementsByTagName
ge ...`,l:"面试题/js.html#js获取元素的有哪些方法",a:"js获取元素的有哪些方法"},"187.6":{t:"列举几种跨越的方式\r",p:`
jsonp
Access-Control-Allow-Credentials: true
desServer.proxy
 ...`,l:"面试题/js.html#列举几种跨越的方式",a:"列举几种跨越的方式"},"187.7":{t:"es6数组去重\r",p:`[...new Set(arr)];
Array.from(new Set(arr))

`,l:"面试题/js.html#es6数组去重",a:"es6数组去重"},"187.8":{t:"使用 Class 手写一个 Promise\r",p:`// 创建一个Promise的类
  class Promise {
  constructor(executer) {
  ...`,l:"面试题/js.html#使用-class-手写一个-promise",a:"使用-class-手写一个-promise"},"187.9":{t:"ajax 和 axios 的区别\r",p:"axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过 ...",l:"面试题/js.html#ajax-和-axios-的区别",a:"ajax-和-axios-的区别"},"188.0":{t:" Vue 组件通信\r",p:`
props、$emit
$on、$emit
vuex
$attrs、$listeners
$parent 、 $child ...`,l:"面试题/vue/index.html",a:"vue-组件通信"},"188.1":{t:"computed 和 watch 的区别\r",p:`
computed创建的属性会被缓存，在页面多次使用也只会触发一次。依赖的数据发生变化时会再次更新。
watch用于异步监听 ...`,l:"面试题/vue/index.html#computed-和-watch-的区别",a:"computed-和-watch-的区别"},"188.2":{t:"完整版（vue.js）和运行版（vue.runtime.js）有什么区别\r",p:"template解析器占据代码的三分之一。完整版包含template解析器；运行版去除了template解析器，保留了核心功 ...",l:"面试题/vue/index.html#完整版-vue-js-和运行版-vue-runtime-js-有什么区别",a:"完整版-vue-js-和运行版-vue-runtime-js-有什么区别"},"188.3":{t:"key起到什么作用\r",p:"vnode 在更新时会用 key 进行对比，在对比时发现相同的 key， 直接会复用元素。如果不填写 key，vue 则会默 ...",l:"面试题/vue/index.html#key起到什么作用",a:"key起到什么作用"},"188.4":{t:"v-show和v-if的区别\r",p:"\r",l:"面试题/vue/index.html#v-show和v-if的区别",a:"v-show和v-if的区别"},"188.5":{t:"Vue最小化更新过程是什么样子的\r",p:"\r",l:"面试题/vue/index.html#vue最小化更新过程是什么样子的",a:"vue最小化更新过程是什么样子的"},"188.6":{t:"Vue 如何实现指令系统\r",p:"\r",l:"面试题/vue/index.html#vue-如何实现指令系统",a:"vue-如何实现指令系统"},"188.7":{t:"用到了哪些开发小技巧\r",p:`
提升性能：函数科里化
函数拦截：处理数组的 push、pop、shift、unshift、revers、sort、spli ...`,l:"面试题/vue/index.html#用到了哪些开发小技巧",a:"用到了哪些开发小技巧"},"190.0":{t:"hash 和 history 实现以及区别\r",p:`
hash： 使用 location.hash 控制路由跳转， 监听 hashchange 事件
history：使用 H5 ...`,l:"面试题/vue/vue-router.html",a:"hash-和-history-实现以及区别"},"190.1":{t:"`$route` 和 `$router` 的区别是什么？\r",p:`
router 为 VueRouter 的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。
route 是路由信 ...`,l:"面试题/vue/vue-router.html#route-和-router-的区别是什么",a:"route-和-router-的区别是什么"},"191.0":{t:"Vue、React、Angular 哪个更好？\r",p:`

与其说哪个更好，主要是看社区更发达为主要优点之一


Vue 集成了 React 和 Angular 的优点，通过vue ...`,l:"面试题/vue/Vue2和3.html",a:"vue、react、angular-哪个更好"},"191.1":{t:"Vue2 和 Vue3 的区别\r",p:`
更好的支持 typescript
底层，使用了Proxy

Vue3 使用 Proxy，Proxy 代理是针对整个对象，而 ...`,l:"面试题/vue/Vue2和3.html#vue2-和-vue3-的区别",a:"vue2-和-vue3-的区别"},"191.2":{t:"自定义 hook\r",p:`抽离可复用的功能，框架提供一些内置函数，在 hook 里可以调用，让这个功能拥有组件状态。
更加是弥补了 mixin、ext ...`,l:"面试题/vue/Vue2和3.html#自定义-hook",a:"自定义-hook"},"191.3":{t:"为什么使用 Composition API\r",p:`
https://blog.csdn.net/wu_xianqiang/article/details/104417875
 ...`,l:"面试题/vue/Vue2和3.html#为什么使用-composition-api",a:"为什么使用-composition-api"},"191.4":{t:"JSX 语法开发与传统开发有什么区别（包含了 为什么使用JSX语法开发）\r",p:"因为 JSX 语法符合 Vnode 的抽象思维，更加贴近 Vue 原生底层结构，思想和结构更加清晰明了。JSX 应用起来更加 ...",l:"面试题/vue/Vue2和3.html#jsx-语法开发与传统开发有什么区别-包含了-为什么使用jsx语法开发",a:"jsx-语法开发与传统开发有什么区别-包含了-为什么使用jsx语法开发"},"193.0":{t:"MVC 和 MVVM （双向数据绑定）\r",p:"MVVM是Model-View-ViewModel的简写。它本质上就是MVC 的改进版。MVVM 就是将其中的View 的状 ...",l:"面试题/vue/设计思想.html",a:"mvc-和-mvvm-双向数据绑定"},"193.1":{t:"单向数据流\r",p:`组件之间进行数据传递，无法直接将传递进来的数据进行修改，而是通过父组件提供的方法进行修改，达到显式行为，让状态修改有迹可寻
`,l:"面试题/vue/设计思想.html#单向数据流",a:"单向数据流"},"193.2":{t:"为什么要使用虚拟 DOM\r",p:`性能提升
`,l:"面试题/vue/设计思想.html#为什么要使用虚拟-dom",a:"为什么要使用虚拟-dom"},"194.0":{t:"面试官想听到什么？\r",p:`.请你做一下自我介绍。
❌不要说你什么时候毕业，得过什么奖，工作几家公司
☑️面试官想听你的优势和这个岗位的匹配度。
2.说 ...`,l:"面试题/人力.html",a:"面试官想听到什么"},"195.0":{t:"1. 将样式表放到页面顶部\r",p:`
不使用CSS表达式
不使用 @import
避免回流重绘


回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化 ...`,l:"面试题/优化/css.html",a:"_1-将样式表放到页面顶部"},"195.1":{t:"减少重排重绘\r",p:`以下三种情况会导致页面重新渲染

修改DOM
修改样式
用户事件

重新渲染就是重新布局和重新绘制，前者叫重排（reflow ...`,l:"面试题/优化/css.html#减少重排重绘",a:"减少重排重绘"},"197.0":{t:"优化介绍",p:"",l:"面试题/优化/index.html",a:"优化介绍"},"198.0":{t:"js优化",p:"",l:"面试题/优化/js.html",a:"js优化"},"199.0":{t:"# Vue 首屏优化\r",p:`
路由异步加载
组件按需加载
骨架屏(饿了么开源)
编码阶段
尽量减少data中的数据，data中的数据都会增加getter ...`,l:"面试题/优化/vue.html",a:"vue-首屏优化"},"200.0":{t:"# HTML\r",p:"\r",l:"面试题/设备兼容问题.html",a:"html"},"200.1":{t:"播放视频如何不自动全屏\r",p:`&lt;!--
1.目前只有ios7+、winphone8+支持自动播放
2.支持Airplay的设备（如：音箱、Apple ...`,l:"面试题/设备兼容问题.html#播放视频如何不自动全屏",a:"播放视频如何不自动全屏"},"200.2":{t:"ios系统中元素被触摸时产生半透明灰色遮罩\r",p:"/* ios用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置 -webkit-tap-highlight- ...",l:"面试题/设备兼容问题.html#ios系统中元素被触摸时产生半透明灰色遮罩",a:"ios系统中元素被触摸时产生半透明灰色遮罩"},"200.3":{t:"部分android系统中元素被点击时产生边框\r",p:"/* android用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置 -webk ...",l:"面试题/设备兼容问题.html#部分android系统中元素被点击时产生边框",a:"部分android系统中元素被点击时产生边框"},"200.4":{t:"iOS输入框默认有内部阴影\r",p:`input {
  -webkit-appearance: none;
}

input::-webkit-outer-sp ...`,l:"面试题/设备兼容问题.html#ios输入框默认有内部阴影",a:"ios输入框默认有内部阴影"},"200.5":{t:"去除iPhone中默认的input样式\r",p:`input[type=&quot;submit&quot;],
input[type=&quot;reset&quot;], ...`,l:"面试题/设备兼容问题.html#去除iphone中默认的input样式",a:"去除iphone中默认的input样式"},"200.6":{t:"IOS滑动页面不流畅\r",p:`body {
  -webkit-overflow-scrolling: touch;
}

`,l:"面试题/设备兼容问题.html#ios滑动页面不流畅",a:"ios滑动页面不流畅"},"200.7":{t:"消除transition闪屏\r",p:`.css{
  /*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
  -webkit-transform-style ...`,l:"面试题/设备兼容问题.html#消除transition闪屏",a:"消除transition闪屏"},"200.8":{t:"CSS动画页面闪白, 动画卡顿\r",p:`
尽可能地使用合成属性transform和opacity来设计CSS3动画， 不使用position的left和top来定位 ...`,l:"面试题/设备兼容问题.html#css动画页面闪白-动画卡顿",a:"css动画页面闪白-动画卡顿"},"200.9":{t:"android 2.3 的一些bug\r",p:`
@-webkit-keyframes 需要以0%开始100%结束，0%的百分号不能去掉
after 和 before 伪类 ...`,l:"面试题/设备兼容问题.html#android-2-3-的一些bug",a:"android-2-3-的一些bug"},"200.10":{t:"android 4.x 的一些bug\r",p:`参考《 border-radius 移动之伤 》

三星 Galaxy S4中自带浏览器不支持 border-radius  ...`,l:"面试题/设备兼容问题.html#android-4-x-的一些bug",a:"android-4-x-的一些bug"},"200.11":{t:"fixed 属性 bug\r",p:`
ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位
android下fixed表现要比iOS更好，软 ...`,l:"面试题/设备兼容问题.html#fixed-属性-bug",a:"fixed-属性-bug"},"200.12":{t:"如何阻止windows Phone的默认触摸事件\r",p:`winphone下默认触摸事件事件使用e.preventDefault是无效的
html{-ms-touch-action: ...`,l:"面试题/设备兼容问题.html#如何阻止windows-phone的默认触摸事件",a:"如何阻止windows-phone的默认触摸事件"},"200.13":{t:"audio元素和video元素在ios和andriod中无法自动播放\r",p:`应对方案：触屏即播(可参考《 无法自动播放的audio元素 》)
$('html').one('touchstart',fu ...`,l:"面试题/设备兼容问题.html#audio元素和video元素在ios和andriod中无法自动播放",a:"audio元素和video元素在ios和andriod中无法自动播放"},"200.14":{t:"移动端点击事件300毫秒延迟\r",p:`
使用 click 事件, 不要使用 touch 事件
使用 fastclick

import FastClick fro ...`,l:"面试题/设备兼容问题.html#移动端点击事件300毫秒延迟",a:"移动端点击事件300毫秒延迟"},"200.15":{t:"iOS 上拉边界下拉出现空白\r",p:"问题描述： 手指按住屏幕下拉， 屏幕顶部会多出一块白色区域。 手指按住屏幕上拉， 底部多出一块白色区域。 产生原因： 在 i ...",l:"面试题/设备兼容问题.html#ios-上拉边界下拉出现空白",a:"ios-上拉边界下拉出现空白"},"200.16":{t:"ios 日期转换 NAN 的问题\r",p:`'yyyy-MM-dd'.replace(/-/g, '/')

`,l:"面试题/设备兼容问题.html#ios-日期转换-nan-的问题",a:"ios-日期转换-nan-的问题"},"200.17":{t:" 软键盘问题\r",p:`问题描述：iOS 系统中文输入法输入英文时， 字母之间可能会出现一个六分之一空格
解决方式： 可以通过正则去掉
this.v ...`,l:"面试题/设备兼容问题.html#软键盘问题",a:"软键盘问题"},"200.18":{t:"IOS 键盘弹起挡住原来的视图\r",p:"可以通过监听移动端软键盘弹起 Element.scrollIntoViewIfNeeded（ Boolean） 方法用来将不 ...",l:"面试题/设备兼容问题.html#ios-键盘弹起挡住原来的视图",a:"ios-键盘弹起挡住原来的视图"},"200.19":{t:"移动端点击穿透\r",p:`import FastClick from 'fastclick';
if ('addEventListener' in d ...`,l:"面试题/设备兼容问题.html#移动端点击穿透",a:"移动端点击穿透"},"201.0":{t:"1. 岗位职责\r",p:`1.负责PC端和移动端的设计开发工作，具体项目：原创、整装、直投官网、小程序、后台、专题页;
2.负责对前端相关部分进行不断 ...`,l:"面试题/面试大纲.html",a:"_1-岗位职责"},"202.0":{t:"为什么不直接在小程序内嵌 web-view 展示 H5 的网站？\r",p:`小程序更符合 APP 思想，可以为程序提供更多的手机权限和利用手机权限已封装好的功能
`,l:"面试题/项目经验.html",a:"为什么不直接在小程序内嵌-web-view-展示-h5-的网站"},"204.0":{t:"# 使用 prettier 在浏览器格式化代码\r",p:`/*
 * 浏览器使用：https://prettier.io/docs/en/browser.html#es-module ...`,l:"项目积累/前端/prettier.html",a:"使用-prettier-在浏览器格式化代码"},"205.0":{t:"转载文章：vue3 table 性能优化，减少 85% 渲染耗时 - 掘金\r",p:"前段时间公司有一个比较重要的模块从 vue2 升级到 vue3，升级后发现 element-plus table 的性能相比 ...",l:"项目积累/前端/vue3-table优化/index.html",a:"转载文章-vue3-table-性能优化-减少-85-渲染耗时-掘金"},"205.1":{t:"准备工作\r",p:"首先初始化一个 vue3 项目，引入 element-plus，并使用 el-table 实现一个 20 行 * 180 列 ...",l:"项目积累/前端/vue3-table优化/index.html#准备工作",a:"准备工作"},"205.2":{t:"最小化业务 demo 创建\r",p:`核心 table 代码代码如下，完整代码参见：table-base | table-performance-demo
&lt ...`,l:"项目积累/前端/vue3-table优化/index.html#最小化业务-demo-创建",a:"最小化业务-demo-创建"},"205.3":{t:"渲染耗时计算逻辑\r",p:`渲染耗时计算逻辑如下，利用 script 阻塞，来计算渲染耗时
/*
&lt;div v-loading=&quot;sho ...`,l:"项目积累/前端/vue3-table优化/index.html#渲染耗时计算逻辑",a:"渲染耗时计算逻辑"},"205.4":{t:"性能数据，与 performance 耗时对比\r",p:`table 渲染、switch 切换测试耗时如下
!table-base-duration.png
table 隐藏到显示  ...`,l:"项目积累/前端/vue3-table优化/index.html#性能数据-与-performance-耗时对比",a:"性能数据-与-performance-耗时对比"},"205.5":{t:"ref 改 shallowRef\r",p:"\r",l:"项目积累/前端/vue3-table优化/index.html#ref-改-shallowref",a:"ref-改-shallowref"},"205.6":{t:"理论依据与可行性分析\r",p:"列表中的开关切换时，table 虽然只是一个节点发生了变化，但依旧触发了完整的 vue patch 比对更新逻辑，耗时较久。 ...",l:"项目积累/前端/vue3-table优化/index.html#理论依据与可行性分析",a:"理论依据与可行性分析"},"205.7":{t:"拷贝 element-plus table 源码到当前项目\r",p:"当前最新的版本是 2.2.8，打开 element-plus/releases，下载最新版本代码，将 table 目录（ e ...",l:"项目积累/前端/vue3-table优化/index.html#拷贝-element-plus-table-源码到当前项目",a:"拷贝-element-plus-table-源码到当前项目"},"205.8":{t:"修改源码 - ref 改 shallowRef\r",p:"在 src/table/src/store/watcher.ts 中，将 data 和 columns 数据从 ref 改为 ...",l:"项目积累/前端/vue3-table优化/index.html#修改源码-ref-改-shallowref",a:"修改源码-ref-改-shallowref"},"205.9":{t:"性能数据（耗时减少17-20%）\r",p:`table 渲染、switch 切换测试耗时如下
!table-ref-shallow-ref-duration.png
t ...`,l:"项目积累/前端/vue3-table优化/index.html#性能数据-耗时减少17-20",a:"性能数据-耗时减少17-20"},"205.10":{t:"getColspanRealWidth 优化\r",p:`当页面卡顿时，可以通过 performance 测试性能。下图是点击 switch 开关后的性能数据。可以看到


有两个  ...`,l:"项目积累/前端/vue3-table优化/index.html#getcolspanrealwidth-优化",a:"getcolspanrealwidth-优化"},"205.11":{t:"耗时从 200ms 下降到 0.7ms\r",p:"修改好后再次测试性能，惊喜的发现，这个函数的耗时从 200ms+ 下降到 1ms 内，render 性能明显提升。1.54s ...",l:"项目积累/前端/vue3-table优化/index.html#耗时从-200ms-下降到-0-7ms",a:"耗时从-200ms-下降到-0-7ms"},"205.12":{t:"性能数据（耗时减少7-20%）\r",p:`table 渲染、switch 切换测试耗时如下
!get-width-optimize-perf.png
table 隐藏 ...`,l:"项目积累/前端/vue3-table优化/index.html#性能数据-耗时减少7-20",a:"性能数据-耗时减少7-20"},"205.13":{t:"业务优化 tooltip disabled 改 if\r",p:`经过上面的优化后，我们意识到，即使是很细微的响应式数据优化，也会对性能带来较大影响。那业务逻辑中是否也存在这样的数据呢？
于 ...`,l:"项目积累/前端/vue3-table优化/index.html#业务优化-tooltip-disabled-改-if",a:"业务优化-tooltip-disabled-改-if"},"205.14":{t:"性能数据（耗时减少80%）\r",p:`table 渲染、switch 切换测试耗时如下
!tooltip-optimize-pref.png
table 隐藏到显 ...`,l:"项目积累/前端/vue3-table优化/index.html#性能数据-耗时减少80",a:"性能数据-耗时减少80"},"205.15":{t:"总结\r",p:"如下图，通过 3 个小的细节改动，将 table 渲染耗时从 6.88s 减少到 1s 左右，平均减少 85% 渲染耗时，用 ...",l:"项目积累/前端/vue3-table优化/index.html#总结",a:"总结"},"205.16":{t:"参考\r",p:`
一顿操作，我把 Table 组件性能提升了十倍

`,l:"项目积累/前端/vue3-table优化/index.html#参考",a:"参考"},"206.0":{t:"安装依赖\r",p:`yarn add lib-flexible -S

yarn add postcss-plugin-px2rem -D


 ...`,l:"项目积累/前端/移动端适配.html",a:"安装依赖"}},a={previewLength:62,buttonLabel:"Search",placeholder:"Search docs",allow:[],ignore:[],tokenize:"forward"},i={INDEX_DATA:e,PREVIEW_LOOKUP:t,Options:a};export{i as default};