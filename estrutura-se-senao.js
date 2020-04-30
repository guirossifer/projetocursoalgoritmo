/*
Var
// Seção de Declarações das variáveis 
    valor1, valor2, result: real
    operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Calcular dois valores baseado na operação da sua escolha")
   escreva("Digite o valor1: ")
   leia(valor1)
   escreva("Digite a operação: EX: +, -, *, / ")
   leia(operacao)
   escreva("Digite o valor2: ")
   leia(valor2)
   se operacao = "+" entao
      result := valor1 + valor2
   senao
        se operacao = "-" entao
      result := valor1 - valor2
        senao
             se operacao = "*" entao
      result := valor1 * valor2
             senao
                  se operacao = "/" entao
      result := valor1 / valor2
                  fimse
             fimse
        fimse
   fimse
   escreva("Resultado é: ", result)
   */



function acaobotao(params) {

    var valor1, valor2, result, op

    valor1 = prompt ("Digite valor 1: ")
    op = prompt ("Digite a operação: EX: +, -, *, / ")
    valor2 = prompt ("Digite valor 2: ")

    if (op == "+") {
        result = parseInt (valor1) + parseInt (valor2)
    }       else if (op == "-"){
                    result = parseInt (valor1) - parseInt (valor2)
    }                   else if (op == "*"){
                                result = parseInt (valor1) * parseInt (valor2)
    }                               else if (op == "/"){
                                            result = parseInt (valor1) / parseInt (valor2)
    }
            document.getElementById("paragrafo").innerText = result

}











