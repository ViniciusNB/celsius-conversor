function Calc(){

    var c = document.getElementById("celsius").value;
    var f = (9 * c + 160) / 5;

    if (document.getElementById("celsius").value != ""){
        document.getElementById("fahren").innerHTML = f + " °F";
        console.log("Cálculo efetuado com Sucesso.");
        console.log(f);
    } else {
        alert("Digite a quantidade de graus Celsius para continuar a conversão")
        console.log("Usuário não digitou nada")
    }
}

function Limpar(){
    document.getElementById("celsius").value = "";
    document.getElementById("fahren").innerHTML = "";
}