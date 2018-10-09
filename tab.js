function Tab(node){
  this.node = node;
  this.init()
  this.bind()
}

Tab.prototype.init = function(){
  this.header = this.node.querySelectorAll('.tab-header>li')
  this.content = this.node.querySelectorAll('.tab-container>li')
}

Tab.prototype.bind = function(){
  var _this = this
  this.header.forEach(function(btn){
    btn.onclick = function(e){
      var target = e.target
      var index = [].indexOf.call(_this.header,target)
      _this.header.forEach(function(li){
        li.classList.remove('active')
      })
      target.classList.add('active')
      _this.content.forEach(function(content){
        content.classList.remove('active')
      })
      _this.content[index].classList.add('active')
    }
  })
}

var tab1 = new Tab(document.querySelectorAll('.tab')[0])
var tab2 = new Tab(document.querySelectorAll('.tab')[1])