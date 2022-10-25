/*
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
const tableContainer = document.getElementById("table");

for(let i = 1; i <= 100; i++){
    //creo un div e gli assegno una classe
        const div = document.createElement(`div`);
        div.classList.add("col");

        if (i % 3 == 0 && i % 5 == 0){
    //se il numero che stampo è multiplo di 3 e 5 stampo FizzBuzz
            div.classList.add("col-fizz-buzz");
            // console.log("FizzBuzz");
            div.innerHTML = "FizzBuzz";
        }else if(i % 3 == 0){
    //se il numero che stampo è multiplo di 3 stampo Fizz
            div.classList.add("col-fizz");
            // console.log("Fizz");
            div.innerHTML = "Fizz";
        }else if(i % 5 == 0){
    //se il numero che stampo è multiplo di 5 stampo Buzz
            div.classList.add("col-buzz");
            // console.log("Buzz");
            div.innerHTML = "Buzz";
        }else{
    //se nessuna delle condizioni sopra stampo il numero corrispondente ad i
            console.log(i);
            div.classList.add("col-number");
            div.innerHTML = i;
        }
    //inserire l'item nel suo contenitore (tableContainer)    
        table.append(div);
    }



