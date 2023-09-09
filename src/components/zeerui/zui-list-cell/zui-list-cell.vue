<template>
	<view class="zui-list-class zui-list-cell" :class="[
			radius && radius!='0' ? 'zui-radius' : '',
			hover ? 'zui-cell-hover' : ''
		]" :style="{ backgroundColor: backgroundColor, fontSize: getSize + 'rpx', color: getColor, padding: getPadding,borderRadius:radius+'rpx',marginTop:marginTop+'rpx',marginBottom:marginBottom+'rpx' }"
		@tap="handleClick">
		<slot></slot>
		<view class="zui-cell__line"
			:style="{borderBottomColor:getLineColor,left:getLineLeft+'rpx',right:lineRight+'rpx'}" v-if="!unlined">
		</view>
		<view class="zui-cell__arrow" :style="{borderColor:getArrowColor,right:arrowRight+'rpx'}" v-if="arrow"></view>
	</view>
</template>

<script>
	export default {
		name: 'zuiListCell',
		emits: ['click'],
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true
		},
		// #endif
		props: {
			//是否有箭头
			arrow: {
				type: Boolean,
				default: false
			},
			//V2.3.0+
			arrowColor: {
				type: String,
				default: ''
			},
			//是否有点击效果
			hover: {
				type: Boolean,
				default: true
			},
			//隐藏线条
			unlined: {
				type: Boolean,
				default: false
			},
			//V2.3.0+
			lineColor: {
				type: String,
				default: ''
			},
			//线条左偏移距离
			lineLeft: {
				type: [Number, String],
				default: -1
			},
			//线条右偏移距离
			lineRight: {
				type: [Number, String],
				default: 0
			},
			padding: {
				type: String,
				default: ''
			},
			marginTop: {
				type: [Number, String],
				default: 0
			},
			marginBottom: {
				type: [Number, String],
				default: 0
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			//字体大小
			size: {
				type: Number,
				default: 0
			},
			//字体颜色
			color: {
				type: String,
				default: ''
			},
			//圆角值
			radius: {
				type: [Number, String],
				default: 0
			},
			//箭头偏移距离
			arrowRight: {
				type: [Number, String],
				default: 30
			},
			index: {
				type: Number,
				default: 0
			}
		},
		computed: {
			getArrowColor() {
				return this.arrowColor || (uni && uni.$zui && uni.$zui.zuiListCell.arrowColor) || '#c0c0c0';
			},
			getLineColor() {
				return this.lineColor || (uni && uni.$zui && uni.$zui.zuiListCell.lineColor) || '#eaeef1';
			},
			getLineLeft() {
				let left = this.lineLeft;
				if (left === -1) {
					left = (uni && uni.$zui && uni.$zui.zuiListCell.lineLeft);
				}
				return left === undefined || left === null ? 30 : left;
			},
			getPadding() {
				return this.padding || (uni && uni.$zui && uni.$zui.zuiListCell.padding) || '26rpx 30rpx';
			},
			getColor() {
				return this.color || (uni && uni.$zui && uni.$zui.zuiListCell.color) || '#333';
			},
			getSize() {
				return this.size || (uni && uni.$zui && uni.$zui.zuiListCell.size) || 28;
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			}
		}
	};
</script>

<style scoped>
	.zui-list-cell {
		position: relative;
		width: 100%;
		box-sizing: border-box;
	}

	.zui-radius {
		overflow: hidden;
	}

	.zui-cell-hover:active {
		background-color: rgba(0, 0, 0, 0.1) !important;
	}

	.zui-cell__line {
		position: absolute;
		border-bottom: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
		bottom: 0;
		right: 0;
		left: 0;
		pointer-events: none;
	}

	.zui-cell__arrow {
		height: 10px;
		width: 10px;
		border-width: 2px 2px 0 0;
		border-color: #c0c0c0;
		border-style: solid;
		-webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		position: absolute;
		top: 50%;
		margin-top: -6px;
		right: 30rpx;
	}
</style>