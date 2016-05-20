function MyHTML()
{
	this.str = "";
	this.str2 = "";

	this.addText = function(_str)
	{
		if (this.str == "") 
		{
			this.str += _str;
		}
		else
		{
			this.str += "; "+_str;
		}
		
		return this.str;
	}

	this.addH = function(_str2,N)
	{
		this.str2 += _str2;
		this.N = N;
		
		return '<H'+this.N+'>' + this.str2 + '</H'+this.N+'>';
	}

	this.showHTML = function()	
	{
		return 	"Простая строка: " + this.addText() + "\n" +
				"Строка с тегом: " + this.addH();
	}
}



var string = new MyHTML();
string.addText("Первая строка");
string.addText("Second string");
string.addText("La troisième ligne");
<<<<<<< HEAD:23/script.js
string.addH("Проверка тега", 1);
string.showHTML();
=======
string.addH("Проверка тега", 1);
>>>>>>> Third_homework:Второе ДЗ/3/script.js
