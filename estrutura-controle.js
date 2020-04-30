/*
   escreval("Digite o nome do aluno:")
   leia(nome)
   escreval("Digite nota 1:")
   leia(nota1)
   escreval("Digite nota 2:")
   leia(nota2)
   media := (nota1 + nota2) / 2
   
   se media >= 5 entao
      escreval("aprovado: ", nome)
   senao
      escreval("reprovado: ", nome)
   fimse
*/
var nome, nota1, nota2;
nome = prompt ("Digite seu nome: ")
nota1 = prompt ("Digite sua nota: ")
nota2 = prompt ("Digite a outra nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50){
    alert("AProvado " + nome)
}
else
    alert("Reprovado " + nome)