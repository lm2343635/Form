/*!
 * mengular v3.1, http://github.com/lm2343635/Mengular
 * ===================================
 * Powerful jQuery plugin for ajax table loading.
 *
 * (c) 2015 - 2016 Lidaye, http://fczm.pw
 * fczm.pw Licensed
 */

(function($) {
	var _mengular="mengular",
		_clear="mengularClear",
		_clearTemplate="mengularClearTemplate",
		_fillText="fillText",
		LEFT_SPLIT_STR="${",
		RIGHT_SPLIT_STR="}$",
		MENGULAR_TEMPLATE_CLASS="mengular-template";

	$.fn[_mengular]=function(template, item) {
		var templateHtml=$(template).prop("outerHTML");
		var htmlArray=templateHtml.split(LEFT_SPLIT_STR);
		var attributeNames=new Array();
		for(var i=1;i<htmlArray.length;i++) 
			attributeNames[i-1]=htmlArray[i].split(RIGHT_SPLIT_STR)[0];
		for(var j in attributeNames) 
			templateHtml=templateHtml.replace(LEFT_SPLIT_STR+attributeNames[j]+RIGHT_SPLIT_STR,eval("item."+attributeNames[j]));
		templateHtml=$(templateHtml).removeClass(MENGULAR_TEMPLATE_CLASS).prop("outerHTML");
		$(this).append(templateHtml);
	};

	$.fn[_clear]=function() {
		$(this).children().each(function() {
			if(!$(this).hasClass(MENGULAR_TEMPLATE_CLASS))
				$(this).remove();
		});
	};

	$.fn[_clearTemplate]=function() {
		$(this).children().each(function() {
			if($(this).hasClass(MENGULAR_TEMPLATE_CLASS))
				$(this).remove();
		});
	};
	
	$.fn[_fillText]=function(data) {
		var html=$(this).prop("outerHTML");
		for(var key in data) {
			do {
				html=html.replace("@{"+key+"}", data[key]);
			} while(html.search("@{"+key+"}")!=-1);
		}
		$(this).prop("outerHTML", html);
	};
})(window.jQuery);

/**
 * fill text
 * @param data
 */
function fillText(data) {
	for(var attributeName in data)
		$("#"+attributeName).text(data[attributeName]);
}

/**
 * fill value
 * @param data
 */
function fillValue(data) {
	for(var attributeName in data)
		$("#"+attributeName).val(data[attributeName]);
}