
function calcular(){
    var peso, altura, resp, status;

    peso = parseFloat(document.getElementById("peso").value);

    //importante dividir o valor por 100, para converter cm em metros
    altura = parseFloat(document.getElementById("altura").value) / 100;

    resp = peso / Math.pow(altura,2);

    document.getElementById("resp").value = resp.toFixed(2);

}
