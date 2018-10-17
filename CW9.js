function toWeirdCase(string) {
    let arr = string.split(" "); 
    console.log(arr.length); 
    let newString = ""; 

    for ( let i = 0; i < arr.length; i++ ) {
        let word = arr[i];
        for ( let j = 0; j < word.length; j++ ) {  
            if ( j % 2 == 0 ) {
                newString += word.charAt(j).toUpperCase();
            } else {
                newString += word.charAt(j).toLowerCase();
            } 
        }
        if ( i < arr.length - 1 ) newString += " ";
    }   
    return newString; 
}

alert( toWeirdCase("String case level pow") );