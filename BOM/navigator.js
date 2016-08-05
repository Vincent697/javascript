/**
 * navigator 
 */

/**
 * 检测插件（在 IE 中无效）
 * @param {Object} name 插件名字
 */
function hasPlugin(name) {
	name = name.toLowerCase();
	for(var i = 0; i < navigator.plugins.length; i++) {
		if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
			return true;
		}
	}
	return false;
}
//检测 Flash
//alert(hasPlugin("Flash"));
//检测 QuickTime
//alert(hasPlugin("QuickTime"));

//----------------------------------
//在IE中 只能通过    使用专有的 ActiveXObject 类型，并尝试创建一个特定插件的实例
//检测 IE 中的插件
function hasIEPlugin(name) {
	try {
		new ActiveXObject(name);
		return true;
	} catch(ex) {
		return false;
	}
}
//检测 Flash
//alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
//检测 QuickTime
//alert(hasIEPlugin("QuickTime.QuickTime"));

//-----------------------------------
//鉴于检测这两种插件的方法差别太大，因此典型的做法是针对每个插件分别创建检测函数，而不是使用前面介绍的通用检测方法。

//检测所有浏览器中的 Flash
function hasFlash() {
	var result = hasPlugin("Flash");
	if(!result) {
		result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
	}
	return result;
}
//检测所有浏览器中的 QuickTime
function hasQuickTime() {
	var result = hasPlugin("QuickTime");
	if(!result) {
		result = hasIEPlugin("QuickTime.QuickTime");
	}
	return result;
}
//检测 Flash
alert(hasFlash());
//检测 QuickTime
alert(hasQuickTime());