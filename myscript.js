function displayEnteredName() {
    
    var enteredName = document.getElementById("nameInput").value;


    document.getElementById("displayedName").innerHTML = "Hi, " + enteredName + ".";
}
