
alert( anagrams("hello", ["asd", "hello"]) );

function anagrams(word, words) {
    var result = [];
    var arrayWord = word.split('').sort();
    console.log(word);
    console.log(words);
    
    for (let i = 0; i < words.length; i++) {
        var temporaryArray = words[i].split('').sort();
        console.log(temporaryArray);
        if (arrayWord[0] == temporaryArray[0]) {
            result.push(words[i]);
        }
    }
    return result;
}