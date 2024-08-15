function num(value) {
    const calcu = document.getElementById('inbox');
    if (calcu.value == "0") {
        calcu.value = value;
    } else {
        calcu.value += value;
    }
}

function opp(operator) {
    const calcu = document.getElementById('inbox');
    calcu.value += " " + operator + " ";
}
function clearn() {
    document.getElementById('inbox').value = "0";
}
function process() {
    const calcu = document.getElementById('inbox');
    try {
        calcu.value = eval(calcu.value);
    } catch (error) {
        calcu.value = "Error";
    }
}
function slice(){
    const calcu = document.getElementById('inbox');
    calcu.value = calcu.value.slice(0,-1);
}
                  
