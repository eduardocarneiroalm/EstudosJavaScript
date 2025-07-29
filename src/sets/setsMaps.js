// const participantes = new Set();
// participantes.add("Carlos");
// participantes.add("Juliano");
// participantes.add("Geovanna");
// participantes.add("Eduardo");

// const pontos = new Map();
// pontos.set("Carlos", 100)
// pontos.set("Juliano", 200)
// pontos.set("Geovanna", 250)
// pontos.set("Eduardo", 300)

// console.log("Participantes:")
// for(let nome of participantes) {
//     const pontuacao = pontos.get(nome);

//     console.log(`- ${nome}: ${pontuacao} pontos`)
// };

const todosAlunos = ["Carlos", "Julia", "André", "Lucas"]
const presentes = new Set();

presentes.add("Carlos");
presentes.add("Julia");


const pontos = new Map();
for (let nome of presentes) {
    pontos.set(nome, 10)
}

for (let nome of todosAlunos) {
    if (!presentes.has(nome)) {
        pontos.set(nome, 0)
    }
}

console.log("Resultado Final");
for (let nome of todosAlunos) {
    console.log(`${nome} - ${pontos.get(nome)} pontos`)
}