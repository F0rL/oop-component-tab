# 实现面向对象的方式实现 Tab 组件
## 组件功能
封装一个Tab功能组件

## 组件实现方式
组件包含两个部分，初始化和事件绑定，分别封装成一个整体，作为方法绑定到原型上
```JavaScript
function Tab (node){

}

Tab.prototype = {
    constructor: Tab,
    init: function(){

    },
    bind: function(){

    },
    ...
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
```

## 如何使用
直接 new Tab ，将需要使用组件的对象作为实例

## 效果预览
https://f0rl.github.io/oop-component-tab/sample.html
