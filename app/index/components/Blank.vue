<template>
	<div>
		<button>修改{{account}}</button>
	</div>
</template>


<script>
	export default {
		data () {
			return {
				account: ''
			}
		},
		mounted: function() {
	        var path = this.$route.path.split("/")
			console.log(path)
	        this.account = path[4] 
	    }
	}


</script>