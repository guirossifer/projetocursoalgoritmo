/*
Var
// Seção de Declarações das variáveis 
   num, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o numero para calcular o fatorial: ")
   leia (num)
   fatorial := 1
   para contador de 1 ate num faca
        fatorial := fatorial * contador
   fimpara
   escreva ("O fatorial de ", num, " é: ", fatorial)
   */
  function acaobotao() {
    var num, fatorial

    num = prompt ("Digite o numero para calcular o fatorial. ")
    fatorial = 1
    for (var contador = 1; contador <= num; contador++){
            fatorial = fatorial * contador
    }
            document.getElementById("paragrafo").innerText = "O fatorial de " + num + " é: " + fatorial
  }