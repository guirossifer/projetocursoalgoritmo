/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("Digite quantas vezes vai ser verificado a idade: ")
   leia(limite)
   contador := 0
              enquanto contador < limite faca
                       escreva ("Digite o nome da pessoa: ")
                       leia(nome)
                       escreva("Digite a idade do ", nome, " : ")
                       leia(idade)
                       se idade > 18 entao
                          escreval(nome, "Maior de idade")
                       senao
                            escreval(nome, " Menor de idade")
                       fimse
              contador := contador + 1
              fimenquanto
*/
function acaobotao() {
var nome, idade, limite, contador

limite = prompt("Digite quantas vezes vai ser verificado a idade: ")
contador = 0
    while (contador < limite){
        nome = prompt ("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do ", nome, " : ")
        if (idade > 18) 
           document.getElementById("paragrafo").innerText = nome + "voce é maior de idade"
        else
        document.getElementById("paragrafo").innerText = nome + "voce é menor de idade"   
        contador++
    }
}