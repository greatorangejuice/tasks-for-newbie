var obj = {
    className: "menu"
};

function addClass(obj, cls) {
    var arr = obj.className.split(" ")
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != cls) {
            arr.push(cls);
        }
        return obj.className = arr.join(" ");
    }
    
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"