function fatorialCRT(numero: number): number {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorialCRT(numero - 1);
    }
  }
  
  const numeroParaCalcular = 5;
  const resultado = fatorialCRT(numeroParaCalcular);
  console.log(`O fatorial de ${numeroParaCalcular} é ${resultado}`);
  