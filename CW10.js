<<<<<<< HEAD
// function disemvowel(str) {
//     return str;
//   }
=======
function disemvowel(str) {
let vowels = ["a", "i", "o", "u", "e"];
let words = str.split("");
let newStr = "";

  for ( let i = 0; i < words.length; i++ ) {
      let word = words[i];
      if ( vowels.indexOf(word.toLowerCase()) == -1 ) {
      newStr += word;
      }
  }
  return newStr;
}
>>>>>>> 680a59f83018739da26185f3c45af02a571ca018




<<<<<<< HEAD
//   Test.assertEquals(disemvowel("This website is for losers LOL!"),
//   "Ths wbst s fr lsrs LL!")



// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

undefined = true; // устанавливаем мину для другого кода! остерегайтесь!

(function IIFE( undefined ){

	var a;
	if (a === undefined) {
		console.log( "Undefined is safe here!" );
	}

})();
=======

>>>>>>> 680a59f83018739da26185f3c45af02a571ca018
