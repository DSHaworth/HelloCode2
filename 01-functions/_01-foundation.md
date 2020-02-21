# Programming Foundations
## What is Programming

In simple terms, programming is telling a computer what to do.

But, in a way the computer understands.

* Syntax - Rules of the language (JavaScript)
* Data Types - Numbers vs Text vs boolean(true/false) vs etc
* Key words - Words the language already uses (function, for, loop)
* Operators - *, +, /, -, %, ++, --, **
* Decision Making (if, if else, else)
* Loops - for, while, do while
* Variables - Hold values
* Arrays - list of things
* Objects
* Statements
* Functions
* Comments

**Comments** are not executed.  They can explain the code or keep something from executing.

**Statements** are a building block, like a lego piece.

**Functions** execute a task, which can be a series of Statements.

**Basic Operators** do calculations.

**Loops** go through a list of things.

**Decisions** are used to perform a specific task based on some criteria.

**Objects** are containers for things.

### Demo Program
Don't worry about understanding what you're looking at.

    // This is a single line comment
    /*
    This is a multi-line comment.
    It can go on and on.
    */

    // Define an array of objects
    var products = [
      { 
        "name": "Widget A",
        "price": 9.88,
        "isTaxed": true,
        "quantity": 0
      },
      { 
        "name": "Widget B",
        "price": 3.88,
        "isTaxed": true,
        "quantity": 0
      },
      { 
        "name": "Widget C",
        "price": 12.00,
        "isTaxed": false,
        "quantity": 1
      }  
    ];  
    // Define taxRate variable
    var taxRate = 0.075;

    // Create a function to calculate total
    function checkOut(){

      // Declare variables to hold 
      var grandTotal = 0;

      // Loop through all the objects in array
      for(var idx = 0 ; idx < products.length ; idx++){
        // If quantity is > 0, calculate cost
        if(products[idx].quantity > 0){

          // Get tempTotal by multiplying price * quantity
          var tempTotal = products[idx].price * products[idx].quantity;
          
          // If item is taxable, calculate tax amount
          if(products[idx].isTaxed){
            // multiply tempTotal by taxRate
            tempTotal += (tempTotal *= taxRate);
          }
          // Add tempTotal to grandTotal
          grandTotal += tempTotal;
        }
      }

      // Display Output
      console.log("Grand total is: " + grandTotal);
    }

    // Execute the function    
    checkOut();

This short program demonstrates all the basics for a computer program.

Here's the **algorithm** for the code above

1. Initialize variables
2. Loop through products
   1. If quantity greater than 0
      1. Calculate Cost
      2. If item is taxable
         1. Calculate Tax
      3. Add cost to grandTotal
3. Display grandTotal
