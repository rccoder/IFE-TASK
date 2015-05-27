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

// 为element增加一个样式名为newClassName的新样式
function addClass (element, newClassName) {
  var elementClassName = element.className;
  element.className = elementClassName === '' ? newClassName : elementClassName + "" newClassName;
}

// 移除element中的样式oldClassName
function removeClass (element, oldClassName) {
  var re = element.className;
  var pattern = new RegExp(\/boldClassName\b/);
  element.className = re.replace(pattern, "");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode (element, siblingNode) {
  return element.parentNode == siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition (element) {
  var pos = {};
  pos.x = element.getBoundingClientRect().left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
  pos.y = element.getBoundingClientRect().top + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
  return pos;
}

// 实现一个简单的Query
// 可以通过id获取DOM对象，通过#标示
// 可以通过tagName获取DOM对象
// 可以通过样式名称获取DOM对象
// 可以通过attribute匹配获取DOM对象
// 可以通过简单的组合提高查询便利性
function $ (selector) {
  var element;
  var arr = selector.split(" ");
  var idExp = /^#[\w-]+$/;
  var classExp = /^.[\w-]+$/;
  var attrExp = /^\[[\w-]+\]$/;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].search(idExp) != -1) {
      var id = arr[i].slice(1);
      element = document.getElementById(id);
    }
    else if(arr[i].search(classExp) != -1) {
      var cl = arr[i].slice(1);
      element = document.getElementByClassName(cl)[0];
    }
    else if(arr[i].search(attrExp) != -1) {
      var index = arr[i].indexOf('=');
      if(index != -1) {
        var attr = arr[i].slice(1, index);
        var value = arr[i].slice(index+1, -1);
        element = getElementByAttribute(attr, value);
      } else {
        var attr = arr[i].slice(1);
        element = getElementByAttribute(attr, value);
      }
    } else {
      element = document.getElementByTagName(arr[i])[0];
    }
  }
  return element;
}
function getElementByAttribute(attr, value) {
  var allElemens = document.getElementByTagName('*');
  if(value) {
    for(var i = 0; i < allElemens.length; i++) {
      if(allElemens[i].getAttribute(attr) == value) {
        return allElemens[i];
      }
    }
  } else {
    for(var i = 0; i < allElemens.length; i++) {
      if(allElemens[i].getAttribute(attr)) {
        return allElemens[i];
      }
    }
  }
}