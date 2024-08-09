import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("alice", 88822233309);

const ContaCorrenteRicardo = new ContaCorrente(101, cliente1);
ContaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);



let valor = 200;
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDecontas)