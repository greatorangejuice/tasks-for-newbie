function Machine(power) {
    this._power = power;
    this._enabled = false;
    

    this.enable = function() {
        this._enabled = true;
    };
    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power, capacity) {
    Machine.apply(this, arguments);

    var waterAmount = 0;
    var timerId;
  
    this.setWaterAmount = function(amount) {
        if(amount > capacity) {
            throw new Error("Превышен объем воды!");
        }
        waterAmount = amount;
        
    }

    function onReady() {
        alert("Кофе готов!")
    }
    this.setOnReady = function(newFunc){  // user output
        onReady = newFunc;
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("Кофемашина выключена!");
        };
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
          }, getTimeToBoil());
    }

}

var coffeeMachine = new CoffeeMachine();
coffeeMachine.enable();
coffeeMachine.run();