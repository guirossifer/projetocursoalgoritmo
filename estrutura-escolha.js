function acaobotao(params) {

    var valor1, valor2, result, op

    valor1 = prompt ("Digite valor 1: ")
    op = prompt ("Digite a operação: EX: +, -, *, / ")
    valor2 = prompt ("Digite valor 2: ")

    switch (op) {
                case "+":
                    result = parseInt (valor1) + parseInt(valor2)
                    break;
                case "-":
                    result = parseInt (valor1) - parseInt(valor2)
                    break;
                case "/":
                    result = parseInt (valor1) / parseInt(valor2)
                    break;
                case "*":
                    result = parseInt (valor1) * parseInt(valor2)
                    break;

    }
            document.getElementById("paragrafo").innerText = result

}
