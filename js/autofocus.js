
;(function($){
	$.fn.extend({
		"autoFocus":function(options){
			var _t = this,autoFlag,
			options = $.extend({
				tImg:_t.find(".picWrap > a"),
				tPointer:_t.find(".pointer li")
			},defaluts,options);
			function changeFocus(){
				var index = options.curIndex;
				options.tImg.filter(":visible").fadeOut().end().eq(index).fadeIn();
				options.tPointer.removeClass("active").eq(index).addClass("active");
				options.curIndex = index >= options.tImg.length - 1 ? 0 : index + 1;
			};
			function autoRun(){
				autoFlag = setInterval(function(){
					changeFocus();
				},options.delay);
			};
			(function(){
				options.tImg.hide().eq(0).show();
				options.tPointer.eq(0).addClass("active");
				autoRun();
				options.tPointer.hover(function() {
					clearInterval(autoFlag);
					options.curIndex = $(this).index();
					changeFocus();
				},
				function() {
					autoRun();
				});
			})();
		}
	});
	//默认参数
	var defaluts = {
		pointer:null,
		curIndex: 1,
		delay: 6000
	};
})(jQuery);
