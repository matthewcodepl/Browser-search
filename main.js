let q = "testing google search";
let defaultSearch = "http://google.com/search?q=";
let btn = document.querySelector("#go");

btn.addEventListener('onclick', e => {
    window.open(`${defaultSearch}${q}`)
} )