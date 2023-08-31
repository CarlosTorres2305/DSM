import { VeiculoCRT, VeiculoEletrico, VeiculoEletricoVoador } from './2.7.1';

const carro = new VeiculoCRT(0, 0);
console.log("Carro - Latitude:", carro.latitude, "Longitude:", carro.longitude);

const carroEletrico = new VeiculoEletrico(0, 0, 100);
console.log("Carro Elétrico - Bateria:", carroEletrico["bateria"]);

const carroVoador = new VeiculoEletricoVoador(0, 0, 80, 100);
console.log("Carro Voador - Altitude:", carroVoador["altitude"]);
