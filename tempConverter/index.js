let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let result = document.getElementById("result");
let value;
let temp;

function convert(){
    value = Number(document.getElementById("value").value);
    if (isNaN(value)){
        result.textContent = "Please Enter A Valid Number";
    }
    else{
        if (ctof.checked){
            temp = 9/5*value + 32;
            result.textContent = temp.toFixed(2) + "°F";
        }
        else if(ftoc.checked){
            temp = (value - 32) * 5/9;
            result.textContent = temp.toFixed(2) + "°C";
        }
        else{
            result.textContent = "Please Select A Conversion";
        }
    }
}