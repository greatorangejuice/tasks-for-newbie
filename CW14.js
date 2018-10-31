function incrementString (string) {
  var symbol = string.split("");
  var array = [];
  var number = "";
  var newNumber;
  var incrementedString;

for (let i = 0; i < symbol.length; i++) {
  if (isNaN(symbol[i]) || symbol[i] == 0 ) {
    array.push(symbol[i]);
    console.log("Массив строк и нулей: " + array[i]);
  } else {
    number +=symbol[i];
    console.log("Число: " + number);
  }
}

if (number.length == 0 & array[array.length - 1] != 0 ) {
  incrementedString = array.join("") + 1;
} else {
  newNumber = +number +1;
  var newNumberStr = "" + newNumber;
  console.log("Длина нового числа: " + newNumberStr.length);
  console.log("Длина старого числа: " + number.length);

  if (newNumberStr.length == number.length) {
    incrementedString = array.join("") + newNumberStr;
  } else if ( newNumberStr.length != number.length & array[array.length - 1] == 0 ) {
    array.pop();
    console.log(array);
    incrementedString = array.join("") + newNumberStr;
  } else {
    incrementedString = array.join("") + newNumberStr;
  }
}
return incrementedString;
}
alert( incrementString("hello00") );
