
let count = 0;
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    
    let currentCounter = count +" - ";
    saveEL.textContent += currentCounter;
    countEl.textContent = 0;
    count = 0;
}
