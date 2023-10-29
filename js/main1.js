//Objects
//key-value pairs in curly braces

//              key    key-value
const myObj = { name: "Janus" };

const anotherObj = {
    subscriber: true,
    no: 10000,
    content: {
        earn: "JS",
        grow: "Stocks"
    },
    subdivisions: ["Earn", "Grow", "Give"],
    action: function () {
        return `Earn by learning ${this.content.earn}`;
    }
}

console.log(myObj.name);
console.log(anotherObj.action());


const vehicle = {
    doors: 2,
    engine: function () {
        return "Vrrooom!";
    }
};

console.log(vehicle.engine());

const car = Object.create(vehicle);
car.wheels = 4;

car.engine = function () { return "Whooosh" };

console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () { return "Shhhh" };
console.log(tesla.engine());


const movie = {
    actor: "Vijay",
    music: "ARR",
    director: "Lokesh",
    producer: "Anbu"
};

delete movie.producer;
console.log(movie.hasOwnProperty("producer"));  // true or false

console.log(Object.keys(movie));
console.log(Object.values(movie));

//for in loop
for (let job in movie) {
    console.log(`${job}, It's ${movie[job]}`);
}

//destructuring the objects

const { music: myFavMusic, director: myFavD } = movie;
console.log(myFavMusic, myFavD);

const { actor, music, director } = movie;
console.log(actor);
console.log(music);
console.log(director);

// const { music } = movie;
function sings({ music }) { return music; };
console.log(sings(movie));


//Classes

const myPizza1 = {
    size: "medium",
    crust: "original",
    bake: function () {
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

myPizza1.bake();

class Pizza {
    constructor(typePizza, sizePizza, crustPizza) {
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = crustPizza;
        this.toppings = [];
    }

    getToppings() {
        return this.toppings;
    }
    setToppings(toppingsPizza) {
        this.toppings.push(toppingsPizza);
    }
    bake() {
        return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}.`);
    }
}

const myPizza = new Pizza("margarita", "small", "thin");
myPizza.setToppings("Sausage");
myPizza.setToppings("Egg");
console.log(myPizza.getToppings());
myPizza.bake();
console.log(myPizza.getToppings());


//parent class
class Pizza1 {
    constructor(sizePizza1) {
        this.size = sizePizza1;
        this.crust1 = "original";
    }

    getCrust() {
        return this.crust1;
    }

    setCrust(crustPizza1) {
        this.crust1 = crustPizza1;
    }
}

//child class
class SpecialPizza1 extends Pizza1 {
    constructor(sizePizza1) {
        super(sizePizza1);
        this.type = "Margarita";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} ${this.crust1} pizza has 8 slices`);
    }
}

const myspecialPizza1 = new SpecialPizza1("medium");
myspecialPizza1.slice();




//Errors and Errors Handling


//reference error
// variable = "Janus";
"use strict";

const variable = "Janus";
console.log(variable);

//syntax error
// Object..create();

//type error
// variable = "James";  //same variable name