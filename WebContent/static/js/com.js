/**
 * common js for all page
 */

// nav bar html template
var util={};
util.topnav=function(active_menu){
	// 导航栏 html 
	var html = (function () {/*
	<!-- nav-->
	<div class="nav navbar-fixed-top">
		<div class="">
			<div class="col-sm-1 col-xs-1">
				<h1 style="margin: 11px 0">
					<a href="./static/img/index.html" style="color: white">logo</a>
				</h1>

			</div>
			<div class="col-sm-11 col-xs-11 menus">
				<ul>
					<li style="width: 30px;"></li>
					<li class="menue  business"><a target="_blank" href="">
							全国 <span class="fa fa-angle-down"></span>
						</a>
						<div class="business_menue"></div></li>
					<li class="menue "><a href="./index.html" >首页</a></li>
					<li class="menue"><a href="./find_activity.html" >找活动</a></li>
					<li class="menue"><a href="./activity_inprocess.html" >活动进行时</a></li>
					<li class="menue"><a href="./viewpoint_list.html" >观点</a></li>
					<li class="menue"><a href="./search_activity.html" >搜索活动</a></li>

					<li class="login" ><a href="./login.html" rel="nofollow">
							<span class="Login" style="font-size: 14px">登录</span>

						</a>
					</li>
					<li class="postevent" ><a href="./post_activity.html" >免费发布活动</a></li>
					
				</ul>
			</div>
		</div>
	</div>        
		*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
	initNavCityMenu();
}
//util.topnav();
function initNavCityMenu(){
	var nav_city_menu = new Array("beijing", "北京", "shanghai", "上海", "guangzhou",
			"广州", "shenzhen", "深圳", "chengdu", "成都", "xian", "西安", "xiamen", "厦门",
			"nanjing", "南京", "wuhan", "武汉", "chongqing", "重庆", "tianjin", "天津",
			"changsha", "长沙", "gengduo", "更多...");
	var nav_city_menu_html="<div class='col-sm-12 col-xs-12 city'>选择城市</div>";
	for(i=0;i<nav_city_menu.length;i=i+2){
		if(nav_city_menu[i]=="gengduo"){
			nav_city_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='./all_citys.html'>"+nav_city_menu[i+1]+"</a></div>"
		}else
		nav_city_menu_html+="<div class='col-sm-2 col-xs-2 '><a  href='#'>"+nav_city_menu[i+1]+"</a></div>"
	}
	/*$(".business_menue").html(nav_city_menu_html)
	$(".business").hover(function() {
		$(".business_menue").fadeIn(10)
	}, function() {
		$(".business_menue").fadeOut(10)
	});*/
	document.querySelector(".business_menue").innerHTML=nav_city_menu_html;
}

//tooter html template two
util.footerhtml2=function(){
	var html=(function(){/*
		<footer class="container-fluid">
    <div class="row">
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>关于我们</h4></li>
          <li><a href="#" rel="nofollow">公司简介</a></li>
          <li><a href="#" rel="nofollow">媒体报道</a></li>
          <li><a href="#" rel="nofollow">微信公众号</a></li>
          <li><a href="#" rel="nofollow">APP下载</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>更多服务</h4></li>
          <li><a href="#" target="_blank" rel="nofollow">媒体合作</a></li>
          <li><a href="#" target="_blank" rel="nofollow">商务合作</a></li>
          <li><a href="#" target="_blank" rel="nofollow">友情链接</a></li>
          <li><a href="#" target="_blank" rel="nofollow">在线留言</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-xs-4">
        <ul>
          <li class="title"><h4>联系我们</h4></li>
          <li><span class="glyphicon glyphicon-phone"></span> (+86)186-0000-0000</li>
          <li><span class="glyphicon glyphicon-map-marker"></span> 北京市海淀区中关村软件园</li> 
        </ul>
      </div>
    </div>

    </footer>
    <div class="row" style="background-color: gray;">
    <p class="text-center">&copy; 2016~2017, Co. Ltd 备案相关信息.</p>
  </div>
	*/
	}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}
util.footerhtml=function(){
	var html =(function () {/*
	<div class="footer">
		<div class="container">
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title">关于我们</li>
					<li><a href="http://www.activity.com/contactus/" rel="nofollow">关于Activity</a></li>
				</ul>
			</div>
			<div class="col-sm-2 col-xs-2 footer1">
				<ul>
					<li class="title">更多服务</li>
					<li><a href="http://www.activity.com/" rel="nofollow">更多服务</a></li>
				</ul>
			</div>
			<div class="col-sm-4 col-xs-4 footer1 contact">
				<ul>
					<li class="title">联系我们</li>
					<li style="line-height: 17px; padding-top: 10px"><i class="fa fa-phone "></i><span
						style="color: #A0A8B7; font-size: 16px; padding: 0px">888-666666</span></li>
				</ul>
			</div>
	
			<div class="introduce">
				<p>
					<font style="color: black">网站介绍:</font><br> 网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍网站介绍
				</p>
	
				<p>
					<font style="color: black">友情链接：</font><br>
					<a href="http://www.baidu.com" target="_blank">百度</a>
				</p>
				<hr style="height: 1px;background-color: #FCAE9D;">
				<p class="text-center">
					CopyRight
					<a rel="nofollow" target="_blank" href="./index.html">信息发布站点</a>
					activity.com
				</p>
			</div>
		</div>
	</div>*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	document.write(html);
}