// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
//    duas notas para o primeiro objeto, que será nosso primeiro aluno.
//    Agora crie mais um objeto para colocar informações do nosso
//    segundo aluno. Mostre as informações de cada aluno no console.
//    Mostre também a média do primeiro aluno e a média do segundo
//    aluno. Por fim mostre a média desta turma de 2 alunos.


let objetoAluno ={
        nome: 'Aluno 1',
        notaX: 10,
        notaY: 8,
    };


let objetoAluno2 =  {
        nome: 'Aluno 2',
        nota1: 10,
        nota2: 8,
    };


console.log(objetoAluno);
console.log(objetoAluno.nome)
let media1 = (objetoAluno.notaX + objetoAluno.notaY) / 2;
console.log(`A media do primeiro aluno é: ${media1}`);
let media2 = (objetoAluno2.nota1 + objetoAluno2.nota2) / 2;
console.log(`A media do primeiro aluno é: ${media2}`);


