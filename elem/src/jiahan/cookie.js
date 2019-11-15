// 功能一:添加cookie
function addCookie(cookieKey, cookieValue, overSeconds) {
	// document.cookie = "QQ = 95542151;max-age=90000";
	document.cookie = cookieKey + "=" + cookieValue + ";max-age=" + overSeconds;
}

//删除
function deleteCookie(cookieKey) {
	// document.cookie = "hobby = ;max-age = -1";
	// document.cookie = cookieKey+"= ;max-age = -1";
	//或者
	addCookie(cookieKey, "", -1);
}

//功能三:获取某个cookie的值,key对应的value值
function getCookie(cookieKey) {
	//获取的所有cookie，通过";"分割，分割符分割；
	var arr = document.cookie.split(";");
	for (var i = 0; i < arr.length; i++) {
		//使用"="分割
		var arr2 = arr[i].split("=");
		//遍历arr2[0]存储此时的key，arr2[1]存储此时的value；找到此时的key返回对应的value即可；trim()是去除字符串首尾空格；
		if (cookieKey == arr2[0].trim()) {
			return arr2[1].trim(); //返回对应的value值；
		}
	}
}

//功能四：判断cookie的key之前是否存在；
function isCookieKey(cookieKey){
	//获取的所有cookie，通过";"分割，分割符分割；
		var arr = document.cookie.split(";");
		for (var i = 0; i < arr.length; i++) {
			//使用"="分割
			var arr2 = arr[i].split("=");
			//遍历arr2[0]存储此时的key，arr2[1]存储此时的value；找到此时的key返回对应的value即可；trim()是去除字符串首尾空格；
			if (cookieKey == arr2[0].trim()) {
				return true;//此前key存在；
			}
		}
		return false;//此前不存在
	
}
