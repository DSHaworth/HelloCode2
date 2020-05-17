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
