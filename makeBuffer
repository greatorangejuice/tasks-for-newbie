function makeBuffer() {
    var str = "";
    
    function buffer(inputText) {
        return str += inputText;
    }
    
    buffer.clear = function() {
        return str = "";
    }
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
