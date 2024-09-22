let inc = document.getElementById('inc');
let reset = document.getElementById('reset');
let dec = document.getElementById('dec');
let label = document.getElementById('label');
let count = 0;


inc.onclick = ()=>{
    count++;
    label.textContent = count;
}

dec.onclick = ()=>{
    count--;
    label.textContent = count;
}

reset.onclick = ()=>{
    count = 0;
    label.textContent = count;
}