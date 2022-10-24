/*
Scrivi un programma che stampi in console i numeri da 1 a 100, 
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

for(let i = 1; i <= 100; i++){
    //creo un div e gli assegno una classe
        const div = document.createElement(`div`);
        div.classList.add ("col");
        
        if (i % 3 == 0 && i % 5 == 0){
        //se il numero che stampo è multiplo di 3 e 5 stampo FizzBuzz
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
        //se il numero che stampo è multiplo di 3 stampo Fizz
            console.log("Fizz");
        }else if(i % 5 === 0){
        //se il numero che stampo è multiplo di 5 stampo Buzz
            console.log("Buzz");
        }else{
        //se nessuna delle condizioni sopra stampo il numero corrispondente ad i
        console.log(i);
        }
    }
//1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

//2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


