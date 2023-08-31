/*Quando uma função recursiva é chamada repetidamente um elevado número de vezes,
 ocorre o que é conhecido como "profundidade excessiva de recursão" ou "estouro de pilha" 
 (stack overflow). Isso acontece porque, a cada chamada recursiva, 
 um novo contexto de execução é empilhado na memória, ocupando espaço na pilha de chamadas.
  Quando esse empilhamento se torna muito profundo, 
ultrapassando a capacidade da pilha de chamadas, ocorre um erro que geralmente leva ao 
encerramento do programa*/

function progressaoAritmeticaIterativa(n: number, a1: number, r: number): number {
  let termo = a1;
  for (let i = 1; i < n; i++) {
    termo += r;
  }
  return termo;
}

console.log(progressaoAritmeticaIterativa(10000, 1, 2)); // Usando iteração


  