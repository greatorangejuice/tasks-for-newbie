function sumDigPow(a, b) {
var value = a;
var array = [];
  for (; a < b; a++) {
    value = String(a);
    console.log("После преобразования в строку Value: " + value);
    rangeStr = value.length;
    console.log(value[0] +" "+ typeof(value));
    if (a == Math.pow(value[rangeStr - 1], 1) ){
      array.push(value);
    }
    
  }
  return array;
}
console.log( "Массив " + sumDigPow(1,100));

/* Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
Получаю число - перевожу его в строку и узнаю
его длину - разбиваю его на части и вовзвожу в степень - 
- если вовзеденная в степень сумма равна изначальному числу -
- пушу его в массив */

/* Главная проблема в том, что я не могу пока что составить алгоритм,
который учитывает сколько раз нужно скалывадывать числа и 
учитывает в какую степень возвести. */