# Chapter 1 Statements
## What are Statements?

[JavaScript Statements](https://www.w3schools.com/js/js_statements.asp)

A JavaScript "statement" is an instruction executed by the web browser.

A JavaScript "program" is a series of instructions.

### Simple Statements
****
1. Open Chrome
2. Press **(F)(Cmd)12**
3. Click **Console** tab
****
#### Numbers
Type out each line below in the **console**

    5 + 5
    5 * 5
    5 / 5
    5 - 5
    5 + 5 * 5
    (5 + 5) * 5

#### [Operator Precedence](https://www.w3schools.com/js/js_arithmetic.asp)

>Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
>
>And (as in school mathematics) the precedence can be changed by using parentheses:

#### Strings
Type out each line below in the **console**

    "Firstname"
    "Lastname"

    // "Concatenation" - Joining strings together
    "Firstname" + "Lastname"
    "Firstname" + " " + "Lastname"
    "Lastname" + ", " + "Firstname"

That's all great if you only deal with 5 or "Lastname" and "Firstname".

### Variables
#### Numbers
    var number = 5
    number + number
    number * number
    number / number
    number - number
    number + number * number
    (number + number) * number

#### Strings
    var firstname = "Duane";
    var lastname = "Haworth"

    firstname + lastname
    firstname + " " + lastname
    lastname + ", " + firstname

### Forgiving Nature of JavaScript

    "5" * 5   // JavaScript assumes 5
    "5" / "5" // JavaScript assumes 5
    "5" - "5" // JavaScript assumes 5

    // We learned above that + on strings joins strings together.
    "5" + "5" // These are two string values
    "5" + 5   // This is still joining a string

    // So how do we add string values together?
    // Convert them to numbers.
    Number("5") + Number("5")
    parseInt("5") + parseInt("5")

**Number** and **parseInt** are functions(methods) that do something.  (Convert a string to a number).

## While in Chrome's Console

### Objects

An **Object** is a thing, like a noun.

Objects have

* Properties (name/value pairs)
* Methods (verbs)

In Chrome console, type:

    "Las Vegas".

What happened when you hit the period?

Experiment by typing in the following

    "Las Vegas".length
    "Las Vegas".toUpperCase()
    "Las Vegas".toLowerCase()
    "    Las Vegas    ".length
    "    Las Vegas    ".trim()
    "    Las Vegas    ".trim().length()
    "Las Vegas".split(" ")
    "Las Vegas".split(" ").length

