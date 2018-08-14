//侧边栏
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'touch':false,
});

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});

//侧边树
var zTreeObj,
setting = {
  view: {
    selectedMulti: false
  }
},
zTreeNodes = [
  {"name":"搜索", open:true, children: [
    { "name":"谷歌中国", "url":"http://g.cn/", "target":"_blank"},
    { "name":"谷歌", "url":"https://www.google.com/", "target":"_blank"},
    { "name":"百度", "url":"https://baidu.com/", "target":"_blank"},
    { "name":"360", "url":"https://www.so.com/", "target":"_blank"},
    { "name":"搜狗", "url":"https://www.sogou.com/", "target":"_blank"}
    ]
  },
  {"name":"新闻", open:true, children: [
    { "name":"人民网", "url":"http://www.people.com.cn/", "target":"_blank"},
    { "name":"搜狐", "url":"http://www.sohu.com/", "target":"_blank"},
    { "name":"网易", "url":"https://www.163.com/", "target":"_blank"},
    { "name":"360", "url":"https://www.so.com", "target":"_blank"},
    { "name":"腾讯", "url":"http://www.qq.com/", "target":"_blank"},
    { "name":"新浪", "url":"https://www.sina.com.cn/", "target":"_blank"}
    ]
  },
  {"name":"社交", open:true, children: [
    { "name":"新浪微博", "url":"https://weibo.com/", "target":"_blank"},
    { "name":"QQ空间", "url":"https://i.qq.com/", "target":"_blank"},
    ]
  },
  {"name":"工具", open:true, children: [
    { "name":"百度翻译", "url":"http://fanyi.baidu.com/", "target":"_blank"},
    { "name":"在线JSON转换", "url":"https://www.sojson.com/", "target":"_blank"},
    ]
  }
];

$(document).ready(function(){
  zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);
});