function Calc(){
    var c = document.getElementById("celsius").value;

    var f = (9 * c + 160) / 5;

    document.getElementById("fahren").innerHTML = f + " °F";
}

function Limpar(){
    document.getElementById("celsius").value = "";
    document.getElementById("fahren").innerHTML = "";
}