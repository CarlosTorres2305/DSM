
class Conjunto<T>{
    private elementos: Set<any> = new Set();

    inserir(elemento: any):void{
        this.elementos.add(elemento);
    }

    pertence(elemento: any):boolean{
        return this.elementos.has(elemento);
    }

    uniao(outroConjunto: Conjunto<any>): Conjunto<any> {
        const novoConjunto = new Conjunto<any>();
        this.elementos.forEach((elemento) => novoConjunto.inserir(elemento));
        outroConjunto.elementos.forEach((elemento) => novoConjunto.inserir(elemento));
        return novoConjunto;
    }

    intersecao(outroConjunto: Conjunto<any>): Conjunto<any> {
        const novoConjunto = new Conjunto<any>();
        this.elementos.forEach((elemento) => {
          if (outroConjunto.pertence(elemento)) {
            novoConjunto.inserir(elemento);
          }
        });
        return novoConjunto;
    }

    dimensao(): number {
        return this.elementos.size;
    }

    listar(): T[] {
        return Array.from(this.elementos);
    }

}

//execução
const conjuntoA = new Conjunto<any>();
conjuntoA.inserir("bola");
conjuntoA.inserir(123);
conjuntoA.inserir(3.14);
conjuntoA.inserir("carro");
conjuntoA.inserir("carro");


const conjuntoB = new Conjunto<any>();
conjuntoB.inserir("maçã");
conjuntoB.inserir(3.14);
conjuntoB.inserir("carro");


console.log("conjunto A:", conjuntoA.listar());

console.log("conjunto B:", conjuntoB.listar());

console.log(`3.14 pertece ao conjunto A? ${conjuntoA.pertence(3.14)}`);
console.log(`avião pertence ao conjunto A? ${conjuntoA.pertence("avião")}`);

console.log("A união B", conjuntoA.uniao(conjuntoB).listar());

console.log("A Intersecção B:", conjuntoA.intersecao(conjuntoB).listar());


