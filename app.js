
let screen = document.getElementById("screen");


function item(value) {

    if (value === "X") {
        
        screen.value = screen.value.slice(0, -1);
    } 
    else if (value === "=") {
        
        try {
            screen.value = eval(screen.value)
        } catch {
            screen.value = "Error";
        }
    } 
    else if (value === "M+") {
        
        memory += Number(screen.value || 0);
    } 
    else if (value === "M-") {
        
        memory -= Number(screen.value || 0);
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
    else if(value==="%"){
        screen.value = eval((screen.value))/100;
    }
    else if(value==="^2"){
        screen.value = eval((screen.value))**2;
    }
    else {
        
        screen.value += value;
    }
}


let memory = 0;