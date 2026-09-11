function mymarks(){
    let s1 = document.getElementById("Sub1").value;
    let s2 = document.getElementById("Sub2").value;
    let s3 = document.getElementById("Sub3").value;
    let s4 = document.getElementById("Sub4").value;
    let s5 = document.getElementById("Sub5").value;
    let s6 = document.getElementById("Sub6").value;
    let s7 = document.getElementById("Sub7").value;
    let s8 = document.getElementById("Sub8").value;

    if(s1 == "" || s2 == "" || s3 == "" || s4 =="" || 
        s5 == "" || s6 =="" || s7 =="" || s8 == ""){
        window.alert("Please fill up all the reqired Sections!");
        return;
    }

    let subject1 = Number(s1);
    let subject2 = Number(s2);
    let subject3 = Number(s3);
    let subject4 = Number(s4);
    let subject5 = Number(s5);
    let subject6 = Number(s6);
    let subject7 = Number(s7);
    let subject8 = Number(s8);
    
    let total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7 + subject8;
    document.getElementById("total").innerText = "Total Marks" + " " + total;

    if(total > 1000 || total < 0){
    document.getElementById("result").innerHTML = "total is invalid, check you marks and add again";
    }
    else if(total >= 700){
        document.getElementById("result").innerHTML = "You did Distinction"
        document.getElementById("result").style.color = "green";
    }
    else if(total >= 300){
        document.getElementById("result").innerHTML = "You Passed";
        document.getElementById("result").style.color = "green";
    }
    else{
        document.getElementById("result").innerHTML = "You Failed";
        document.getElementById("result").style.color = "red";
    }
}

