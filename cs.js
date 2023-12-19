alert('Installing every virus you can think of...')

function addNumbers() {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }


    let total = num1 + num2;


    document.getElementById("result").innerHTML = "Result: " + total;
}

