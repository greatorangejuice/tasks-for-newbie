function removeClass(obj, cls) {
    var arr = obj.className.split(" ");

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == cls) {
            arr.splice(i, 1);
            i--; // если удалим элемент массива, то позиции сместятся назад, 
                 // а значит нужно еще раз проверить элемент с тем же индексом.
        }
    }
    return obj.className = arr.join(" ");
}

var obj = {
    className: " open menu menu"
};

removeClass(obj, "menu");
alert(obj.className);