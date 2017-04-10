/*******************************************************************************
 * jQuery Ajax 二次封装通用类, 基于后端返回数据格式： {"code":"0000","msg":"处理成功","data":"ggggggg"}，若后端不进行封装，也可前端处理(暂未实现)
 * @author xxh
 * 同步调用示例：
 * 		var rsp = $.myAjax(contextPath + "/demo/demoInvoke.action",{id:1});
		if(rsp.getCode() == rsp.SUCCESS){
			var data = rsp.getBodyAsJson();
			return true;
		}else{
			alert("XXXXXXX失败：" + rsp.getErrorMsg());
			return false;
		}
 * 异步调用示例：
 *  var rsp = $.myAjax(contextPath + "/demo/demoInvoke.action",{id:1},function(ret){
		if (ret.getCode() == ret.SUCCESS) {
			var data = ret.getBodyAsJson();
			alertinfo("客户删除成功");
		}else{
			alertinfo("客户删除失败：" + response.getErrorMessage());
		}
    });
 * 
 * 
 * java后端接收：
 * 复杂对象用：$.myAjax时，以RequestBody注解接收，传递的参数必须为json字符串：  public String test(@RequestBody DemoEntity demoEntity){}
 * 简单类型用：$.baseAjax时，传递的参数必须为json对象，可加RequestParam注解，指定参数映射，若不加，则必须保证传递的参数字段与javajava接收字段一致 public String testBs(Integer id){}
 ******************************************************************************/
(function($) {
	$(function() {
		/**
		* ajax封装
		* url 发送请求的地址
		* data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
		* dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
		* successfn 成功回调函数
		* errorfn 失败回调函数
		* callbackfn 异步回调函数
		* contentType 发送信息至服务器时内容编码类型 默认值: "application/x-www-form-urlencoded" 格式的数据（即 name=value&name1=value1）
		* get请求时不缓存
		*/
		$.myAjax = function(url, data,callbackfn, type,
				dataType, contentType) {
			type = (type == null || type == "" || typeof (type) == "undefined") ? "post"
					: type;
			dataType = (dataType == null || dataType == "" || typeof (dataType) == "undefined") ? "json"
					: dataType;
			contentType = (contentType == null || contentType == "" || typeof (contentType) == "undefined") ? "application/json"
					: contentType;
			if (!!callbackfn) {
				async = true;
			} else {
				async = false;
			}
			var ret = {};
			$.ajax({
				type : type,
				async : async,
				cache : false,
				data : data,
				url : url,
				dataType : dataType,
				contentType : contentType,
				success : function(d) {
					ret = resultHandler(d);
					if (async) {
						callbackfn(ret);
					}
				}
			});
			return ret;
		}

		$.baseAjax = function(url, data,callbackfn,cache, type,
				dataType){//contentType 以默认的 application/x-www-form-urlencoded 格式发送
			cache = (cache == null || cache == "" || typeof (cache) == "undefined") ? false
					: cache;
			dataType = (dataType == null || dataType == "" || typeof (dataType) == "undefined") ? "json"
					: dataType;
			type = (type == null || type == "" || typeof (type) == "undefined") ? "post"
					: type;
			if (!!callbackfn) {
				async = true;
			} else {
				async = false;
			}
			var ret = {};
			$.ajax({
				type : type,
				async : async,
				cache : cache,
				data : data,
				url : url,
				dataType : dataType,
				success : function(d) {
					ret = resultHandler(d);
					if (async) {
						callbackfn(ret);
					}
				}
			});
			return ret;
		}
		
		/**
		 * get请求时，可设置浏览器是否缓存
		 */
		$.getAjax = function(url, data, callbackfn, cache,
				dataType, contentType) {
			cache = (cache == null || cache == "" || typeof (cache) == "undefined") ? false
					: cache;
			dataType = (dataType == null || dataType == "" || typeof (dataType) == "undefined") ? "json"
					: dataType;
			contentType = (contentType == null || contentType == "" || typeof (contentType) == "undefined") ? "application/json"
					: contentType;
			if (!!callbackfn) {
				async = true;
			} else {
				async = false;
			}
			var ret = {};
			$.ajax({
				type : 'get',
				async : async,
				cache : cache,
				data : data,
				url : url,
				dataType : dataType,
				contentType : contentType,
				success : function(d) {
					ret = resultHandler(d);
					if (async) {
						callbackfn(ret);
					}
				}
			});
			return ret;
		}
		
		
		var resultHandler = function(rs) {
			var retCode = rs.code;//字段与java后台封装的返回对应
			var retBody = "success";
			var result = {
				SUCCESS : "0000",//编码与java后台封装的返回对应
				code : "0000",
				getCode : function() {
					return this.code;
				},
				getBodyAsJson : function() {
					//若返回json对象：
					retBody = rs.data;
					return retBody;
					//若返回json字符串
//					var reg = new RegExp('[\r\n\t]','gm');//替换掉字符串里js解析出错的特殊字符【回车、换行、制表符】
//					retBody = retBody.replace(reg, '');
//					return JSON.parse(retBody);
				},
				getErrorMsg : function(){
					retBody = rs.msg;
					return retBody;
				}
			};
			result.code = retCode;
			result.body = retBody;
			return result;
		}
		
	})
})(jQuery);