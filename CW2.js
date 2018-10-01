function getCount(str) {

    var vowelsCount = 0;
    console.log(str.length);

    for (var i = 0; i <= str.length; i++ ) {
        switch (str[i]) {
            case "a":
            vowelsCount += 1;
            break;
            case "e":
            vowelsCount += 1;
            break;
            case "i":
            vowelsCount += 1;
            break;
            case "o":
            vowelsCount += 1;
            break;
            case "u":
            vowelsCount += 1;
            break;
            
        }
    }
    return vowelsCount;
  }

alert( getCount("o a kak ushakov lil vo kashu kakao") );
  /*
  Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters
and/or spaces. 
  */

  
 function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }