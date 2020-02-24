# Functions
## What are Functions?

[JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

We've already seen two functions: **Number** and **parseInt**.  

Functions execute a particular task.

Here are some functions we've already seen from 02-Statements.

    Number("34")
    Number("34ab")
    parseInt("34")
    parseInt("34ab")
    
#### Say Hi

    alert("Hi")

#### Create your own functions

    function sayHi(){
      alert("Hi");
    }

    sayHi();

#### Add an "argument" (parameter)

    function sayHi(name){
      alert("Hi " + name);
    }

    sayHi("Duane");

#### Return a value

    function sayHi(name){
      return "Hi " + name;
    }

    var greeting = sayHi("Duane");

    alert( greeting );

#### More examples

    function toCelsius(f) {
      return (5/9) * (f-32);
    }

    function toFahrenheit(c) {
      return c * 9 / 5 + 32;
    }  

    var originalTemp = 98.6;
    var convertedTemp = toCelsius(originalTemp);
    console.info(convertedTemp);

    originalTemp = 0;
    convertedTemp = toFahrenheit(originalTemp);
    console.info(convertedTemp);

