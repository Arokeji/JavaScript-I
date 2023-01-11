

//Ejercicio 1
console.log("\n-------------------------------\nEjercicio 1\n-------------------------------\n");

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let i of vocales){
        str = str.replaceAll(i, "");
    }
    
    return(str);
}

console.log(noVowels(sentence));


//Ejercicio 2
console.log("\n-------------------------------\nEjercicio 2\n-------------------------------\n");

/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){

    if(word.length % 2 == 0){
        return (word[word.length/2 - 1] + word[word.length/2]);
    } else {
        return (word[parseInt(word.length/2)]);
    };
}

console.log(middleCharacter(word));

//Ejercicio 3
console.log("\n-------------------------------\nEjercicio 3\n-------------------------------\n");

/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sent = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    return (str.slice(1, str.length-1));
}

console.log(deleteFirsLast(sent));

//Ejercicio 4
console.log("\n-------------------------------\nEjercicio 4\n-------------------------------\n");

/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    let sum = 0;

    for (let i of list) {
        sum += i;
    }

    return(sum);
}

console.log(sumList(numberList));

//Ejercicio 5
console.log("\n-------------------------------\nEjercicio 5\n-------------------------------\n");

/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
    let maxPoints = 0;
    let bestPlayer;

    for (let i of list){
        if(i.score > maxPoints){
            maxPoints = i.score;
            bestPlayer = i;
        }
    }
    
    return(bestPlayer);
}

console.log(winner(playerList));

//Ejercicio 6
console.log("\n-------------------------------\nEjercicio 6\n-------------------------------\n");

/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    list1 = list1.concat(list2);
    let barn = {
        nOvejas: 0,
        nVacas: 0
    }

    for(let i in list1){
        (list1[i] == "o") ? barn.nOvejas++ : barn.nVacas++;
    }

    return (barn);
}

console.log(counter(rebano1, rebano2));