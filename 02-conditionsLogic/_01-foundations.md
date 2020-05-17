# [Conditions](https://www.w3schools.com/js/js_if_else.asp) and [Logic](https://www.w3schools.com/js/js_operators.asp)

## Conditions

1. Conditions rely on comparisons.
2. Comparisons will either be true or false

We use **Conditions** and **Logic** in our everyday life.

Condition only
* **If** gas level in car is on E, **then** get gas
* **If** outside temp is **less than** 32 degrees, **then** wear coat
* **if** outside temp is **greather than** 90 degrees, **then** wear shorts

Condition with additional logic

* **if** gas level in car is on E **AND** driving by gas station, **then** get gas.
* **if** outside temp is **less than** 32 degrees **AND** going outside, **then** wear coat.
* **if** outside tmpe is **greather than** 90 degrees **AND** going outside, **then** wear shorts



## `if, else, else if`

### `if`

    if(condition){
      // this gets executed if condition is true
    }

Example:
    
    var currentTemp = 25;

    if( currentTemp < 32){
      alert("Wear a coat");
    }

### `if, else`
    if(condition){
      // this gets executed if condition is true
    } else {
      // this gets executed if condition is false
    }

Example:

    var currentTemp = 33;

    if( currentTemp < 32 ){
      alert("Wear a coat");      
    } else {
      alert("No coat needed");
    }

### `if, else if, else`

    if(condition){
      // this gets executed if condition is true
    } else if ( another condition ) {
      // this gets executed if this new condition is true
    } else {
      // this gets executed if both conditions are false
    }

Example

    var currentTemp = 70;

    if( currentTemp < 32 ){
      alert("Wear a coat);      
    } else if ( currentTemp > 90 ) {
      alert("Wear shorts");
    } else {
      alert( "No coat or shorts needed." )
    }
