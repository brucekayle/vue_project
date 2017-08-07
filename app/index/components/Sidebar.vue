<template>
	<div class="left-sidebar">
        <div class="left-sidebar-header">
            <div class="left-sidebar-title">Navigation</div>
            <div id="left-sidebar-toggle" class="left-sidebar-toggle c-hamburger c-hamburger--htla hidden-xs" @click="leftSidebarCollapsed">
                <span></span>
            </div>
        </div>
        <div id="left-nav" class="nano">
            <div class="nano-content">
                <nav>
                    <ul class="nav" id="main-nav">
                        <li class="has-child-item open-item active-item">
                            <a><i class="fa fa-user-circle" aria-hidden="true"></i><span>用户管理</span></a>
                            <ul class="nav child-nav level-1">
                                <li v-on:click="updateBreadcurmbs(0,'fa fa-user-circle','用户管理','增加用户')" :class="{'active-item': isActive[0]}"><router-link to="/home/user/add">增加用户</router-link></li>
                                <li v-on:click="updateBreadcurmbs(1,'fa fa-user-circle','用户管理','查询用户')" :class="{'active-item': isActive[1]}"><router-link to="/home/user/list">查询用户</router-link></li>
                                <li v-on:click="updateBreadcurmbs(2,'fa fa-user-circle','用户管理','修改用户')" :class="{'active-item': isActive[2]}"><router-link to="/home/user/modify">修改用户</router-link></li>
                            </ul>
                        </li>
                        <li class="has-child-item close-item">
                            <a><i class="fa fa-group" aria-hidden="true"></i><span>群组管理</span></a>
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
  import '../utils/nano-scroller/nano-scroller'

  export default {

		
		data() {
			return {
                isActive : [false,false,false],
                fullWidth: document.documentElement.clientWidth
			}
		},
		mounted: function () {
			//调用组件的代码只有在这里才能生效
            window.onresize = this.handleResize;
            (function(e){
                function n(n){
                    n.children("ul.child-nav").slideDown(500,function(){
                        e(this).css("display","")
                    }),
                    n.addClass("open-item").removeClass("close-item")
                }
                function s(n){
                    console.log("close item"),
                    n.children("ul.child-nav").slideUp(300,function(){
                        e(this).css("display",""),
                        n.addClass("close-item").removeClass("open-item")
                    })
                }
                var t=e("#main-nav");
                t.on("click","li.close-item",function(t){
                    t.stopPropagation();
                    var i=e(this);n(i),
                    i.siblings("li.open-item").each(function(){s(e(this))})
                }),
                t.on("click","li.open-item",function(n){
                    n.stopPropagation(),
                    s(e(this))
                }),
                t.on("click","li",function(e){
                    e.stopPropagation()
                })
            }).apply(this,[jQuery]),
            function(e){
                e("#user-headerbox").on("click",function(){
                    var n=e(this).children(".user-options");
                    e(this).toggleClass("open"),
                    e(this).hasClass("open")?n.slideDown(400):n.slideUp(400)
                })
            }.apply(this,[jQuery]),
            function(e){
                function n(e){
                    e.children(".dropdown-box").slideDown(400)
                }
                function s(e){
                    e.children(".dropdown-box").slideUp(200)
                }
                function t(n){
                    n.siblings(".notice.open").each(function(){s(e(this)),e(this).removeClass("open")})
                }
                e("#notice-headerbox .notice i").on("click",function(){
                    var i=e(this).parent();
                    i.toggleClass("open"),
                    i.hasClass("open")?(t(i),n(i)):s(i)
                })
            }.apply(this,[jQuery]),
            function(e){
                e("#search-icon").on("click",function(){
                    e("#search").slideToggle()
                })
            }.apply(this,[jQuery]),
            function(e){
                e(".panel").on("click",".toggle-panel.panel-expand",function(){
                    var n=e(this).closest(".panel");
                    n.children(".panel-content, .panel-footer").slideUp(400),
                    e(this).addClass("panel-collapse").removeClass("panel-expand")
                }),
                e(".panel").on("click",".toggle-panel.panel-collapse",function(){
                    var n=e(this).closest(".panel");
                    n.children(".panel-content, .panel-footer").slideDown(400),
                    e(this).addClass("panel-expand").removeClass("panel-collapse")
                }),
                e(".panel").on("click",".remove-panel",function(){
                    var n=e(this).closest(".panel"),
                    s=n.parent();
                    s.is('[class*="col-"]')&&1==s.children().length?s.fadeOut(500,function(){s.remove()}):n.fadeOut(300,function(){n.remove()})
                })
            }.apply(this,[jQuery]),
            $(function(){
                var e=$(".scroll-to-top");
                $(window).on("scroll",function(){
                    $(this).scrollTop()>100?e.fadeIn():e.fadeOut()
                }),
                e.on("click",function(){
                    return $("html, body").animate({scrollTop:0},600),!1
                })
            }),
            function(e){
                function n(){
                    t.addClass("fixed").removeClass("scroll"),
                    a.prop("checked",!0)
                }
                function s(){
                    t.addClass("scroll").addClass("scroll-left-sidebar").addClass("scroll-content-header").removeClass("fixed"),
                    a.removeAttr("checked")
                }
                var t=e("html"),
                i=e("#left-sidebar-collapsed"),
                o=e("#content-header-fixed"),
                l=e("#left-sidebar-fixed"),
                a=e("#header-fixed");
                a.on("change",function(){
                    a.is(":checked")?n():(s(),l.removeAttr("checked"),o.removeAttr("checked"))
                }),
                l.on("change",function(){
                    l.is(":checked")?(n(),t.removeClass("scroll-left-sidebar")):t.addClass("scroll-left-sidebar")
                }),
                o.on("change",function(){
                    o.is(":checked")?(n(),t.removeClass("scroll-content-header")):t.addClass("scroll-content-header")
                }),
                i.on("change",function(){
                    i.is(":checked")?t.addClass("left-sidebar-collapsed"):t.removeClass("left-sidebar-collapsed")
                }),
                e(".left-sidebar-toggle").on("click",function(){
                    i.is(":checked")?i.removeAttr("checked"):i.prop("checked",!0)
                })
            }.apply(this,[jQuery]);


            (function(o){
                o(".nano").nanoScroller()
            }).apply(this,[jQuery]),
            $(function(){
                $('[data-toggle="tooltip"]').tooltip({container:"body"}),
                $('[data-toggle="popover"]').popover({container:"body"})
            });
        },
    methods: {  
        updateBreadcurmbs (index, icon, one, two) {

            if(this.fullWidth<768){
                this.$store.commit('switchLeftSidebar', {status: 'left-sidebar-collapsed'})
            }

            var length = this.isActive.length;
            for(var i = 0;i<length;i++){
              this.$set(this.isActive, i, false);
            }
            //数组改变无法动态更新view，可用下面方法解决
            this.$set(this.isActive, index, true);
            this.$store.commit('updateBreadcrumbs', {icon: icon, one: one, two: two})
        },
        leftSidebarCollapsed () {
            this.$store.commit('switchLeftSidebar', {status: 'left-sidebar-collapsed'})
        },
        handleResize (e) {
            this.fullWidth = document.documentElement.clientWidth
        }
	}
}
</script>
