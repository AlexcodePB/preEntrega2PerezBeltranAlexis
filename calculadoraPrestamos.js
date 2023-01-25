let usuaios = ["alexis","federico","sonia"];
let passwords = ["123", "222"];



function loggin(){
    let user = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña")

    if (usuaios == user && passwords == pass){
        alert("ingreso a su cuenta con exito");
    }
    else{
        alert("contra o usuario incorrectos");
    }
}