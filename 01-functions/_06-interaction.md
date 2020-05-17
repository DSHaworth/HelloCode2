# Interaction
## [Interacting with HTML](https://www.w3schools.com/js/js_events.asp)

### Simple button

    <button>Say Hi</button>

### Add an **onclick** event

    <button onclick="alert('Hello World!')">
      Say Hi
    </button>

**onclick** is a built-in HTML event attribute.

### Add your own JavaScript function

    <button onclick="sayHi()">
      Say Hi
    </button>

    <script>
    function sayHi(){
      alert("Hello World!")
    }
    </script>

### Setting text on HTML Element

    <button type="button" onclick="sayHelloClicked()">
      Say Hello World
    </button>
    <div id="greetingsDiv"></div>
    
    <script>
      function sayHelloClicked(){
        var greetingsVar = "Hello World!";  

        document
          .getElementById("greetingsDiv")
          .innerHTML = greetingsVar;
      }
    </script>

### Getting value from input

    <input type="text" id="name" />

    <button type="button" onclick="sayHi()">
      Say Hi
    </button>

    <div id="greetingsDiv"></div>
    
    <script>
      function sayHi(){
        var name = document
                     .getElementById("name").value;
        document
          .getElementById("greetingsDiv")
          .innerHTML = `Hi ${name}!`;
      }
    </script>

