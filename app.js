
let screen = document.getElementById("screen");


function item(value) {

    if (value === "X") {
        
        screen.value = screen.value.slice(0, -1);
    } 
    else if (value === "=") {
    try {
        let result = eval(screen.value);
        
        screen.value = parseFloat(result.toFixed(6)); 
    } catch {
        screen.value = "Error";
    }
    }
    else if (value === "M+") {
        
        memory += Number(screen.value || 0);
        screen.value = "";
    } 
    else if (value === "M-") {
        
        memory -= Number(screen.value || 0);
        screen.value = "";
    } 
    else if (value === "M") {
        
        screen.value = memory;
    } 
    else if(value ==="c"){
        screen.value = "";
    }
    else if(value==="r"){
        screen.value = "";
        memory=""
    }
    else if(value==="sqrt"){
        screen.value = Math.sqrt(eval(screen.value));
        let result = eval(screen.value);
        screen.value = parseFloat(result.toFixed(6));
        if(screen.value=NaN){
            screen.value = "";
        }
    }
    else if(value==="^2"){
        screen.value = eval((screen.value))**2;
        if(screen.value=NaN){
            screen.value = "";
        }
    }
    else {
        
        screen.value += value;
    }
}


let memory = 0;
