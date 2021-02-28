//1. Напишіть функцію, що повертає куб числа.

let num = 4;
let DegreeOfNum = Degree(num);

function Degree(a){

	return a**3;
}

console.log(DegreeOfNum);

//2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

let firstNum = 10;
let secondNum = 4;
let thirdNum = 2;

let result = function MathOperation(a, b, c){
	return (a + b)/c;
}

console.log(result(firstNum, secondNum, thirdNum))

//3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).


let inputNumOfDay = +prompt('Введіть день тижня(число)');
let selectYourDay = function selectDay(a){
	switch (a){
		case 1:
			alert('monday');
			break;
		case 2:
			alert('tuesday');
			break;
		case 3:
			alert('wednesday');
			break;
		case 4:
			alert('thursday');
			break;
		case 5:
			alert('friday');
			break;
		case 6:
			alert('saturday');
			break;
		case 7:
			alert('sunday');
			break;
	}
}
selectYourDay(inputNumOfDay);

//4. Реалізуйте функцію знаходження факторіала

let numOfFactorial = +prompt('введіть число, щоб знайти факторіал');
let resultFuct = function getFuct(a){
		for(let i = a - 1; i > 0; i--){
		a *= i;
	}

	return a;
}

console.log(resultFuct(numOfFactorial));

//5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let hours = +prompt('Введіть год');
let minutes = +prompt('Введіть хв');
let seconds = +prompt('введіть сек');

let getSeconds = (hours, minutes, seconds) => hours*3600 + minutes*60 + seconds;

alert(`ми отримали ${getSeconds(hours, minutes, seconds)} секунд`);

//6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

let seconds = +prompt('Введіть секунди');
const SECINHOUR = 3600;
const MININHOUR = 60;

let realTime = function goToRealTime(a){

	if(a > 86400){
		alert("Більше одного дня")
	}else{
		let b = Math.floor(a / SECINHOUR);
		let c = Math.floor((a % SECINHOUR) / MININHOUR);
		let d = (a % SECINHOUR) - c*MININHOUR;
		alert(`Реальний час - ${b}:${c}:${d}`);
	}

	return;
}
realTime(seconds);