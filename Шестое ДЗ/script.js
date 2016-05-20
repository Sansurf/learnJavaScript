(function($)
{
	$(function()
	{
		$(document).on('click', '.submit', function(event)
		{
			$.post('validator.php', $('#form').serialize(), function(data) 
				{
					$.each(data, function(key, message)
					{
						$('input[name="'+key+'"]').css('background-color', "red");
						$('#response').append("<b>" + key + ":</b> " + message + "<br />");
					});
				}, 'json');
			event.preventDefault();
		});
	});
})(jQuery);