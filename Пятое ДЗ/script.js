(function($)
{
	$(function()
	{
		$(document).on('click', '.submit', function(event)
		{
			$('#response').load('validator.php', $('#form').serialize());
			// $.post('validator.php', $('#form').serialize(),
			// 	function(data)
			// 	{
			// 		$('#response').html(data);
			// 	});
			event.preventDefault();
		});
	});
})(jQuery);