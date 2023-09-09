<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "./common/app.css";
@import "./common/variable.scss";
@import "./common/global.scss";
@tailwind base;
@tailwind components;
@tailwind utilities;
/* 使用 scss */
/* @import 'tailwindcss/base'; */
/* @import 'tailwindcss/utilities'; */
/* @import 'tailwindcss/components'; */
</style>
