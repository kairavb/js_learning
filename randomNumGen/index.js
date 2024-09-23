let roll = document.getElementById("roll");
let label = document.getElementById("label");

roll.onclick = ()=>{
    let minval = Number(document.getElementById("min").value);
    let maxval = Number(document.getElementById("max").value);
    let num = Math.floor(Math.random() * (maxval-minval+1)) + minval;
    label.textContent = num;
}
