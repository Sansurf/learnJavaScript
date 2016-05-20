function ArbitraryValue ()
{
	this.changeInputValue = function()
	{
		$('input[type="text"]').eq(0).text("Changed first 'Input=`Text`'");
		$('input[type="text"]').eq(1).text("Changed second 'Input=`Text`'");
	}
	this.createInputPlaceholder = function()
	{
		$('input[type="text"]').eq(0).attr('placeholder', "Alexandr");
		$('input[type="text"]').eq(1).attr('placeholder', "Eliseev");
	}
}

window.onload = function() 
{
	var arbitraryValue = new ArbitraryValue();
	arbitraryValue.changeInputValue();
	arbitraryValue.createInputPlaceholder();
}