'use strict';

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
    secretLetter = "x";
    return secretLetter;
}
console.log(secretLetter); // devuelve "x"
console.log(mySecretLetter()); // devuelve "x"


//Al cambiar el orden no se ha activado aún la función, por lo que conserva el valor original de la variable
