class PessoaCRT {
    nome: string;
    idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class Estudante extends PessoaCRT {
    faculdade: string;
    curso: string;
  
    constructor(nome: string, idade: number, faculdade: string, curso: string) {
      super(nome, idade);
      this.faculdade = faculdade;
      this.curso = curso;
    }
  
    apresentar() {
      super.apresentar();
      console.log(`Estudo na faculdade ${this.faculdade} no curso de ${this.curso}.`);
    }
  }
  
  const estudante1 = new Estudante('Carlos', 28, 'Fatec Jacareí', 'DSM');
  estudante1.apresentar();
  