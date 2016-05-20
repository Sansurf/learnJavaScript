//
// Создание матрицы.
//
window.onload = function ()
{
	var alph = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	var columns = 8;
	var rows = 8;

	// Список цифр по левой вертикали в обратном порядке (как на настоящей доске)
	//
	for (var i = rows; i > 0; i--) 
	{
		var div = document.createElement('div');
		div.className = 'outerCell';
		div.innerText = i;
		number.appendChild(div);
	}

	/****Создание матрицы****/
	for (var i=0; i<rows; i++)
	{		
		// Создание алгоритма чередования закрашиваемых клеток
		//
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
	/****\Создание матрицы****/

	// Буквы по нижнему раду, берутся из массива words; i соответствует ключу массива
	//
	for (var i=0; i<columns+1; i++) 
	{
		var div = document.createElement('div');
		div.className = 'outerCell';
		div.innerText = alph[i];
		word.appendChild(div);
	}

	/*
	Функции закрашивания ячейки
	 */
	var i=0, j=0;
	function activ(_i, _j) 
	{
		i=_i; j=_j;
		matrix.children[_i * rows + _j].classList.add('activ');
	}
	function deactiv(_i, _j)
	{
		matrix.children[_i * rows + _j].classList.remove('activ');
	}
	activ(0, 0);
	matrix.focus();

	/*
	Обработка нажатий курсора
	 */
	matrix.onkeydown = function(event) 
	{
		if (event.keyCode >= 37 && event.keyCode <=40)
		{
			deactiv(i, j);
		}
		switch(event.keyCode) 
		{
			case 37: 
				activ(i, (j==0 ? 7 : --j));
				break;
			case 38:
				activ((i==0 ? 7 : --i), j);
				break;
			case 39:
				activ(i, (j==7 ? 0 : ++j));
				break;
			case 40:
				activ((i==7 ? 0 : ++i), j);
				break;
		}
	}
}