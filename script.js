function calcular(){
    var peso, altura, resp

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    resp = peso / Math.pow(altura,2);

    document.getElementById("resp").value = resp;


}