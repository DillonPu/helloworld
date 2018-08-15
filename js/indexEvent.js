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
      //按钮【按钮二】的回调
      // alert("no");
    }
  });
}

var appInit = new Vue({
  el: '#urls',
  data: {
    items: [
      {
        url_name: '谷歌',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: '百度',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: '百度',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      },
      {
        url_name: '百度',
        url_value: "www.baidu.com",
        url_ico: "https://www.baidu.com/favicon.ico"
      }
    ]
  }
})