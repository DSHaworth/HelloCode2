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

#### Strings
Type out each line below in the **console**

    "Duane" + "Haworth"
    "Duane" + " " + "Haworth"
    "Haworth" + ", " + "Duane"

That's great if you only deal with 5 or "Lastname" and "Firstname".

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

    "5" * 5
    "5" / "5"
    "5" - "5"
    "5" + "5"
    Number("5") + Number("5")
    parseInt("5") + parseInt("5")

