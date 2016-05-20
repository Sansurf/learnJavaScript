String.prototype.addToElement = function(tag, className)
{
	this.tagName = 'tag';
	this.className = 'className';
	return '<'+tag+' class='+className+'>' + this + '</'+tag+'>';
}

window.onload = function()
{
	var str = document.getElementsByTagName('p');
	str.addToElement("DIV", 'red');
}