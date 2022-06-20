/* Após uma prova de vestibular, uma escola quer identificar quantos dos seus alunos foram aprovados em cada 
turma de formandos. Ela quer saber qual aluno teve a maior nota e de qual turma ele é. 
Nessa escola, há quatro turmas (A, B, C e D) com vinte e cinco alunos cada.
Elabore um algoritmo que solicite o nome e a nota do vestibular aos alunos. Depois, 
informe quantos deles foram aprovados, de que turma são, qual a maior nota em cada turma e qual aluno teve a maior nota de todas.
Para que o aluno seja aprovado no vestibular, ele deverá obter nota maior ou igual a 7.

ATENÇÃO: As notas por turma não podem se repetir.*/ 
import ask from 'readline-sync'


var a = true
let nome1
let nota1
let nome2
let nota2
let nome3
let nota3
while(a){
     nome1 = ask.question('nome: ')
     
     nota1 = Number(ask.question('nota: '))

     nome2 = ask.question('nome: ')
     nota2 = Number(ask.question('nota: '))

     nome3 = ask.question('nome: ')
     nota3 = Number(ask.question('nota: '))

  a = false
    
}

let aluno = [
    {name : nome1, nota : nota1},
    {name : nome2, nota : nota2},
    {name : nome3, nota : nota3}
]
for(let dados in aluno){
    if (aluno[dados].nota >= 7){
            console.log(aluno[dados].name + ' aprovado')
        
    }
    else{
        console.log(aluno[dados].name + ' reprovado')
    }
   
}

// falta a maior nota 


    
    
