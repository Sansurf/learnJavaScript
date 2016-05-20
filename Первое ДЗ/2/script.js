//
// Создание матрицы.
//
window.onload = function ()
{
	var tableCell = document.getElementById('matrix');
	var words = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


	for (var i=8; i>0; i--)
	{
		// Список цифр по левой вертикали в обратном порядке (как на настоящей доске)
		//
		var divNumber = document.createElement('div');
		divNumber.className = 'divNumber';
		divNumber.innerText = i;
		matrix.appendChild(divNumber);
		
		// Создание алгоритма чередования закрашиваемых клеток
		//
		for (var j = 0; j < 8; j++)
		{
			var div = document.createElement('div');
			div.className = 'cell';

			if ((i+j)%2==0) 
			{
				div.style.backgroundColor = '#ccc';
			}
			matrix.appendChild(div);
		}
	}

	// Буквы по нижнему раду, берутся из массива words; i соответствует ключу массива
	//
	for (i=0; i<9; i++) 
	{
		var divWord = document.createElement('div');
		divWord.className = 'divWord';
		divWord.innerText = words[i];
		matrix.appendChild(divWord);	
	}
}