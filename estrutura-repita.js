/*
Var
// Seção de Declarações das variáveis 
   sairloop: caractere
   valor1, valor2: real
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreva("digite o primeiro valor")
         leia(valor1)
         escreva("digite o segundo valor")
         leia(valor2)
         escreval("resultado: ", valor1 + valor2)
         escreval("deseja sair? s/n")
         leia(sairloop)
    ate sairloop <> "n"



Fimalgoritmo
*/

function acaobotao() {
    
    var sairloop, valor1, valor2

        do{
            valor1 = prompt("digite o primeiro valor")
            valor2 = prompt("digite o segundo valor")
            document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt (valor1) + parseInt (valor2))
            sairloop = prompt("deseja sair? s/n")
            
        }while (sairloop == "n")

}