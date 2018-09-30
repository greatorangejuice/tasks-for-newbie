function iqTest(numbers)
{
  var str = numbers;
  var even = 0;
  var odd = 0;
  var countEven, countOdd;
  console.log(str.length)
  for ( var i = 0; i < str.length; i++){
    if (str[i] % 2 == 0){
      even += 1;
      countEven = i;
    } 
    else {
      odd +=1;
      countOdd = i;
    }
  }
  if (even < odd){
    return countEven;
  }
  else{
    return countOdd;
  }

}
alert(iqTest("2 4 7 8 10")); // прога не правильно считывает цифры

// Найти способ выделять отдельно числа, где-то был способ
// разделить строки