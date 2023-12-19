alert('Add Two Numbers');

function addNumbers() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }


    var total = num1 + num2;


    document.getElementById("result").innerHTML = "Result: " + total;
}
