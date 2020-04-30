var nome, nota1, nota2, passou;
passou = false;

nome = prompt ("Digite seu nome: ")
nota1 = prompt ("Digite sua nota: ")
nota2 = prompt ("Digite a outra nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50)
    passou = true;

if (passou && (media >= 70 && media <= 90))
    alert("AProvado " + nome)

else
    alert("Reprovado " + nome)