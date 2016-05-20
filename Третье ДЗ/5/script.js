var lastLi = function()
{
	return $('li:last').text();
}

window.onload = function() 
{
	alert(lastLi());
}