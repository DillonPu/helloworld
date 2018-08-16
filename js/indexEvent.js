function addNewTagUrl() {
  //自定页
  layer.open({
    type: 1
    , skin: 'layui-layer-demo' //样式类名
    , closeBtn: 0 //不显示关闭按钮
    , anim: 2
    , shadeClose: true //开启遮罩关闭
    , content: $("#form_layer")
    , btn: ['确定', '取消']
    , yes: function (index, layero) {
      var url_name = document.getElementById("url_name").value;
      var url_value = document.getElementById("url_value").value;
      var app = new Vue({
        el: '#test',
        data: {
          message: url_name
        }
      })
    }
    , btn2: function (index, layero) {
      
    }
  });
}

var appInit = new Vue({
  el: '#urls',
  data: {
    items: [
      {
        url_name: 'Baidu',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: 'Baidu',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: 'Baidu',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: 'Baidu',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      }
    ]
  }
})