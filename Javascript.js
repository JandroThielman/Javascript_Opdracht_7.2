function Click() {
    const budget = 100;
    const product = prompt("Hoeveel kost the Product", "10");

    if (budget >= product) {
        document.getElementById("result").innerHTML = "Je heeft genoeg geld ;)";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "je hebt niet genoeg geld :(";
        document.getElementById("result").style.color = "red";
    }
}
