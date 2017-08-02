<template>
	<div class="left-sidebar">
        <div class="left-sidebar-header">
            <div class="left-sidebar-title">Navigation</div>
            <div class="left-sidebar-toggle c-hamburger c-hamburger--htla hidden-xs" data-toggle-class="left-sidebar-collapsed" data-target="html">
                <span></span>
            </div>
        </div>
        <div id="left-nav" class="nano">
            <div class="nano-content">
                <nav>
                    <ul class="nav" id="main-nav">
                        <li class="has-child-item open-item active-item">
                            <a><i class="fa fa-cubes" aria-hidden="true"></i><span>用户管理</span></a>
                            <ul class="nav child-nav level-1">
                                <li><a href="ui-elements_panels.html">增加用户</a></li>
                                <li class="active-item"><a href="ui-elements_accordions.html">查询用户</a></li>
                                <li><a href="ui-elements_tabs.html">修改用户</a></li>
                            </ul>
                        </li>
                        <li class="has-child-item close-item">
                            <a><i class="fa fa-table" aria-hidden="true"></i><span>群组管理</span></a>
                            <ul class="nav child-nav level-1">
                                <li><a href="tables_basic.html">增加群组</a></li>
                                <li><a href="tables_data-tables.html">群组列表</a></li>
                                <li><a href="tables_responsive.html">修改群组</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>

	export default {
		
		data() {
			return {
				input: "dagfs"
			}
		},
		mounted: function () {
			//调用组件的代码只有在这里才能生效
			function btnStartSpinning(e){"use strict";e.hasClass("btn-loading")&&e.prop("disabled",!0).addClass("btn-spinning").append('<i class="fa fa-spinner fa-spin btn-spin" aria-hidden="true"></i>')}function btnStopSpinning(e){"use strict";e.hasClass("btn-spinning")&&e.prop("disabled",!1).removeClass("btn-spinning").find("i.btn-spin").remove()}(function(e){"use strict";e(document).on("click",function(n){e("#notice-headerbox").find(n.target).length||e("#notice-headerbox .notice.open").removeClass("open").children(".dropdown-box").slideUp(200),e("#user-headerbox").find(n.target).length||e("#user-headerbox.open").removeClass("open").children(".user-options").slideUp(400),e("#search-headerbox").find(n.target).length||e("#search").is(":visible")&&e("#search").slideToggle()})}).apply(this,[jQuery]),function(e){"use strict";var n=function(n){var s=n.attr("data-target"),t=n.attr("data-toggle-class");n.on("click.toggleClass.fireEvent",function(n){n.preventDefault(),e(s).toggleClass(t)})};e(function(){e("[data-toggle-class][data-target]").each(function(){n(e(this))})})}.apply(this,[jQuery]),function(e){"use strict";function n(n){n.children("ul.child-nav").slideDown(500,function(){e(this).css("display","")}),n.addClass("open-item").removeClass("close-item")}function s(n){console.log("close item"),n.children("ul.child-nav").slideUp(300,function(){e(this).css("display",""),n.addClass("close-item").removeClass("open-item")})}var t=e("#main-nav");t.on("click","li.close-item",function(t){t.stopPropagation();var i=e(this);n(i),i.siblings("li.open-item").each(function(){s(e(this))})}),t.on("click","li.open-item",function(n){n.stopPropagation(),s(e(this))}),t.on("click","li.active-item",function(e){e.stopPropagation()})}.apply(this,[jQuery]),function(e){"use strict";e("#user-headerbox").on("click",function(){var n=e(this).children(".user-options");e(this).toggleClass("open"),e(this).hasClass("open")?n.slideDown(400):n.slideUp(400)})}.apply(this,[jQuery]),function(e){"use strict";function n(e){e.children(".dropdown-box").slideDown(400)}function s(e){e.children(".dropdown-box").slideUp(200)}function t(n){n.siblings(".notice.open").each(function(){s(e(this)),e(this).removeClass("open")})}e("#notice-headerbox .notice i").on("click",function(){var i=e(this).parent();i.toggleClass("open"),i.hasClass("open")?(t(i),n(i)):s(i)})}.apply(this,[jQuery]),function(e){"use strict";e("#search-icon").on("click",function(){e("#search").slideToggle()})}.apply(this,[jQuery]),function(e){"use strict";e(".panel").on("click",".toggle-panel.panel-expand",function(){var n=e(this).closest(".panel");n.children(".panel-content, .panel-footer").slideUp(400),e(this).addClass("panel-collapse").removeClass("panel-expand")}),e(".panel").on("click",".toggle-panel.panel-collapse",function(){var n=e(this).closest(".panel");n.children(".panel-content, .panel-footer").slideDown(400),e(this).addClass("panel-expand").removeClass("panel-collapse")}),e(".panel").on("click",".remove-panel",function(){var n=e(this).closest(".panel"),s=n.parent();s.is('[class*="col-"]')&&1==s.children().length?s.fadeOut(500,function(){s.remove()}):n.fadeOut(300,function(){n.remove()})})}.apply(this,[jQuery]),$(function(){"use strict";var e=$(".scroll-to-top");$(window).on("scroll",function(){$(this).scrollTop()>100?e.fadeIn():e.fadeOut()}),e.on("click",function(){return $("html, body").animate({scrollTop:0},600),!1})}),function(e){"use strict";function n(){t.addClass("fixed").removeClass("scroll"),a.prop("checked",!0)}function s(){t.addClass("scroll").addClass("scroll-left-sidebar").addClass("scroll-content-header").removeClass("fixed"),a.removeAttr("checked")}var t=e("html"),i=e("#left-sidebar-collapsed"),o=e("#content-header-fixed"),l=e("#left-sidebar-fixed"),a=e("#header-fixed");a.on("change",function(){a.is(":checked")?n():(s(),l.removeAttr("checked"),o.removeAttr("checked"))}),l.on("change",function(){l.is(":checked")?(n(),t.removeClass("scroll-left-sidebar")):t.addClass("scroll-left-sidebar")}),o.on("change",function(){o.is(":checked")?(n(),t.removeClass("scroll-content-header")):t.addClass("scroll-content-header")}),i.on("change",function(){i.is(":checked")?t.addClass("left-sidebar-collapsed"):t.removeClass("left-sidebar-collapsed")}),e(".left-sidebar-toggle").on("click",function(){i.is(":checked")?i.removeAttr("checked"):i.prop("checked",!0)})}.apply(this,[jQuery]);
		}
	}

</script>

<style>
.left-sidebar {
  display: block;
  height: 100%;
  float: left;
  position: relative;
  width: 220px;
  z-index: 1030;
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR*/
/*================================================*/
.left-sidebar {
  background: #202020;
  color: #ffffff;
  -webkit-transition-property: width;
  -moz-transition-property: width;
  transition-property: width;
  -webkit-transition-duration: 0.25s;
  -moz-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-delay: 0;
  -moz-transition-delay: 0;
  transition-delay: 0;
}
.left-sidebar .nano {
  background: #202020;
}
.left-sidebar .left-sidebar-header {
  position: relative;
  height: 40px;
  background: #151515;
}
.left-sidebar .left-sidebar-header .left-sidebar-title {
  padding: 10px;
  font-size: 10px;
  color: #006ac3;
  font-weight: bold;
  height: 40px;
  margin-right: 60px;
  -webkit-transition-property: margin;
  -moz-transition-property: margin;
  transition-property: margin;
  -webkit-transition-duration: 0.25s;
  -moz-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 40px;
  background-color: #000000;
  text-align: center;
  cursor: pointer;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle i {
  font-size: 20px;
  line-height: 40px;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle i:hover {
  color: #cccccc;
}

@media only screen and (max-width: 768px) {
  .left-sidebar .left-sidebar-header {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  html.left-sidebar-collapsed .left-sidebar-title {
    opacity: 0;
  }
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* COMPONENT - HAMBURGER ICONS */
/*================================================*/
.c-hamburger {
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 60px;
  height: 40px;
  font-size: 0;
  text-indent: -9999px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  transition: background 0.5s;
}

.c-hamburger:focus {
  outline: none;
}

.c-hamburger span {
  display: block;
  position: absolute;
  top: 18.5px;
  left: 18px;
  right: 18px;
  height: 3px;
  background: white;
}

.c-hamburger span::before,
.c-hamburger span::after {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  content: "";
}

.c-hamburger--htla span {
  transition: transform 0.5s;
}

.c-hamburger--htla span::before {
  transform-origin: top right;
  transition: transform 0.5s, width 0.5s, top 0.5s;
}

.c-hamburger--htla span::after {
  transform-origin: bottom right;
  transition: transform 0.5s, width 0.5s, bottom 0.5s;
}

.c-hamburger--htla span {
  transform: rotate(180deg);
}

.c-hamburger--htla span::before,
.c-hamburger--htla span::after {
  width: 50%;
}

.c-hamburger--htla span::before {
  top: 0;
  transform: translateX(15px) translateY(1.5px) rotate(45deg);
}

.c-hamburger--htla span::after {
  bottom: 0;
  transform: translateX(15px) translateY(-1.5px) rotate(-45deg);
}

/* active state, i.e. menu open */
html.left-sidebar-collapsed .c-hamburger--htla span {
  transform: none;
}
html.left-sidebar-collapsed .c-hamburger--htla span::before,
html.left-sidebar-collapsed .c-hamburger--htla span::after {
  width: 100%;
}
html.left-sidebar-collapsed .c-hamburger--htla span::before {
  top: 7px;
  transform: none;
}
html.left-sidebar-collapsed .c-hamburger--htla span::after {
  top: -7px;
  transform: none;
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* STYLE - SCROLL*/
/*================================================*/
@media only screen and (min-width: 768px) {
  html.scroll .left-sidebar,
  html.scroll-left-sidebar .left-sidebar {
    position: absolute;
  }
  html.scroll .left-sidebar .nano,
  html.scroll-left-sidebar .left-sidebar .nano {
    position: static;
    overflow: visible;
  }
  html.scroll .left-sidebar .nano .nano-content,
  html.scroll-left-sidebar .left-sidebar .nano .nano-content {
    position: static;
    overflow: visible;
    margin-right: 0 !important;
    outline: none;
  }
  html.scroll .left-sidebar .nano .nano-pane,
  html.scroll-left-sidebar .left-sidebar .nano .nano-pane {
    display: none !important;
  }

  html.scroll .content,
  html.scroll-content-header .content {
    margin-top: 0px;
  }
  html.scroll .content-header,
  html.scroll-content-header .content-header {
    position: initial;
    margin: -30px -30px 30px -30px;
  }
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR NAVIGATION*/
/*================================================*/
ul#main-nav {
  margin-right: 4px;
}
ul#main-nav > li {
  border-bottom: 1px solid #2a2a2a;
}
ul#main-nav > li.active-item > a {
  box-shadow: 2px -1px 0 #006ac3 inset !important;
  border-bottom-left-radius: 5px;
  background: #131313;
  color: #ffffff !important;
}
ul#main-nav > li.open-item > a {
  box-shadow: 0px -1px 0 #006ac3 inset;
  border-bottom-left-radius: 5px;
}
ul#main-nav > li.open-item > a > i {
  color: #006ac3;
}
ul#main-nav li a {
  padding: 12px 20px;
  font-size: 13px;
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
ul#main-nav li a:hover, ul#main-nav li a:focus {
  background: #131313;
}
ul#main-nav li a > i {
  font-size: 18px;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
}
ul#main-nav li span {
  vertical-align: middle;
}
ul#main-nav li.has-child-item {
  position: relative;
}
ul#main-nav li.has-child-item > a:after {
  font-family: 'FontAwesome';
  font-size: 10px;
  font-size: 0.76923rem;
  content: '\f067';
  color: #ffffff;
  position: absolute;
  padding: 14px;
  right: 0;
  top: 0;
}
ul#main-nav li.has-child-item.open-item > ul.child-nav {
  display: block;
}
ul#main-nav li.has-child-item.open-item > a:after {
  content: '\f068';
}
ul#main-nav ul.child-nav {
  border-radius: 5px;
  display: none;
}
ul#main-nav ul.child-nav.level-1 {
  background: #161616;
  box-shadow: 0px -5px 5px -3px rgba(0, 0, 0, 0.6) inset;
}
ul#main-nav ul.child-nav.level-1 li a {
  padding: 10px 50px;
}
ul#main-nav ul.child-nav.level-1 li a:hover, ul#main-nav ul.child-nav.level-1 li a:focus {
  background: #0c0c0c;
}
ul#main-nav ul.child-nav.level-2 {
  background: #0e0e0e;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4) inset;
}
ul#main-nav ul.child-nav.level-2 li a {
  padding: 8px 70px;
}
ul#main-nav ul.child-nav.level-3 {
  background: #070707;
  box-shadow: 0px 0px 0px 5px #000 inset;
}
ul#main-nav ul.child-nav.level-3 li a {
  padding: 6px 90px;
}

@media only screen and (min-width: 768px) {
  html.left-sidebar-collapsed .left-sidebar #main-nav > li.open-item > a {
    box-shadow: none;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav > li > a {
    overflow: hidden;
    text-overflow: clip;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav > li > a span {
    visibility: hidden;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav li.has-child-item a:after {
    display: none;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav li.has-child-item ul.child-nav {
    display: none;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover {
    width: 220px;
    min-height: 100vh;
    background: rgba(32, 32, 32, 0.1);
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover .nano-content {
    background: rgba(32, 32, 32, 0.9);
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li.open-item > a {
    box-shadow: 0px -1px 0 #004E90 inset;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li > a {
    overflow: visible;
    text-overflow: initial;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li > a span {
    visibility: visible;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav li.has-child-item a:after {
    display: block;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav li.has-child-item.open-item > ul.child-nav {
    display: block;
  }
}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR SUBNAVIGATION */
/*================================================*/
ul#main-nav ul.child-nav li a:before {
  position: absolute;
  content: "";
  left: 28px;
  top: 0px;
  bottom: 0px;
  border-left: 1px solid #2f2f2f;
}
ul#main-nav ul.child-nav li:hover > a:before {
  border-color: #006ac3;
}
ul#main-nav ul.child-nav li.active-item > a:before {
  border-color: #004E90 !important;
}
ul#main-nav ul.child-nav li.open-item:before {
  position: absolute;
  content: "";
  left: 28px;
  top: 42px;
  bottom: 0px;
  border-top: 1px solid #006ac3;
  width: 23px;
}
ul#main-nav ul.child-nav li.open-item > a:before {
  border-color: #006ac3;
}
ul#main-nav ul.child-nav li.has-child-item > a:after {
  padding: 10px;
}
ul#main-nav ul.child-nav li .level-2 li.open-item:before {
  left: 50px;
  top: 38px;
  width: 21px;
}
ul#main-nav ul.child-nav li .level-2 li a:before {
  left: 50px;
}
ul#main-nav ul.child-nav li .level-2 li.has-child-item > a:after {
  padding: 8px;
}
ul#main-nav ul.child-nav li .level-3 li a:before {
  left: 70px;
}
</style>