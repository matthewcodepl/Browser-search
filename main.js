/*
- Strona zmienia motyw w zależności od godziny
- Ustawiony zegar na stronie
-znaleźć ładną grafikę/grafiki
*/

let defaultSearch = "http://google.com/search?q=";
let input = document.querySelector(".inp");

// let btnLink = document.querySelector('#link');

function search() {
    window.open(`${defaultSearch}${q}`);

}


if(input.value > 0) {
    btn.addEventListener('input', search, false);

}





function showClock() {
    /*
        Get the time from object of Date
    */
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const header = document.querySelector(".top");
        if ( hours > 24) {
        hours = 01

    } 

    hours < 10 ?  hours =  `0 ${hours}` : hours;
    minutes < 10 ? minutes = `0 ${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}`: seconds;

    let time = `${hours} : ${minutes} : ${seconds}`;


   document.querySelector("#clock").textContent = time;

   


    setTimeout(showClock, 1000);

}

showClock();
