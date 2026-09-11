function calculate(operator){

    let f1 = Number (document.getElementById("first").value);
    let f2 = Number (document.getElementById("second").value);
    let result;

    if (operator === 'add'){
        add = f1 + f2;
        result = add;
    }
    else if(operator === 'subtract'){
        subtract = f1 - f2;
        result = subtract;
    }
    else if(operator === 'divide'){
        divide = f1/f2;
        result = divide;
    }
    else{
        multiply = f1*f2;
        result = multiply;
    }
    document.getElementById("result").innerText = result;
}