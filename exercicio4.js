// 4. Crie cinco objetos JavaScript dentro de um Array contendo
//    nome(texto), idade(número), skills (array), ou seja um total de cinco
//    alunos. Agora crie uma função que receba estes cinco objetos e
//    mais um parâmetro skill. Dependendo da skill enviada mostrar no
//    console.log(), quais alunos têm a skill enviada por parâmetro,
//    mostrar todo o objeto.
//    Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar
//    chamar a função enviando (alunos, “JavaScript”), precisa mostrar o
//    Pedro e qual mais se encaixa nessa skill.


let objetoArray = [
    {
        nome: 'Marsel Brandao',
        idade: 25,
        skills: ['React.js', 'Node.js', 'CSS', 'HTML', 'typescript', 'firebase', 'JavaScript']
    },
    {
        nome: 'Mario Neto',
        idade: 21,
        skills: ['PHP', 'HTML', 'CSS']
    },
    {
        nome: 'Fernando Oliveira',
        idade: 37,
        skills: ['JavaScript', 'Rust', 'Python']
    },
    {
        nome: 'Marcio Sales',
        idade: 32,
        skills: ['JavaScript', 'Python']
    },
    {
        nome: 'Emmili Sagno',
        idade: 21,
        skills: ['Java', 'Rust', 'MongoDB', 'MySql']
    },
];


skillsAlunos(objetoArray, 'JavaScript');

function skillsAlunos(obj, skill){

    obj.map((element) => {
        if(element.skills.includes(skill)) {
            console.log(element);
        }
    })

    
}