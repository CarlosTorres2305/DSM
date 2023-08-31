class ProgressaoGeometricaCRT {
    primeiroTermo: number;
    razao: number;
  
    constructor(primeiroTermo: number, razao: number) {
      this.primeiroTermo = primeiroTermo;
      this.razao = razao;
    }
  
    gerarTermos(n: number): number[] {
      const termos: number[] = [this.primeiroTermo];
  
      for (let i = 1; i < n; i++) {
        const termoAnterior = termos[i - 1];
        const novoTermo = termoAnterior * this.razao;
        termos.push(novoTermo);
      }
  
      return termos;
    }
  }
  
  const pg = new ProgressaoGeometricaCRT(2, 3); // Primeiro termo: 2, Razão: 3
  const primeiros50Termos = pg.gerarTermos(50);
  console.log(primeiros50Termos);
  