function sumDigPow(a, b) {
  
  var powNumber = 0;
  var resultArray = [];

  for (; a <= b; a++) {
    var value = a + "";
    var exp = value.length;
    var pos = value.length - 1;

    for (; exp > 0; exp--) {
      var newNumber = +(value.charAt(pos));
      powNumber += Math.pow(newNumber, exp);
      pos--;
      if ( powNumber == a & pos == -1 ) {
        resultArray.push(a);
      }
    }
    newNumber = 0;
    powNumber = 0;
  }
  console.log(resultArray);
}
sumDigPow(1,1000);