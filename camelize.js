function camelize(str) {
    var arr = str.split("-");
    console.log(arr);

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
    }
    return arr.join("");
}



alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );