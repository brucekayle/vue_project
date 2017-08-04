<template>
	<div class="accounts sign-in">
	    <div class="page-body animated slideInDown">
        <div class="logo">
            <img alt="logo" src="images/logo-dark.png" />
        </div>
        <div class="box">
            <div class="panel mb-none">
                <div class="panel-content bg-scale-0">
                    <form>
                        <div class="form-group mt-md">
                            <span class="input-with-icon">
                                    <input type="email" class="form-control" id="email" placeholder="Email">
                                    <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                        <div class="form-group">
                                <span class="input-with-icon">
                                        <input type="password" class="form-control" id="password" placeholder="Password">
                                        <i class="fa fa-key"></i>
                                    </span>
                        </div>
                        <div class="form-group">
                            <div class="checkbox-custom checkbox-primary">
                                <input type="checkbox" id="remember-me" value="option1" checked>
                                <label for="remember-me">Remember me</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <router-link to="/home" class="btn btn-primary btn-block">Sign in</router-link>
                        </div>
                        <div class="form-group text-center">
                            <a href="#" v-on:click="">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>



</script>
