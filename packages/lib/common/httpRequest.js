/**
 * 常用方法封装 请求，文件上传等
 * @author echo. 
 **/ 

const zui = {
	//接口地址
	interfaceUrl: function() {
		return 'https://www.zeerui.cn'
	},
	toast: function(text, duration, success) {
		uni.showToast({
			title: text || "出错啦~",
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
	modal: function(title, content, showCancel, callback, confirmColor, confirmText) {
		uni.showModal({
			title: title || '提示',
			content: content,
			showCancel: showCancel,
			cancelColor: "#555",
			confirmColor: confirmColor || "#5677fc",
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			}
		})
	},
	isAndroid: function() {
		const res = uni.getSystemInfoSync();
		return res.platform.toLocaleLowerCase() == "android"
	},
	isPhoneX: function() {
		const res = uni.getSystemInfoSync();
		let iphonex = false;
		let models = ['iphonex', 'iphonexr', 'iphonexsmax', 'iphone11', 'iphone11pro', 'iphone11promax']
		const model = res.model.replace(/\s/g, "").toLowerCase()
		if (models.includes(model)) {
			iphonex = true;
		}
		return iphonex;
	},
	constNum: function() {
		let time = 0;
		// #ifdef APP-PLUS
		time = this.isAndroid() ? 300 : 0;
		// #endif
		return time
	},
	delayed: null,
	showLoading: function(title, mask = true) {
		uni.showLoading({
			mask: mask,
			title: title || '请稍候...'
		})
	},
	/**
	 * 请求数据处理
	 * @param string url 请求地址
	 * @param string method 请求方式
	 *  GET or POST
	 * @param {*} postData 请求参数
	 * @param bool isDelay 是否延迟显示loading
	 * @param bool isForm 数据格式
	 *  true: 'application/x-www-form-urlencoded'
	 *  false:'application/json'
	 * @param bool hideLoading 是否隐藏loading
	 *  true: 隐藏
	 *  false:显示
	 */
	request: async function(url, method, postData, isDelay, isForm, hideLoading) {
		//接口请求
		let loadding = false;
		zui.delayed && uni.hideLoading();
		clearTimeout(zui.delayed);
		zui.delayed = null;
		if (!hideLoading) {
			if (isDelay) {
				zui.delayed = setTimeout(() => {
					loadding = true
					zui.showLoading()
				}, 1000)
			} else {
				loadding = true
				zui.showLoading()
			}
		}

		return new Promise((resolve, reject) => {
			uni.request({
				url: zui.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
					'Authorization': zui.getToken()
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					clearTimeout(zui.delayed)
					zui.delayed = null;
					if (loadding && !hideLoading) {
						uni.hideLoading()
					}
					resolve(res.data)
				},
				fail: (res) => {
					clearTimeout(zui.delayed)
					zui.delayed = null;
					zui.toast("网络不给力，请稍后再试~")
					reject(res)
				}
			})
		})
	},
	/**
	 * 上传文件
	 * @param string url 请求地址
	 * @param string src 文件路径
	 */
	uploadFile: function(url, src) {
		zui.showLoading()
		return new Promise((resolve, reject) => {
			const uploadTask = uni.uploadFile({
				url: zui.interfaceUrl() + url,
				filePath: src,
				name: 'imageFile',
				header: {
					'Authorization': zui.getToken()
				},
				formData: {
					// sizeArrayText:""
				},
				success: function(res) {
					uni.hideLoading()
					let d = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
					if (d.code % 100 == 0) {
						//返回图片地址
						let fileObj = d.data;
						resolve(fileObj)
					} else {
						that.toast(res.msg);
					}
				},
				fail: function(res) {
					reject(res)
					that.toast(res.msg);
				}
			})
		})
	},
	zuiJsonp: function(url, callback, callbackname) {
		// #ifdef H5
		window[callbackname] = callback;
		let zuiScript = document.createElement("script");
		zuiScript.src = url;
		zuiScript.type = "text/javascript";
		document.head.appendChild(zuiScript);
		document.head.removeChild(zuiScript);
		// #endif
	},
	//设置用户信息
	setUserInfo: function(mobile, token) {
		//uni.setStorageSync("zeerui_token", token)
		uni.setStorageSync("zeerui_mobile", mobile)
	},
	//获取token
	getToken() {
		return uni.getStorageSync("zeerui_token")
	},
	//判断是否登录
	isLogin: function() {
		return uni.getStorageSync("zeerui_mobile") ? true : false
	},
	//跳转页面，校验登录状态
	href(url, isVerify) {
		if (isVerify && !zui.isLogin()) {
			uni.navigateTo({
				url: '/pages/common/login/login'
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	}
}

export default zui
