/**
 * 前台工具类
 * @author xxh
 * @class CommonUtils
 */
CommonUtils = {
	/**
	 * 注册命名空间
	 * 
	 * @example
	 * CommonUtils.regNamespace("cust");
	 * CommonUtils.regNamespace("cust","order.custOrder");
	 * @return 名称空间对象
	 */
	regNamespace : function() {
		var args = arguments, o = null, nameSpaces;
		for (var i = 0; i < args.length; i = i + 1) {
			nameSpaces = args[i].split(".");
			o = window;
			for (var j = 0; j < nameSpaces.length; j = j + 1) {
				o[nameSpaces[j]] = o[nameSpaces[j]] || {};
				o = o[nameSpaces[j]];
			}
		}
		return o;
	},
	
	/**
	 * @description 获取地址栏参数
	 * @function getUrlParms
	 * @param: query = location.search.substring(1);// 获取查询串
	 * @return 参数对象
	 */
	getUrlParms : function(query) {
		if(!query){
			return;
		}
		var args = new Object();
		var pairs = query.split("&");// 在逗号处断开
		for (var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf('=');// 查找name=value
			if (pos == -1)
				continue;// 如果没有找到就跳过
			var argname = pairs[i].substring(0, pos);// 提取name
			var value = pairs[i].substring(pos + 1);// 提取value
			args[argname] = value;// 存为属性
		}
		return args;
	},
	
	/**
	 * @description 对象拷贝,用来拷贝json对象
	 * @param {}
	 *  srcObj
	 */
	objClone : function(srcObj) {
		var buf;
		if (srcObj instanceof Array) {
			buf = [];
			var i = srcObj.length;
			while (i--) {
				buf[i] = this.objClone(srcObj[i]);
			}
			return buf;
		} else if (srcObj instanceof Object) {
			buf = {};
			for (var k in srcObj) {
				buf[k] = this.objClone(srcObj[k]);
			}
			return buf;
		} else {
			return srcObj;
		}
	},
	/**
	 * 生成指定位数的随机数
	 * @param n
	 * @returns {String}
	 */
	randomNum : function(n){
		  var rnd="";
		  for(var i=0;i<n;i++)
		     rnd+=Math.floor(Math.random()*10);
		  return rnd;
	},
	
	/**
	 * 对象是否为空的判断，为空： true，不为空 ： false
	 * @param 
	 * @returns {Boolean}
	 */
	isEmpty : function(obj, msg){
    	if(obj == undefined || obj == null){
    		if(undefined != msg){
    			alert(msg);
    		}
    		return true;
    	}
    	return false;
    },
    
    /**
	 * 字符串是否为空的判断，为空： true，不为空 ： false
	 * @param 
	 * @returns {Boolean}
	 */
    isStrEmpty : function(str, msg){
    	if(str == undefined || str == 'undefined' || str == null ||str.length <=0){
    		if(undefined != msg){
    			alert(msg);
    		}
    		return true;
    	}
    	return false;
    },
    /**
     * 手机号码的验证，true代表有效号码，false代表无效号码
     * @param $val jQuery对象值，比如：$("#id").val();
     * @returns {Boolean}
     */
	isValidPhone : function($val) {
		var _val = $.trim($val);
		var reg = /^1[0-9]{10}$/;
		if (!reg.test(_val)) {
			return false;
		}
		return true;
	},
	
	/**
	 * email 验证，true代表有效，false代表无效
	 * @param $val jQuery对象值，比如：$("#id").val();
	 * @returns {Boolean}
	 */
	isValidEmail : function($val) {
		// \w --> [a-zA-Z0-9_]
//		var _val = $.trim($val);
//		var emailReg = /.*@*/;
//		if (!emailReg.test(_val)) {
//			return false;
//		}
		if($val.indexOf("@") < 0){
			return false;
		}
		return true;
	},
	/**
	 * 是否为数字,true 代表是数字，false代表非数字
	 * @param $val jQuery对象值，比如：$("#id").val();
	 * @returns {Boolean}
	 */
	isNumeric : function($val){
		var _val = $.trim($val);
		if (!$.isNumeric(_val)) {
			return false;
		}
		return true;
	},
	/**
	 * 当$val值存在时，true代表是数字或者为空，false代表非空且不是数字
	 * @param $val jQuery对象值，比如：$("#id").val();
	 * @returns
	 */
	isNumericWhenExist : function($val){
		var _val = $.trim($val);
		if(_val != ''){
			return commonValition.isNumeric(_val);
		}
		return true;
	},
	
	/**
	 * 判断整数num是否等于0
	 * @param num
	 * @return
	 * @author jiqinlin
	 */
	isIntEqZero : function(num){ 
	     return num==0;
	},

	/**
	 * 判断整数num是否大于0
	 * @param num
	 * @return
	 * @author jiqinlin
	 */
	isIntGtZero : function(num){ 
	    return num>0;
	},

	/**
	 * 判断整数num是否大于或等于0
	 * @param num
	 * @return
	 * @author jiqinlin
	 */
	isIntGteZero : function(num){ 
	    return num>=0;
	},

	/**
	 * 判断浮点数num是否等于0
	 * @param num 浮点数
	 * @return
	 * @author jiqinlin
	 */
	isFloatEqZero : function(num){ 
	    return num==0;
	},

	/**
	 * 判断浮点数num是否大于0
	 * @param num 浮点数
	 * @return
	 * @author jiqinlin
	 */
	isFloatGtZero : function(num){ 
	    return num>0;
	},

	/**
	 * 判断浮点数num是否大于或等于0
	 * @param num 浮点数
	 * @return
	 * @author jiqinlin
	 */
	isFloatGteZero : function(num){ 
	    return num>=0;
	},

	/**
	 * 匹配Email地址
	 */
	isEmail : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
	    if(result==null)return false;
	    return true;
	},

	/**
	 * 判断数值类型，包括整数和浮点数
	 */
	isNumber : function(str){
	    if(this.isDouble(str) || this.isInteger(str)) return true;
	    return false;
	},

	/**
	 * 只能输入数字[0-9]
	 */
	isDigits : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^\d+$/);
	    if(result==null)return false;
	    return true;
	},

	/**
	 * 匹配money
	 */
	isMoney : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1,2}))$/);
	    if(result==null)return false;
	    return true;
	}, 
	    
	/**
	 * 匹配phone
	 */
	isPhone : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 匹配mobile
	 */
	isMobile : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match( /^1[0-9]{10}$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 联系电话(手机/电话皆可)验证   
	 */
	isTel : function(text){
	    if(this.isMobile(text)||this.isPhone(text)) return true;
	    return false;
	},

	/**
	 * 匹配qq
	 */
	isQq : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[1-9]\d{4,12}$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 匹配english
	 */
	isEnglish : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[A-Za-z]+$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 匹配integer
	 */
	isInteger : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[-\+]?\d+$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 匹配double或float
	 */
	isDouble : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[-\+]?\d+(\.\d+)?$/);
	    if(result==null)return false;
	    return true;
	},     


	/**
	 * 匹配邮政编码
	 */
	isZipCode : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[0-9]{6}$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 匹配URL
	 */
	isUrl : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
	 */
	isPwd : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[a-zA-Z]\\w{6,12}$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 判断是否为合法字符(a-zA-Z0-9-_)
	 */
	isRightfulString : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[A-Za-z0-9_-]+$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 匹配english
	 */
	isEnglish : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[A-Za-z]+$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 匹配身份证号码
	 */
	isIdCardNo : function(num){ 
//	　   if (isNaN(num)) {alert("输入的不是数字！"); return false;}
		var len = num.length, le; 
		var re;
		if (len == 15) 
			re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
		else if (len == 18) 
			re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
		else {
			alert("身份证号输入的数字位数不对。"); 
			return false;
		} 
		var a = num.match(re); 
		if (a != null) { 
			if (len==15) 
			{ 
				var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
				var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
			} else{ 
				var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
				var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
			} 
			if (!B) {
				alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
				return false;
				} 
			} 
		if(!re.test(num)){
			alert("身份证最后一位只能是数字和字母。");
			return false;
			}
		return true; 
	}, 

	/**
	 * 匹配汉字
	 */
	isChinese : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[\u4e00-\u9fa5]+$/);
	    if(result==null)return false;
	    return true;
	}, 

	/**
	 * 匹配中文(包括汉字和字符)
	 */
	isChineseChar : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[\u0391-\uFFE5]+$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 字符验证，只能包含中文、英文、数字、下划线等字符。
	 */
	stringCheck : function(str){
	    if(str==null||str=="") return false;
	    var result=str.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/);
	    if(result==null)return false;
	    return true;
	},     

	/**
	 * 过滤中英文特殊字符，除英文"-_"字符外
	 */
	stringFilter : function(str){
	    var pattern = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]");
	    var rs = "";
	    for (var i = 0; i < str.length; i++) {
	        rs = rs + str.substr(i, 1).replace(pattern, '');
	    }
	    return rs;
	}, 

	/**
	 * 判断是否包含中英文特殊字符，除英文"-_"字符外
	 */
	isContainsSpecialChar : function(str){
	    if(str==null||str=="") return false;
	    var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
	    return reg.test(str);    
	},
	
	/**
	 * 去掉字符串前后的空格
	 * @param str 入参:要去掉空格的字符串
	 * @returns
	 */
	trimAll : function(str){
	     return str.replace(/(^\s*)|(\s*$)/g, ''); 
	 
	},
	
	/**
	 * 简单验证密码
	 * 只能包含 a-z、A-z、0-9、_的5-20的密码长度
	 * @param str
	 */
	validatePassword : function(str){
		var reg = /^(\w){5,20}$/;
		if(reg.test(str)){
			return true;
		}
		return false;
	}
}