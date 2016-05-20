// function TabSelect()
// {
// 	this.lengthTabs = function() {$('li').length;}
// 	this.indexTab = function() {$('li').index();}
// 	this.selectedContent = $('p:active').index();

// 	this.activeTab = function(i)
// 	{
// 		$('li').eq('i').addClass('active');
// 	}

// 	this.unactiveTab = $('li').removeClass('.active');
// }

// var indexTab = $('li').index();
// var lengthTabs = $('li').length;

(function($)
{
	$(function()
	{
		// $('li').click (function(event)
		// {
		// 	$(this).removeClass('active');
		// 	// event.preventDefault();
		// })
		//  var n = $(this).index();
		// // var n;
		// $('li').eq($(this).index()).click(function(event)
		// {
		// 	$(this).addClass('active');
		// })
		
		$('ul').on('click', 'li:not(.active)', function() 
		{
			$(this).addClass('active').siblings().removeClass('active');

			$('p').removeClass('visible');
			$('p').eq($(this).index()).addClass('visible');
		});

	});
})(jQuery);