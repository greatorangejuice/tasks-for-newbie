function iqTest(numbers)
{
  var str = numbers.split(" ");
  var even = 0;
  var odd = 0;
  var countEven, countOdd;
  console.log(str.length);
  for ( var i = 0; i < str.length; i++){
    if (str[i] % 2 == 0){
      even += 1;
      countEven = i+1;
    } 
    else {
      odd +=1;
      countOdd = i+1;
    }
  }
  
  if (even < odd){
    return countEven;
  }
  else{
    return countOdd;
  }

}
alert(iqTest("2 4 7 8 10"));