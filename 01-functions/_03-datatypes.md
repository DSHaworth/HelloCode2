# [Data Types](https://www.w3schools.com/js/js_datatypes.asp)

We saw in the previous section that "5" is not the same as 5.

We understand what data types are, which is why the following sentence doesn't make any sense.

> "What color does the number 4 smell like?"

**JavaScript** understands many data types.  For your programs to work, you'll need to make it clear to JavaScript what data types you're using.

## Strings

A string is a series of characters surrounded by double quotes ("") or single quotes('');

     var firstName = "Duane";
     var lastName = 'Haworth';

     //What if your last name is O'Neil?
     var lastName = "O'Neil";
     var lastName = 'O\'Neil';

## Numbers
There is only one type of number in JavaScript.

    var age = 52;
    var age = 52.342
    
    // Scientific Notation
    var y = 123e5; //12300000
    var z = 123e-5 // 0.00123

**Hint**

If you don't do any math on a number, it's a string.

    // Phone Nubmer
    var phoneNumber = 555-555-5555;  // -5555
    var phoneNumber = "555-555-5555";

    // Date of birth (Technically not true)
    var dob = 7/4/1776; //0.0009853603603603603
    var dob = "7/4/1776";

## Boolean

Booleans are only **true** or **false**

    var isUserValid = true;
    var isUserActive = false;

We'll learn a lot more about booleans later

## Objects

There are many types of objects in JavaScript.

An object can have **properties** and **methods**.

<dl>
  <dt>Properties</dt>
  <dd>Properties store a value</dd>

  <dt>Methods</dt>
  <dd>Methods execute an action.  Method will end with ( )</dd>  
</dl>

### String

Strings are objects.  They have "built-in" properties and methods.

1. Go to Chrome and open Developer Tools (F12).
2. Select **Console**
3. Type in the following

Note the results after pressing **Enter**

    "test".  //What do you see here?
    "test".length   // Property - displays property value
    "test".toUpperCase()  // Method - Does something

### Date

Date is not a string, but it's not a number either (kind of is).

We're going to create an instance of a Date object that will give us the data/time of when it was created.

    var today = new Date();
    today.  //What do you see there?
    today.toDateString();


### Custom

You can create your own object.  All it takes are a few curly braces with key:value pairs.

    var person = {
      firstname: "Duane",
      lastname: "Haworth",
      email: "DuaneHaworth@gmail.com"
    }

    person.   // What do you see here?

## Arrays

Arrays store a "list" of something.

    var pets = ["Emily", "Roxy", "Daisy", "Harley"];
    var deposits = [123.43, 432.34, 342];
    var x = ["Emily", 7, "Roxy", 5];
    var people = [
      {fname: "Duane", lname: "Haworth"},
      {fname: "John", lname: "Doe"},
      {fname: "Jane", lname: "Doe"}
    ];

Go to Chrome's Developer tools and look at some of the features associated with an array.

    var pets = ["Emily", "Roxy", "Daisy", "Harley"];
    pets.  // What do you see here?
    pets.length  // Property
    pets.sort()  // Method
    pets.indexOf("Emily")    

    // Advanced Stuff
    pets.find((pet) => {return pet === "Emily"});
    pets.filter((pet) => {return pet === "Emily"});



## Undefined
Variable has been declared, but no value assigned, so it doesn't know what it is yet.

## Null
No value