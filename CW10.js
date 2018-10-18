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





