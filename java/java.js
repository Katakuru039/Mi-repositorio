
let edad= prompt ("ingrese su edad:");

if (edad>=18){
    console.log ("sos mayor de edad?"); 
}else{ 
    console.log ("sos menor de edad, no podes estar aca"); 
}

alert ("Hola nuevo usuario, espero que disfrutes tu estancia");
//alert ("Hola mundo");

let prro = 5;
let prrito = 14;
let prrote = prro + prrito;
console.log (prrote);

function unaFuncion() {
    console.log(1);
    return "Hola";
}

const saludo = unaFuncion();
console.log(saludo);


window.addEventListener("laod", function(){

//mouseover
document.getElementById("boton").addEventListener("mouseover", function(){
    document.getElementById("mensaje").innerHTML = "Hello World ";
})

});
