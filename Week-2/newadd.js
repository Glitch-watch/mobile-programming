function mymarks(){
    let subject1 = Number(document.getElementById("Sub1").value);
    let subject2 = Number(document.getElementById("Sub2").value);
    let subject3 = Number(document.getElementById("Sub3").value);
    let subject4 = Number(document.getElementById("Sub4").value);
    let subject5 = Number(document.getElementById("Sub5").value);
    let subject6 = Number(document.getElementById("Sub6").value);
    let subject7 = Number(document.getElementById("Sub7").value);
    let subject8 = Number(document.getElementById("Sub8").value);

    let total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7 + subject8;

    document.getElementById("total").innerText = "Total Marks" + " " + total;

    if(total < 1000 && total < 0){
        document.getElementById("result").innerHTML = "total is invalid, check you marks and add again";
    }
    else if(total >= 700){
        document.getElementById("result").innerHTML = "You did Distinction"
        document.getElementById("result").style.color = "green";
    }
    else if(total >= 300 && total <= 699){
        document.getElementById("result").innerHTML = "You Passed";
        document.getElementById("result").style.color = "green";
    }
    else{
        document.getElementById("result").innerHTML = "You Failed";
        document.getElementById("result").style.color = "red";
    }
}

