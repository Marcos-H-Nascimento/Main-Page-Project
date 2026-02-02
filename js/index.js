const text = document.getElementById("UserName");

let name = "";

name = prompt("What is your name?")

    while( name == "" || !name ){
        alert("Place a valid name please")
        prompt("What is your name?")
    }

text.textContent = "Welcome " + name