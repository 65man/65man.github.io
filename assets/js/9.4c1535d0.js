(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,a,s){"use strict";s.r(a);var l=s(45),e=Object(l.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("这里记录面试所遇到的 css 的一些问题，知识在于积累，量变引起质变。")]),t._v(" "),s("h2",{attrs:{id:"_1-一个盒子垂直水平居中有哪些方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个盒子垂直水平居中有哪些方法"}},[t._v("#")]),t._v(" 1. 一个盒子垂直水平居中有哪些方法")]),t._v(" "),s("ol",[s("li",[t._v("flex 布局")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".flex-center{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("绝对定位 + transform")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".father{\n  position: relative;\n}\n.son{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50% ,-50%);\n}\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("绝对定位 + margin: auto")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".father {\n  position: relative;\n}\n\n.son {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n}\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("绝对定位 + 负 margin")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".father {\n  position: relative;\n}\n\n.son {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -50px;\n  margin-top: -50px;\n}\n")])])]),s("h2",{attrs:{id:"_2-两种盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-两种盒子模型"}},[t._v("#")]),t._v(" 2. 两种盒子模型")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("标准盒模型：box-sizing: content-box;")])]),t._v(" "),s("li",[s("p",[t._v("怪异盒模型: box-sizing: border-box;")])]),t._v(" "),s("li",[s("p",[t._v("区别是标准盒模型的宽度是指的内容 content 的宽度，怪异盒模型是指 content + border + padding 的宽度")])])]),t._v(" "),s("h2",{attrs:{id:"_3-对-bfc-的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-对-bfc-的理解"}},[t._v("#")]),t._v(" 3. 对 BFC 的理解")]),t._v(" "),s("ol",[s("li",[t._v("什么是BFC")])]),t._v(" "),s("ul",[s("li",[t._v("可以将 BFC 看做元素的一个属性，一旦元素触发 BFC,那么这个元素可以看做是一个独立隔离的容器，容器里的布局不会影响容器外的容器，比如浮动布局，绝对定位，固定定位")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("触发BFC条件")])]),t._v(" "),s("ul",[s("li",[t._v("浮动、绝对定位、固定定位、overflow 值不为 visible 等都可以触发 BFC")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("BFC的应用场景")])]),t._v(" "),s("ul",[s("li",[t._v("清除浮动，上下边距重叠，阻止元素被浮动元素覆盖")])]),t._v(" "),s("h2",{attrs:{id:"_4-清除浮动的方法及优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-清除浮动的方法及优缺点"}},[t._v("#")]),t._v(" 4. 清除浮动的方法及优缺点")]),t._v(" "),s("ol",[s("li",[t._v("在尾部增加子元素添加 clear:both")])]),t._v(" "),s("p",[t._v("缺点：增加了无效的标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div class="box">\n     <div class="son1"></div>\n     <div class="clearboth1"></div>\n</div>\n\n.clearboth1 {\n  clear: both;\n}\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("利用overflow：hidden来触发BFC")])]),t._v(" "),s("p",[t._v("缺点：无法配合position使用，超出会隐藏")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".box {\n  overflow: hidden;\n}\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在父元素添加伪元素(推荐)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".box::after{\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n")])])]),s("h2",{attrs:{id:"_5-伪类和伪元素的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-伪类和伪元素的区别"}},[t._v("#")]),t._v(" 5. 伪类和伪元素的区别")]),t._v(" "),s("ul",[s("li",[t._v("伪类是定义的一种状态，比如:hover,:active,:visited")]),t._v(" "),s("li",[t._v("伪元素是用来创建一些dom树不存在的元素，比如::after,::before")]),t._v(" "),s("li",[t._v("写法上伪类是一个冒号，伪元素是两个冒号")])]),t._v(" "),s("h2",{attrs:{id:"_6-css中哪些属性可以继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-css中哪些属性可以继承"}},[t._v("#")]),t._v(" 6. css中哪些属性可以继承")]),t._v(" "),s("ul",[s("li",[t._v("字体相关的属性，font、font-size、font-family等")]),t._v(" "),s("li",[t._v("文本相关的属性，color、direction、text-aligin")]),t._v(" "),s("li",[t._v("可见属性，visibility")])]),t._v(" "),s("h2",{attrs:{id:"_7-重排和重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-重排和重绘"}},[t._v("#")]),t._v(" 7. 重排和重绘")]),t._v(" "),s("p",[t._v("1.浏览器渲染的过程")]),t._v(" "),s("ul",[s("li",[t._v("页面渲染的时候会将html解析成DOM树，css解析成CSSOM树(css对象模型)，然后DOM树和CSSOM树结合生成渲染树(render tree)，然后浏览器根据渲染树进行重排进行布局，最后进行重绘绘制显示页面")])]),t._v(" "),s("p",[t._v("2.重排和重绘的触发条件")]),t._v(" "),s("ul",[s("li",[t._v("页面布局或者大小发生改变触发重排，比如DOM的增加和删除，改变元素的位置大小，访问某些属性width,offsetWidth等")]),t._v(" "),s("li",[t._v("当元素的外观发生改变就会触发重绘，例如改变元素的color，boder,visibility等")]),t._v(" "),s("li",[t._v("重排一定引起重绘")])]),t._v(" "),s("p",[t._v("3.优化")]),t._v(" "),s("ul",[s("li",[t._v("js尽量减少对样式的操作，能用css就用css")]),t._v(" "),s("li",[t._v("分离读写操作")]),t._v(" "),s("li",[t._v("减少对dom的操作，能用createDocumentFragment的地方就用")]),t._v(" "),s("li",[t._v("尽量用transform代替位移，使用visibility代替display：none")])]),t._v(" "),s("h2",{attrs:{id:"_8-display的几个属性-并有什么特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-display的几个属性-并有什么特点"}},[t._v("#")]),t._v(" 8. display的几个属性，并有什么特点")]),t._v(" "),s("p",[t._v("1.diplay: block;")]),t._v(" "),s("ul",[s("li",[t._v("块级元素独占一行")]),t._v(" "),s("li",[t._v("可以设置宽和高")]),t._v(" "),s("li",[t._v("可以设置margin和padding")])]),t._v(" "),s("p",[t._v("2.diplay: inline;")]),t._v(" "),s("ul",[s("li",[t._v("行内元素，与其他行内元素同在一行")]),t._v(" "),s("li",[t._v("不能设置宽高，宽高是内容撑开")]),t._v(" "),s("li",[t._v("设置padding都有效，设置margin只有左右有效，上下无效")])]),t._v(" "),s("p",[t._v("3.display: inline-block;")]),t._v(" "),s("ul",[s("li",[t._v("行内块级元素，就是不占一行的块级元素")]),t._v(" "),s("li",[t._v("可以设置宽高")]),t._v(" "),s("li",[t._v("可以设置margin和padding")])]),t._v(" "),s("p",[t._v("4.display: flex;")]),t._v(" "),s("ul",[s("li",[t._v("弹性布局")])]),t._v(" "),s("h2",{attrs:{id:"_9-position有哪些属性-分别解释下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-position有哪些属性-分别解释下"}},[t._v("#")]),t._v(" 9. position有哪些属性，分别解释下")]),t._v(" "),s("ul",[s("li",[t._v("static 静态定位 正常文档流")]),t._v(" "),s("li",[t._v("relative 相对定位 以自身我参照， 脱离文档流但是还在文档流中占位置")]),t._v(" "),s("li",[t._v("absolute 绝对定位 以最近的定位祖先元素为参照，脱离文档流不占位置")]),t._v(" "),s("li",[t._v("fixed 固定定位 以浏览器窗口作为参照，脱离文档流不占位置")]),t._v(" "),s("li",[t._v("stick 粘性布局 兼容性不太好")])]),t._v(" "),s("h2",{attrs:{id:"_10-常用的布局有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-常用的布局有哪些"}},[t._v("#")]),t._v(" 10. 常用的布局有哪些")]),t._v(" "),s("ol",[s("li",[t._v("静态布局")])]),t._v(" "),s("ul",[s("li",[t._v("元素从左到右，从上到下")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("浮动布局")])]),t._v(" "),s("ul",[s("li",[t._v("根据浮动方向来并排，脱离文档流")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("定位布局")])]),t._v(" "),s("ul",[s("li",[t._v("使用position来定位")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("弹性布局")])]),t._v(" "),s("ul",[s("li",[t._v("使用flex来实现")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("响应式布局")])]),t._v(" "),s("ul",[s("li",[t._v("根据设备的尺寸来显示不同的样式，根据媒体查询来实现")])]),t._v(" "),s("h2",{attrs:{id:"_11-页面有三列内容-左右固定宽度-中间自适应显"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-页面有三列内容-左右固定宽度-中间自适应显"}},[t._v("#")]),t._v(" 11. 页面有三列内容，左右固定宽度，中间自适应显")]),t._v(" "),s("ol",[s("li",[t._v("浮动")])]),t._v(" "),s("p",[t._v("设置左右元素的浮动，设置中间元素margin左右的距离")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("定位")])]),t._v(" "),s("p",[t._v("设置左右元素的定位，设置中间元素margin左右的距离")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("负边距")])]),t._v(" "),s("p",[t._v("设置中间元素左浮动和margin，设置左边的元素margin-left:-100%;右边元素设置margin-left:-width;")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("flex")])]),t._v(" "),s("p",[t._v("设置容器为flex,设置左右元素flex-basic,设置中间元素flex-grow:1")]),t._v(" "),s("h2",{attrs:{id:"_12-flex是怎么使用的-flex-1代表什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-flex是怎么使用的-flex-1代表什么"}},[t._v("#")]),t._v(" 12. flex是怎么使用的，flex:1代表什么")]),t._v(" "),s("ul",[s("li",[t._v("容器的属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("display: flex; // 设置弹性布局\nflex-direction: row; // 控制主轴\nflex-wrap: nowrap; // 控制是否换行\n// 是上flex-direction 和 flex-wrap 的结合\nflex-flow: row nowrap;\njustify-content: center; // 主轴对齐方式\nalign-items: center; // 侧轴对齐方式\nalign-content: center; // 定义了多根轴线的对齐方式,只有一根轴线不起作用\n\n")])])]),s("ul",[s("li",[t._v("项目的属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("flex-order: 0; // 设置项目排列顺序\nflex-grow: 0; // 设置项目的放大比例，默认不放大\nflex-shrink: 1; // 设置项目的缩小比例，空间不足自动缩小\nflex-basic: auto; // 设置项目的大小\n// 是flex-grow flex-shrink flex-basic的结合\n// 两个快捷值：auto/1(1 1 auto) 和 none(0 0 auto)\nflex: 0 1 auto; // 默认值\nalign-self: auto; // 单个项目的排列方式，可覆盖align-items属性\n")])])]),s("h2",{attrs:{id:"_13-什么是外边距重叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-什么是外边距重叠"}},[t._v("#")]),t._v(" 13. 什么是外边距重叠")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("原因\n多个相邻盒子之间的边界没有任何内容，比如边框，内容等，造成边距重叠")])]),t._v(" "),s("li",[s("p",[t._v("解决")])])]),t._v(" "),s("ul",[s("li",[t._v("外层元素加上overflow：hidden，利用BFC在让元素变成一个独立隔离的容器")]),t._v(" "),s("li",[t._v("加上padding")]),t._v(" "),s("li",[t._v("设置透明的border")])]),t._v(" "),s("h2",{attrs:{id:"_14-rem和em的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-rem和em的区别"}},[t._v("#")]),t._v(" 14. rem和em的区别")]),t._v(" "),s("p",[t._v("rem比em多了个r,这个r代表的是root，rem是根据根节点html的font-size来计算，em是先找自身的font-sieze,没有找到就去找父元素的font-size来计算")]),t._v(" "),s("h2",{attrs:{id:"_15-画一条0-5px的线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-画一条0-5px的线"}},[t._v("#")]),t._v(" 15. 画一条0.5px的线")]),t._v(" "),s("p",[t._v("利用transform：scale(0.5);")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".box{\n  width: 200px;\n  height: 200px;\n  position: relative;\n}\n\n.box::after{\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 200%;\n  height: 200%;\n  border: 1px solid red;\n  transform-origin: 0 0;\n  transform: scale(0.5)\n}\n")])])]),s("h2",{attrs:{id:"_16-css实现一个三角形"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-css实现一个三角形"}},[t._v("#")]),t._v(" 16. css实现一个三角形")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".triangle-up{\n  height: 0;\n  width: 0;\n  border-bottom: 50px solid orange;\n  border-right: 50px solid transparent;\n  border-left: 50px solid transparent;\n}\n")])])]),s("h2",{attrs:{id:"_17-使用link和-import有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-使用link和-import有什么区别"}},[t._v("#")]),t._v(" 17. 使用Link和@import有什么区别？")]),t._v(" "),s("ul",[s("li",[t._v("从属关系：link是HTML提供的标签用来链接外部资源，@import是css提供的语法规则")]),t._v(" "),s("li",[t._v("加载顺序：加载页面的时候，link引入的css被同时加载；@import引入的要等HTML加载完后再去加载")]),t._v(" "),s("li",[t._v("兼容性：link不存在兼容性；@import在低版本的浏览器存在兼容问题")]),t._v(" "),s("li",[t._v("可控性区别：link可通过js操作，@import不能")])]),t._v(" "),s("h2",{attrs:{id:"_17-css的优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-css的优化"}},[t._v("#")]),t._v(" 17. css的优化")]),t._v(" "),s("ul",[s("li",[t._v("使用createDocumentFragment创建dom碎片，在它上批量操作dom，操做完在添加到文档里，只会触发一次重排")]),t._v(" "),s("li",[t._v("css3动画的优化，过渡尽量使用transform和opacity")]),t._v(" "),s("li",[t._v("嵌套的层级不要超过三级")]),t._v(" "),s("li",[t._v("使用合理的选择器")]),t._v(" "),s("li",[t._v("常用样式抽离成公共样式")])])])}),[],!1,null,null,null);a.default=e.exports}}]);