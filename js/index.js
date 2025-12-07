const text = document.getElementById("UserName");

let name = "";

while(!name.trim()){
    name = prompt("What is your Username?");
}

text.textContent = "Welcome " + name