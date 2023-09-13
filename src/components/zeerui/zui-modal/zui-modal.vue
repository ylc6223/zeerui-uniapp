<template>
	<view class="zui-modal__container" :class="[show ? 'zui-modal-show' : '']" :style="{zIndex:zIndex}"
		@touchmove.stop.prevent>
		<view class="zui-modal-box"
			:style="{ width: width, padding: padding, borderRadius: radius, backgroundColor: backgroundColor,zIndex:zIndex+1 }"
			:class="[fadeIn || show ? 'zui-modal-normal' : 'zui-modal-scale', show ? 'zui-modal-show' : '']">
			<view v-if="!custom">
				<view class="zui-modal-title" v-if="title">{{ title }}</view>
				<view class="zui-modal-content" :class="[title ? '' : 'zui-mtop']"
					:style="{ color: color, fontSize: size + 'rpx' }">{{ content }}</view>
				<view class="zui-modalBtn-box" :class="[button.length != 2 ? 'zui-flex-column' : '']">
					<view v-for="(item, index) in button" :key="index" class="zui-modal-btn" :class="[
								button.length != 2 ? 'zui-btn-width' : '',
								button.length > 2 ? 'zui-mbtm' : '',
								shape == 'circle' ? 'zui-circle-btn' : ''
							]" :style="{background:getColor(item.type,true,item.plain),color:getTextColor(item.type,item.plain)}"
						@tap="handleClick(index)">
						{{ item.text || '确定' }}
						<view class="zui-modal__border" :class="[shape == 'circle' ? 'zui-circle-border' : '']"
							:style="{borderColor:getColor(item.type)}" v-if="item.plain"></view>
					</view>
				</view>
			</view>
			<view v-else>
				<slot></slot>
			</view>
		</view>
		<view v-if="isMask" class="zui-modal-mask" :class="[show ? 'zui-mask-show' : '']"
			:style="{zIndex:maskZIndex,background:maskColor}" @tap="handleClickCancel"></view>
	</view>
</template>

<script>
	export default {
		name: 'zuiModal',
		emits: ['click', 'cancel'],
		props: {
			//是否显示
			show: {
				type: Boolean,
				default: false
			},
			width: {
				type: String,
				default: '84%'
			},
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			padding: {
				type: String,
				default: '40rpx 64rpx'
			},
			radius: {
				type: String,
				default: '24rpx'
			},
			//标题
			title: {
				type: String,
				default: ''
			},
			//内容
			content: {
				type: String,
				default: ''
			},
			//内容字体颜色
			color: {
				type: String,
				default: '#999'
			},
			//内容字体大小 rpx
			size: {
				type: Number,
				default: 28
			},
			//形状 circle, square
			shape: {
				type: String,
				default: 'square'
			},
			button: {
				type: Array,
				default: function() {
					return [{
							text: '取消',
							type: 'red',
							plain: true //是否空心
						},
						{
							text: '确定',
							type: 'red',
							plain: false
						}
					];
				}
			},
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: true
			},
			//是否显示mask
			isMask: {
				type: Boolean,
				default: true
			},
			maskColor: {
				type: String,
				default: 'rgba(0, 0, 0, 0.6)'
			},
			//淡入效果，自定义弹框插入input输入框时传true
			fadeIn: {
				type: Boolean,
				default: false
			},
			//自定义弹窗内容
			custom: {
				type: Boolean,
				default: false
			},
			//容器z-index
			zIndex: {
				type: Number,
				default: 9997
			},
			//mask z-index
			maskZIndex: {
				type: Number,
				default: 9990
			}
		},
		data() {
			return {};
		},
		methods: {
			getColor(type, isBg, plain) {
				const global = uni && uni.$zui && uni.$zui.color;
				let color = {
					'primary': (global && global.primary) || '#5677fc',
					'green': (global && global.success) || '#07c160',
					'warning': (global && global.warning) || '#ff7900',
					'danger': (global && global.danger) || '#EB0909',
					'red': (global && global.danger) || '#EB0909',
					'pink': (global && global.pink) || '#f74d54',
					'white': isBg ? '#fff' : '#333',
					'gray': isBg ? '#ededed' : '#999'
				} [type || 'primary']
				if (isBg && plain) {
					color = 'transparent'
				}
				return color
			},
			getTextColor(type, plain) {
				const global = uni && uni.$zui && uni.$zui.color;
				let color = {
					'primary': (global && global.primary) || '#5677fc',
					'green': (global && global.success) || '#07c160',
					'warning': (global && global.warning) || '#ff7900',
					'danger': (global && global.danger) || '#EB0909',
					'red': (global && global.danger) || '#EB0909',
					'pink': (global && global.pink) || '#f74d54',
					'white': '#333',
					'gray': '#999'
				} [type || 'primary']
				if (!plain && type !== 'white' && type !== 'gray') {
					color = '#fff'
				}
				return color
			},
			handleClick(index) {
				if (!this.show) return;
				this.$emit('click', {
					index: Number(index)
				});
			},
			handleClickCancel() {
				if (!this.maskClosable) return;
				this.$emit('cancel');
			}
		}
	};
</script>

<style scoped>
	.zui-modal__container {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
	}

	.zui-modal-box {
		position: relative;
		opacity: 0;
		visibility: hidden;
		box-sizing: border-box;
		transition: all 0.3s ease-in-out;
	}

	.zui-modal-scale {
		transform: scale(0);
	}

	.zui-modal-normal {
		transform: scale(1);
	}

	.zui-modal-show {
		opacity: 1;
		visibility: visible;
	}

	.zui-modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.zui-mask-show {
		visibility: visible;
		opacity: 1;
	}

	.zui-modal-title {
		text-align: center;
		font-size: 34rpx;
		color: #333;
		padding-top: 20rpx;
		font-weight: bold;
	}

	.zui-modal-content {
		text-align: center;
		color: #999;
		font-size: 28rpx;
		padding-top: 20rpx;
		padding-bottom: 60rpx;
	}

	.zui-mtop {
		margin-top: 30rpx;
	}

	.zui-mbtm {
		margin-bottom: 30rpx;
	}

	.zui-modalBtn-box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.zui-flex-column {
		flex-direction: column;
	}

	.zui-modal-btn {
		width: 46%;
		height: 68rpx;
		line-height: 68rpx;
		position: relative;
		border-radius: 10rpx;
		font-size: 26rpx;
		overflow: visible;
		margin-left: 0;
		margin-right: 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		border-width: 0;
	}

	.zui-modal-btn:active::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.15);
		pointer-events: none;
	}

	.zui-modal-btn::after {
		border-radius: 10rpx;
	}

	.zui-modal__border {
		position: absolute;
		width: 200%;
		height: 200%;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		border: 1px solid;
		box-sizing: border-box;
		left: 0;
		top: 0;
		z-index: 2;
		border-radius: 20rpx;
		pointer-events: none;
	}

	.zui-btn-width {
		width: 80% !important;
	}

	.zui-circle-btn {
		border-radius: 40rpx !important;
	}

	.zui-circle-btn::after {
		border-radius: 40rpx !important;
	}

	.zui-circle-border {
		border-radius: 80rpx !important;
	}
</style>