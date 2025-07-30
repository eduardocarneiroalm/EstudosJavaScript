class Usuario {
    nome;
    sobrenome;
    idade
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    mostrarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`

    }
    toJSON() {
        return  {
            nome: this.nome,
            idade: this.idade
        }
    }
}

const usuarios = [];

const usuario1 = new Usuario("Carlos", "Eduardo", 16)
const usuario2 = new Usuario("Jorge", "Ricardo", 17)
const usuario3 = new Usuario("Julia", "Silva", 20)


usuarios.push(usuario1);
usuarios.push(usuario2);
usuarios.push(usuario3);

const transformacaoJson = JSON.stringify(usuarios)
console.log(transformacaoJson)

const voltaObjeto = JSON.parse(transformacaoJson);
console.log(voltaObjeto)

const nomeCompletoUsuario = usuarios;
console.log(nomeCompletoUsuario)