/**
 * Получает случайный элемент из массива arrayElements
 * @param  {array} arrayElements Массив элементов
 * @return {string}              Случайный элемент массива
 */
function randomElement(arrayElements)
{
	var getElement = arrayElements[Math.floor(Math.random() * arrayElements.length)];
	return getElement;
}

/**
 * Получает случайный цвет
 * @return {string} Строка "#xxxxxx" в формате 16-ричной записи
 */
function randomColor()
{
	var getColor = "#" + ((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1);
	return getColor;
}

/**
 * Создает матрицу из прямоугольников 20х20px
 * @return {object} Создает дочерние HTML-элементы <div> родителя "matrix"
 */
function createMatrix()
{
	var matrix = document.getElementById('matrix');
	var n = 20 * 20;
	var alphabet = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", 
					"р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"];
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		div.innerText = randomElement(alphabet);
		div.style.backgroundColor = randomColor();
		matrix.appendChild(div);
	}
}

window.onload = function()
{
	createMatrix();	
}