<template>
    <div class="page-header">
        <div class="leftside-header">
            <div class="" style="margin:15px">
                <span style="font-size:20px">卓智达企业管理平台</span>
                <a href="index.html" class="on-click">
                    <!--<img alt="logo" src="images/header-logo.png" />-->
                </a>
            </div>
            <div id="menu-toggle" class="visible-xs toggle-left-sidebar" @click="leftSidebarOpen">
                <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
            </div>
        </div>
        <div class="rightside-header">
            <div class="header-section" id="user-headerbox">
                <div class="user-header-wrap">
                    <div class="user-photo">
                        <!--<img src="images/user-avatar.jpg" alt="Jane Doe" />-->
                    </div>
                    <div class="user-info">
                        <span class="user-name">Bruce Kayle</span>
                        <span class="user-profile">Admin</span>
                    </div>
                    <i class="fa fa-plus icon-open" aria-hidden="true"></i>
                    <i class="fa fa-minus icon-close" aria-hidden="true"></i>
                </div>
                <div class="user-options dropdown-box">
                    <div class="drop-content basic">
                        <ul>
                            <li> <a href="pages_user-profile.html"><i class="fa fa-user" aria-hidden="true"></i> Profile</a></li>
                            <li> <a href="pages_lock-screen.html"><i class="fa fa-lock" aria-hidden="true"></i> Lock Screen</a></li>
                            <li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i> Configurations</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-separator"></div>
            <div class="header-section">
                <router-link to="/"><i class="fa fa-sign-out log-out" aria-hidden="true"></i></router-link></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hello World!'
            }
        },
        methods: {
            leftSidebarOpen () {
                this.$store.commit('switchLeftSidebar', {status: 'left-sidebar-open'})
            }
        }
    }
</script>