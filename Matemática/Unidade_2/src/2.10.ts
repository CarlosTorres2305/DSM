class Fibonacci {
    private memoization: { [key: number]: number } = {};
  
    calcular(n: number): number {
      if (n in this.memoization) {
        console.log(`Chamada recursiva com valor ${n} já calculado antes.`);
        return this.memoization[n];
      }
  
      if (n <= 1) {
        return n;
      }
  
      const resultado = this.calcular(n - 1) + this.calcular(n - 2);
      this.memoization[n] = resultado;
  
      return resultado;
    }
  }
  
  const fibonacciCalculator = new Fibonacci();
  
  console.log(fibonacciCalculator.calcular(5)); // Exemplo de cálculo do termo 5
  console.log(fibonacciCalculator.calcular(7)); // Exemplo de cálculo do termo 7
  