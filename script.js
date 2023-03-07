function calcular(){
    var peso, altura, resp, status;

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    resp = peso / Math.pow(altura,2);

    document.getElementById("resp").value = resp.toFixed(2);

    if(resp)

}