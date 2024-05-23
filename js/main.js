let bienvenida= alert('Bienvenidos a mi sitio');
let pregunta = confirm ('Estas seguro que queres avanzar?');

if (pregunta ==true) {
    document.querySelector('.saludo').innerText = ('Que alegría que quieras continuar con la visita');
} else{
    document.querySelector ('.saludo').innerText = ('Lamentamos que no quiera continuar tu visita');    
}

let nombre = prompt ('Ingresa tu nombre');

document.querySelector ('h1').innerText = 'Bienvenido ' + nombre;

let edad = prompt ('Cuantos años tenes?');


//ANOTACIONES Y PRUEBAS DE CODIGO

// if (edad > 17) {
//         document.querySelector ('.container_general');
//         let programacion = confirm ('Te gusta la programacion?');
//         let gusto = programacion;
// if (gusto == true) {
//         let imagen= document.querySelector ('.container background-img');
//         imagen.style.backgroundImage = "url('../img/gatito.jpeg')";
//     }
// } else if (edad <= 18){
//     let div = document. querySelector ('.container_general');
//       div.style.display = 'none';
//       document. querySelector ('#accesoDenegado'). innerText = 'Tenes prohibido el acceso';   
// }

if (edad >= 18) {
   let divGral = document.querySelector ('.container-general');
   divGral.style.display = 'block';
   let programacion = confirm ('Te gusta la programacion?');
 if (programacion) {
    let backgroundImg = document.querySelector ('.container-background-img');
    backgroundImg.style.backgroundImage = "url('./img/gatito.jpeg')";
 } else {
    let backgroundImgDos = document.querySelector ('.container-background-img');
    backgroundImgDos.style.backgroundImage = "url('./img/programmer.jpeg')";
 }
    let imagenUsuario = prompt ('Indicanos la imagen que deseas utilizar por URL: ');
     let avatar = document.querySelector ('.avatar');
     avatar.src = imagenUsuario;

     let nombre = prompt ('Cual es el nombre de tu pelicula favorita?');
     let director = prompt ('Quien es el director de la pelicula?');
     let duracion = parseFloat (prompt('Cuanta es la duracion de la pelicula?'));
     let actor = prompt ('Quien es el actor de la pelicula?');
     
     let pelicula = {
        nombre:nombre,
        director:director,
        duracion:duracion, 
        actor:actor,
    }
   
    document.querySelector ('#nombre'). innerText = 'Nombre = ' + pelicula.nombre;
    document.querySelector ('#director'). innerText = 'Director = ' + pelicula.director;
    document.querySelector ('#duracion'). innerText = 'Duracion = ' + pelicula.duracion;
    document.querySelector ('#actor'). innerText = 'Actor = ' + pelicula.actor;

    document.querySelector ('#pelicula.contenido-bloqueado').style.display = 'block';

} else if (edad < 18){
    let div = document.querySelector('.container-general');
    div.style.display = 'none';
    let divD = document.querySelector('#accesoDenegado');
    divD.style.display = 'block';   
}




//ANOTACIONES Y PRUEBAS DE CODIGO


// let programacion = confirm ('Te gusta la programacion?');
//     let gusto = programacion;
// if (gusto == true) {
//     let imagen= document.querySelector ('.container background-img');
//     imagen.style.backgroundImage = "url('../img/gatito.jpeg')";
// }

// let programacion = confirm ('Te gusta la programacion?');
//  if (programacion) {
//     let backgroundImg = document.querySelector ('.container-background-img');
//     backgroundImg.style.backgroundImage = "url('./img/gatito.jpeg')";
//  } else {
//     let backgroundImgDos = document.querySelector ('.container-background-img');
//     backgroundImgDos.style.backgroundImage = "url('./img/programmer.jpeg')";
//  }



// LINEA CODIGO : 45-50
//SEGUNDA OPCION PARA HACERLO = 
// let imagenUsuario = prompt ('Indicanos la imagen que deseas utilizar por URL: ');
// document.querySelector ('avatar').src = imagenUsuario;
