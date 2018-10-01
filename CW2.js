function getCount(str) {
    var vowelsCount = 0;
    for (var i = 0; i <= str.length; i++ ) {
        switch (str[i]) {
            case "a":
            vowelsCount += 1;
            case "e":
            vowelsCount += 1;
            case "i":
            vowelsCount += 1;
            case "o":
            vowelsCount += 1;
            
        }
        
        return vowelsCount;
    }
    
  }

alert( getCount("abracadabra") );
  /*
  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters
and/or spaces. 
  */

  /////TEST/////
/*
 describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
*/