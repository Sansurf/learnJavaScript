var rows = 8;
var columns = 8;

function ChessBoard()
{
	this.letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	this.createMatrix = function ()
	{
		for (var i=0; i<rows; i++)
		{		
			for (var j=0; j<columns; j++)
			{
				var div = document.createElement('div');
				div.className = 'cell';
				if ((i+j)%2==0) 
				{
					div.classList.add('grey');
				}
				matrix.appendChild(div);
			}
		}
	}

	this.rowNumbers = function ()
	{
		for (var i = rows; i > 0; i--) 
		{
			var div = document.createElement('div');
			div.className = 'outerCell';
			div.innerText = i;
			number.appendChild(div);
		}
	}

	this.columnLetters = function ()
	{
		for (var i=0; i<columns+1; i++) 
		{
			var div = document.createElement('div');
			div.className = 'outerCell';
			div.innerText = this.letters[i];
			word.appendChild(div);
		}
	}
}
	
function MarkCell()
{
	this.i = 0;
	this.j = 0;

	this.active = function(_i, _j)
	{
		this.i=_i; this.j=_j;
		document.getElementById("matrix").children[_i * rows + _j].classList.add('active');		
	}

	this.inactive = function(_i, _j)
	{
		document.getElementById("matrix").children[_i * rows + _j].classList.remove('active');
	}
}

	


window.onload = function()
{
	matrix.focus();
	var chessBoard = new ChessBoard();
	chessBoard.rowNumbers();
	chessBoard.columnLetters();
	chessBoard.createMatrix();
	var markCell = new MarkCell();
	markCell.active(0, 0);

	matrix.onkeydown = function(event) 
	{
		if (event.keyCode >= 37 && event.keyCode <=40)
		{
			markCell.inactive(markCell.i, markCell.j);
		}
		switch(event.keyCode) 
		{
			case 37: 
				markCell.active(markCell.i, (markCell.j==0 ? 7 : --markCell.j));
				break;
			case 38:
				markCell.active((markCell.i==0 ? 7 : --markCell.i), markCell.j);
				break;
			case 39:
				markCell.active(markCell.i, (markCell.j==7 ? 0 : ++markCell.j));
				break;
			case 40:
				markCell.active((markCell.i==7 ? 0 : ++markCell.i), markCell.j);
				break;
		}
	}

}