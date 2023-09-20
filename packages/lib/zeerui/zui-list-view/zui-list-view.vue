<template>
	<view class="zui-list-view zui-view-class" :class="{'zui-radius':radius && radius!='0'}"
		:style="{backgroundColor:backgroundColor,marginTop:marginTop,borderRadius:radius+'rpx'}">
		<view class="zui-list-title" :style="{color:color,fontSize:size+'rpx',lineHeight:30+'rpx'}" v-if="title">
			{{title}}
		</view>
		<view class="zui-list-content" :class="[unlined?'zui-border-'+unlined:'']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "zuiListView",
		props: {
			title: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#666'
			},
			//rpx
			size: {
				type: Number,
				default: 30
			},
			backgroundColor: {
				type: String,
				default: 'transparent'
			},
			unlined: {
				type: String,
				default: '' //top,bottom,all
			},
			marginTop: {
				type: String,
				default: '0'
			},
			//圆角值
			radius: {
				type: [Number, String],
				default: 0
			}
		}
	}
</script>

<style scoped>
	.zui-list-title {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.zui-list-content {
		width: 100%;
		position: relative;
	}

	.zui-list-content::before {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 0;
		z-index: 2;
		pointer-events: none;
	}

	.zui-list-content::after {
		content: '';
		width: 100%;
		position: absolute;
		border-bottom: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.zui-border-top::before {
		border-top: 0;
	}

	.zui-border-bottom::after {
		border-bottom: 0;
	}

	.zui-border-all::after {
		border-bottom: 0;
	}

	.zui-border-all::before {
		border-top: 0;
	}

	.zui-radius {
		overflow: hidden;
	}
</style>