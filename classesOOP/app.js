/// Object Prototypes = are the mechanism by
/// which JS objects inherit features from
/// one another.


/// Intro to Object Oriented Programming:
/// "Organizing our code and structuring our
/// application by breaking things up into 
/// distinct patterns of objecss" -Colt


/// Constructor Functions: 
/// All of below is crap and why JS came up 
/// with the Class system.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
/// & the 'New' operator
var car1 = new Car('Jeep', 'Wagoneer', 2022);

console.log(car1.make);
// Jeep


/// Creates rgb or hex colors:
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

color2.hex()


/// Same output as above with Constructor 
/// functions, but Classes in JS has
/// better looking syntax.
/// I give you: JavaScript Classes..

/// 'class Colors' is a Prototype that has 
/// the constructor function which runs First
/// Also added several functions onto the 
/// prototype to use as well. On the new object
class Colors {
    constructor(r, g, b, name) {
    console.log("Inside Constructor for each COLOR!")
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    }
    innerRBG() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRBG()})`;
    }
    hex() {
        const { r, g, b } = this;
        return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    greet() {
        return `HELLO from ${this.name}!!!`;
    }
}
/// Making new objects from the above Prototype
const red = new Colors(255, 67, 89, 'tomato');
const white = new Colors(255, 255, 255, 'white');

white.greet();
/// HELLO from white


/// Extends keyword:
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}
/// 'extends' the 'constructor functionality 
/// from Pet prototype from above.
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        // super will call/re-use the 
        // functionality from 'constructor'
        // from above's Pet class proto.
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
    return 'MEOWWWW!';
    }
}

class Dog extends Pet {
    bark() {
    return 'Ruff Ruff!';
    }
    /// this duplicate function of eat(), will
    /// execute here locally Vs. the Pet
    /// prototype globally.
    eat() {
        return `${this.name} scarfs their food!!!`;
    }
}


/// Super keyword: Will reference from the 
/// class that we are Extending from.
/// *In above example line 103.
