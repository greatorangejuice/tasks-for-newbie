var countBits = function(n) {
  var numberInTen = n.toString(2)
  var stringNumber = numberInTen + "";
  var result = 0;
  for (var i = 0; i < stringNumber.length; i++) {
    if ( +(stringNumber.charAt(i)) == 1) {
      result += 1
    }  
  }
  return result;
};
alert( countBits(1234) );

// Decision from prof. countBits = n => n.toString(2).split('0').join('').length;