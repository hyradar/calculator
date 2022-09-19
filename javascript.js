


//global variable for output value
let val1 = document.querySelector('.currentoperation').innerHTML;
let val2 = "";
let totalString = "";

let operationInProgress = new Boolean(false);
let addBool = new Boolean(false);
let divideBool = new Boolean(false);
let subtractBool = new Boolean(false);
let multiplyBool = new Boolean(false);

// Clear Button Logic
let clearButton = document.querySelector('.clearbutton');
clearButton.addEventListener('click', clearOperation);


//Delete Button Logic
let delButton = document.querySelector('.deletebutton');
delButton.addEventListener('click', deleteLast);


//Why is my addEventListener function firing immediately?!?!?! (You need to pass reference to the function. not the function itself)
//https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately

//Add, Subtract, Divide, Multiply Button Logic
document.getElementById("addbutton").addEventListener("click", function(){operation(this.id)});
document.getElementById("subtractbutton").addEventListener("click", function(){operation(this.id)});
document.getElementById("dividebutton").addEventListener("click", function(){operation(this.id)});
document.getElementById("multiplybutton").addEventListener("click", function(){operation(this.id)});

//Equals Button logic
document.getElementById("equalsbutton").addEventListener("click", function(){equals()})


function clearOperation() {
    document.querySelector('.currentoperation').innerHTML = 0;
    document.querySelector('.lastoperation').innerHTML = "";
    val1 = "0";
    val2 = "";
    addBool = false;
    subtractBool = false;
    divideBool = false;
    multiplyBool = false;
    operationInProgress = false;
}

function deleteLast() {
    
    if (operationInProgress == false && val1!= "") {
        val1 = val1.slice(0, -1)
        document.querySelector('.currentoperation').innerHTML = val1;
    }
    else if (operationInProgress == true && val2!= "") {
        val2 = val2.slice(0, -1)
        document.querySelector('.currentoperation').innerHTML = val2;
    }
}

function concatenateInput(id) {
    
    //Deletes 0 when a button is pressed
    if (val1 === "0") {
        val1 = "";
        document.querySelector('.currentoperation').innerHTML = val1;
    }

    switch(id) {
        case "onebutton":
            if (operationInProgress == false) {
                val1 = val1 + "1";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "1"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "twobutton":
            if (operationInProgress == false) {
                val1 = val1 + "2";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "2"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "threebutton":
            if (operationInProgress == false) {
                val1 = val1 + "3";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "3"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "fourbutton":
            if (operationInProgress == false) {
                val1 = val1 + "4";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "4"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "fivebutton":
            if (operationInProgress == false) {
                val1 = val1 + "5";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "5"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "sixbutton":
            if (operationInProgress == false) {
                val1 = val1 + "6";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "6"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "sevenbutton":
            if (operationInProgress == false) {
                val1 = val1 + "7";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "7"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "eightbutton":
            if (operationInProgress == false) {
                val1 = val1 + "8";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "8"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "ninebutton":
            if (operationInProgress == false) {
                val1 = val1 + "9";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "9"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "zerobutton":
            if (operationInProgress == false) {
                val1 = val1 + "0";
                document.querySelector('.currentoperation').innerHTML = val1;
            }
            else {
                val2 = val2 + "0"
                document.querySelector('.currentoperation').innerHTML = val2;
            }
            break;
        case "periodbutton":
            if (operationInProgress == false && document.querySelector('.currentoperation').innerHTML.includes('.') == false) {
                val1 = val1 + ".";
                document.querySelector('.currentoperation').innerHTML = val1;
                break;
            }
            else if (document.querySelector('.currentoperation').innerHTML.includes('.') == false) {
                console.log("else if is firing");
                val2 = val2 + "."
                document.querySelector('.currentoperation').innerHTML = val2;
                break;
            }
    }
}


function operation(id) {

    switch(id) {
        case ("addbutton"):

            document.querySelector('.lastoperation').innerHTML = val1 + " +";
            operationInProgress = true;
            addBool = true;
            break;
            console.log("addBool is " + addBool);
        case ("subtractbutton"):
            
            document.querySelector('.lastoperation').innerHTML = val1 + " -";
            operationInProgress = true;
            subtractBool = true;
            break;
        case ("dividebutton"):
            
            document.querySelector('.lastoperation').innerHTML = val1 + " /";
            operationInProgress = true;
            divideBool = true;
            break;
        case ("multiplybutton"):
            
            document.querySelector('.lastoperation').innerHTML = val1 + " ×";
            operationInProgress = true;
            multiplyBool = true;
            break;
    }
}

function equals() {

    let x = document.querySelector('.lastoperation').innerHTML;
    x = x + val2; 
    if (val1 != null && val2 != null && operationInProgress == true) {
        let int1 = parseFloat(val1);
        let int2 = parseFloat(val2);
        let total = parseFloat(totalString);
        
        if (addBool == true) {
            total = int1 + int2;
            document.querySelector('.lastoperation').innerHTML = document.querySelector('.lastoperation').innerHTML + " " + val2  + " =";
            document.querySelector('.currentoperation').innerHTML = total;
            operationInProgress = false;
            addBool = false
        }
        else if (subtractBool == true) {
            total = int1 - int2;
            document.querySelector('.lastoperation').innerHTML = document.querySelector('.lastoperation').innerHTML + " " + val2  + " =";
            document.querySelector('.currentoperation').innerHTML = total;
            operationInProgress = false;
            subtractBool = false
        }
        else if (divideBool == true) {
            if (int1 != 0 && int2 != 0) {
                total = int1 / int2;
            }
            else {
                total = 0;
            }
            document.querySelector('.lastoperation').innerHTML = document.querySelector('.lastoperation').innerHTML + " " + val2  + " =";
                document.querySelector('.currentoperation').innerHTML = total;
                operationInProgress = false;
                divideBool = false
        }
        else if (multiplyBool == true) {
            total = int1 * int2;
            document.querySelector('.lastoperation').innerHTML = document.querySelector('.lastoperation').innerHTML + " " + val2  + " =";
            document.querySelector('.currentoperation').innerHTML = total;
            operationInProgress = false;
            multiplyBool = false
        }
    }
}