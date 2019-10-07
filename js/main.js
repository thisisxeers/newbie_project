  var DataList = document.getElementById('listdata');
  //出现下拉栏
  function ShowDiv() {
      DataList.style.display = "block";
  }
  //隐藏下来栏
  function HideDiv() {
      DataList.style.display = "none";
  }
  //输入点击内容
  function PushInput() {
      var target = event.target;
      var input = document.getElementById('headq');
      input.value = target.innerText;
      DataList.style.display = "none";
  }




  //这里是与轮播图片有关
  var websites = [],
      colors = [];
  //愚蠢的初始化网站和颜色的方法 :(
  websites[0] = "https://www.baidu.com/";
  colors[0] = "#000912";
  websites[1] = "https://www.baidu.com/";
  colors[1] = "#0A091B";
  websites[2] = "https://www.baidu.com/";
  colors[2] = "#092E31";
  websites[3] = "https://www.baidu.com/";
  colors[3] = "#0C0C0C";
  websites[4] = "https://www.baidu.com/";
  colors[4] = "#0C1013";
  websites[5] = "https://www.baidu.com/";
  colors[5] = "#FFFFFF";
  websites[6] = "https://www.baidu.com/";
  colors[6] = "#010202";

  //变化右边字体大小
  function change(x) {
      x.style.fontSize = "20px";
      x.children[0].children[0].style.fontSize = "12px";
      x.style.height = "50px";
      x.style.backgroundColor = "rgba(0, 0, 0, 0.671)";
      x.children[0].children[0].style.display = "block";
  }

  //回复右边字体大小
  function back(x) {

      x.style.fontSize = "16px";
      x.style.height = "25px";
      x.style.backgroundColor = "rgba(255, 255, 255, 0)";
      x.children[0].children[0].style.display = "none";
  }
  var spcontainer = document.getElementById('spc');
  var bgcolor = document.getElementsByClassName("MainBar")[0];
  var pics = document.getElementsByClassName('MBback')[0];
  var now = 0,
      total = 7;
  change(spcontainer.children[now]);
  //轮播下一个
  function swipe() {
      back(spcontainer.children[now]);
      now = (now + 1) % total;
      pics.innerHTML = "<a href=''><img  src='img/a%20(" + now + ").jpg' /></a>";
      bgcolor.style.backgroundColor = "" + colors[now] + "";
      //pics.innerHTML = "<img  src='img/a%20(2).jpg' />";
      change(spcontainer.children[now]);
  }
  //定义时间控件
  var MyVar = setInterval(swipe, 3000);

  //鼠标移上去变化内容：the world！，回复不是目标的大小，更改now的值，改图片，改字体
  function changex(num) {
      clearInterval(MyVar);
      back(spcontainer.children[now]);
      now = num;
      pics.innerHTML = "<a href='" + websites[now] + "'><img  src='img/a%20(" + now + ").jpg' /></a>";
      bgcolor.style.backgroundColor = "" + colors[now] + "";
      change(spcontainer.children[now])
  }
  //鼠标移开：时间开始流逝
  function backx() {
      MyVar = setInterval(swipe, 3000);
  }

  var nowmoviepart = 'MMrj';
  var nowmovienav = 0;
  var movienav = document.getElementsByClassName("MHnav")[0];
  //用Javascript来控制CSS属性时，是驼峰式写法，即：去掉短横线，除第一个单词全部小写外，其余单词的首字母大写。
  //虽然代码冗杂还是做出来了效果 :(
  function movieswitch(x, y) {

      movienav.children[nowmovienav].children[0].style.color = "#595959"
      movienav.children[nowmovienav].children[0].style.borderBottom = "none";
      document.getElementById(nowmoviepart).style.display = "none";
      nowmoviepart = x;
      nowmovienav = y;
      document.getElementById(nowmoviepart).style.display = "block";
      movienav.children[nowmovienav].children[0].style.color = "rgb(43, 149, 255)"
      movienav.children[nowmovienav].children[0].style.borderBottom = "3px solid rgb(43, 149, 255)";
  }
  movieswitch(nowmoviepart, nowmovienav);