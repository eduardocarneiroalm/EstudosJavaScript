class Aluno {
    nome;
    idade;
    curso;

    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    };
    apresentar() {
        return(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou no curso de ${this.curso}`);

    };
};

const aluno1 = new Aluno("Carlos", 16, "Desenvolvimento Web");
const aluno2 = new Aluno("Juliano", 22, "Advocacia");
const aluno3 = new Aluno("Jorge", 20, "Desenvolvimento Mobile");
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());
console.log(aluno3.apresentar());
