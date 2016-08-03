/**
 * location
 */

//location 是最有用的 BOM 对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一
//些导航功能。事实上， location 对象是很特别的一个对象，因为它既是 window 对象的属性，也是
//document 对象的属性；换句话说， window.location 和 document.location 引用的是同一个对象。
//location 对象的用处不只表现在它保存着当前文档的信息，还表现在它将 URL 解析为独立的片段，让
//开发人员可以通过不同的属性访问这些片段。下表列出了 location 对象的所有属性（注：省略了每个属
//性前面的 location 前缀） 。

/**
 * 获取 location string 中的  query args (查询函数中的对象)
 */
function getQueryStringArgs() {
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
		//保存数据的对象
		args = {},
		//取得每一项
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,
		//在 for 循环中使用
		i = 0,
		len = items.length;
	//逐个将每一项添加到 args 对象中
	for(i = 0; i < len; i++) {
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length) {
			args[name] = value;
		}
	}
	return args;
}

// location.assign   
//如果是将 location.href或 window.location 设置为一个 URL 值，也会以该值调用 assign()方法。
location.assign("http://www.wrox.com");

//以下两种方式 实现的是同一种效果
window.location = "http://www.wrox.com";
location.href = "http://www.wrox.com";

//-----------------------------------------
//假设初始 URL 为 http://www.wrox.com/WileyCDA/
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1"
location.hash = "#section1";
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript"
location.search = "?q=javascript";
//将 URL 修改为"http://www.yahoo.com/WileyCDA/"
location.hostname = "www.yahoo.com";
//将 URL 修改为"http://www.yahoo.com/mydir/"
location.pathname = "mydir";
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/"
location.port = 8080;
//每次修改 location 的属性（hash 除外），页面都会以新 URL 重新加载。


//当通过上述任何一种方式修改 URL 之后，浏览器的历史记录中就会生成一条新记录，因此用户通
//过单击“后退”按钮都会导航到前一个页面。要禁用这种行为，可以使用 replace()方法。这个方法
//只接受一个参数，即要导航到的 URL；结果虽然会导致浏览器位置改变，但不会在历史记录中生成新记
//录。在调用 replace()方法之后，用户不能回到前一个页面

// 使用此方法打开的页面  将不能进行  后退操作 
location.replace("http://www.zhulong.com");


//-------------------------------------------

location.reload(); //重新加载（有可能从缓存中加载）
location.reload(true); //重新加载（从服务器重新加载）

//位于 reload()调用之后的代码可能会也可能不会执行，这要取决于网络延迟或系统资源等因素。
//为此，最好将 reload()放在代码的最后一行