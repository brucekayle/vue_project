<template>
	<div id="el">
	</div>
</template>
<template>
	<select></select>
</template>
<script>
	export default {
		props: ['options', 'value'],
		mounted: function () {
		    var vm = this
		    $(this.$el)
		      // init select2
		      .select2({ data: this.options,allowClear:true })
		      .val(this.value)
		      .trigger('change')
		      // emit event on change.
		      // 不能监听change事件，否则陷入死循环（多选情况下）
		      .on('select2:select', function () {
		        vm.$emit('input',$(this).val())
		      }).on('select2:unselect', function () {
		        vm.$emit('input',$(this).val())
		      })
		},
		watch: {
		    value: function (value) {
		      // update value
		      $(this.$el).val(value).trigger('change');
		    },
		    options: function (options) {
		      // update options
		      $(this.$el).select2({ data: options })
		    }
		},
		destroyed: function () {
		    $(this.$el).off().select2('destroy')
		}
	}
</script>