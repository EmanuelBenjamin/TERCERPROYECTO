let botonuno = document.getElementById("botonuno")
let color = document.getElementById("color")
let nombrecolores = document.getElementById("nombrecolores")

let paletadecolores = ["black" ,"red", "blue","yellow","pink","lightGray","drakGray","green", "magenta","cyan", "orange", "purple","IndianRed","MediumVioletRed","Gold","Fuchsia", "BlueViolet","Lime","MediumAquamarine","Peru",];
let random = 0;

botonuno.addEventListener("click", ()=>{
random = Math.floor(Math.random()*paletadecolores.length);
document.getElementById("color").style.background = paletadecolores[random];
document.getElementById("nombrecolores").textContent  = paletadecolores[random];

});

