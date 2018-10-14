var arr = [1, 2, 2]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum*sum + current;
// }, 0);

// alert( result )




function squareSum(numbers) {
  var sum = 0;

  for ( var i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2)
    console.log(sum);
  }
  return sum;
}

alert(squareSum(arr));

