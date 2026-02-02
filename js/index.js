const text = document.getElementById("UserName");

let name = "";

name = prompt("What is your name?")

    while(!name || !name.trim()){
    alert("Please enter a valid name")
    name = prompt("What is your name?")
}

text.textContent = "Welcome " + name