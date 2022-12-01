
function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(num){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num == ""){//values empty set output empty
        document.getElementById("output-value").innerText = num;
    }
    else
    {//convert to comma sepaerated value
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){//if (-)sign returns empty value
    if(num=="-"){
        return "";
    }

    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}


//convert comma seperated to original number
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i =0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id== "clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id== "backspace"){//converted to string to remove last char
            var output =reverseNumberFormat(getOutput()).toString();
            if(output){
                // if output has a value //
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else
        {
            var output= getOutput();
            var history= getHistory();
            if(output =="" && history !=""){//using NaN function remove last char using substr function
                if(isNaN(history[history.length-1])){
                    history=history.substr(0, history.length-1);
                }
            }
            if(output != "" || history !=""){

                //condition is true or false
                output= output==""?//converted to number format
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i =0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            //if output is a number
            output= output+this.id;
            printOutput(output);
        }
    });
}
