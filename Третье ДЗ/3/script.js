var optionValue2 = function()
{
	return $('option[value="2"]').text();
}

window.onload = function() 
{
	alert(optionValue2());
}