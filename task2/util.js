// 判断arr是否为一个数组，返回一个bool值
function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction (fn) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject (src) {
  var cloneObj;
  switch (typeof src) {
  	case 'undefined':
  	  break;
  	case 'string':
  	  cloneObj = src + '';
  	  break;
  	case 'number':
  	  cloneObj = src + 0;
  	  break;
  	case 'boolean':
  	  cloneObj = 1 && src;
  	  break;
  	case 'object':
  	  if (src === null) {
  	  	cloneObj = null;
  	  } else {
  	  	if (src instanceof Array) {
  	  		cloneObj = [];
  	  		for (var i = 0; i < src.length; i++) {
  	  			cloneObj.push(cloneObject(src[i]));
  	  		}
  	  	} else {
  	  		cloneObj = {};
  	  		for (var key in src) {
  	  			cloneObj[key] = cloneObject(src[key]);
  	  		}
  	  	}
  	  }
  	  break;
  	default:
  	  cloneObj = src;
  	  break;
  }
  return cloneObj;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
  var newArray = new Array();
  for(var i = 0; i < arr.length; i++) {
  	if(newArray.indexOf(arr[i]) < 0) {
  	  newArray.push(arr[i]);
  	}
  }
  return newArray;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim (str) {
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) != "" && str.charAt(i) != '/t') {
      break;
    }
  }
  for(var j = str.length - 1; j > 0; j--) {
    if(str.charAt(j) != "" && str.charAt(i) != '/t') {
      break;
    }
  }
  return str.substring(i+1, j-1);
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each (arr, fn) {
  for(var i in arr) {
    fn(arr[i], i);
  }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength (obj) {
  return Object.keys(obj).length 
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
  var pattern = /^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\.\\w+([-.]\\w+)*$/;
  return pattern.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
  var pattern = /^1[3|5|7|8][0-9]\\d(8)$/;
  return pattern.test(phone);
}