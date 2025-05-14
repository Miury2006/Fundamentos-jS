// primeiro assunto
let a = 10;
let b = 20;
let c = a;

a = b;
b = c;

console.log(a, b); 

// outro assunto já

let nome = prompt("Qual seu nome?");
let profissao = prompt("Qual a sua profissão?");

alert(`Olá, ${nome}! Que interessante saber que você trabalha como ${profissao}.`);

// outro assunto já

let nota = 75;
if (nota >= 90) {
    console.log("Aprovado com ExcelÊncia");
}else if (nota >= 60){
    console.log("Aprovado");
}else{
    console.log("Recuperação")
}

// outro assunto

let idade = 20;
let habilitado = true;

if(idade >= 18){
    if(habilitado){
        console.log("Pode dirigir");
    }else{
        console.log("Preccisa tirar a habilitação");
    }
    }else{
        console.log("Não pode dirigir");
    }

// outro assunto

let idadeDaPessoa = prompt("Qual a sua idade?");
idadeDaPessoa = Number(idadeDaPessoa); 

if (idadeDaPessoa < 18) {
    console.log("Você é menor de idade!");
} else {
    console.log("Você é maior de idade!");
}

// assunto de if, else if e else 

let notaDoAluno = prompt("Qual a sua nota");
let nomeDoAluno = prompt("Qual é seu nome");

notaDoAluno = Number(notaDoAluno);

if (notaDoAluno >= 90) {
    console.log(`Olá, ${nomeDoAluno}! Você foi Aprovado com Perfeição!`);
} else if (notaDoAluno >= 60) {
    console.log(`Olá, ${nomeDoAluno}! Você foi Aprovado`);
} else if (notaDoAluno >= 50) {
    console.log(`Olá, ${nomeDoAluno}! Você ficou de Recuperação`);
} else {
    console.log(`Olá, ${nomeDoAluno}! Você foi Reprovado`);
}

// o mesmo assunto 

let nomeDoUsuario = prompt("Qual é seu nome");
let idadeDoUsuario = prompt("Qual é sua idade");

idadeDoUsuario = Number(idadeDoUsuario);

if (idadeDoUsuario >= 18) {
    console.log(`Olá, ${nomeDoUsuario}! Você pode dirigir.`);
} else {
    console.log(`Olá, ${nomeDoUsuario}! Você não pode dirigir.`);
}

// mesma coisa meu fi

let clima = prompt("Qual a temperatura atual");

clima = Number(clima);

if (clima > 35) {
    console.log("Calor Extremo");
} else if (clima >= 25) {
    console.log("Clima Quente");
} else if (clima >= 15) {
    console.log("Clima Agradável");
} else if (clima >= 5) {
    console.log("Clima Frio");
} else {
    console.log("Frio Intenso");
}

// outro assunto Matheus

let ternario = 18 > 10 ? console.log("Verdadeiro") : console.log("Falso");

if (18 > 10) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

// outro assunto infelizmente

let numero = prompt("Qual é sue número");

numero = Number(numero);

if ( numero % 2 == 0){       // Ver se não esquece esse treco Matheus hein!!!!
    console.log("é par!")
} else {
    console.log("é ímpar!");
}

// outro assunto agora cara

let numero = prompt("Qual é sue número");

numero % 2 == 0 ? console.log("é par") : console.log("é ímpar");

// outro assunto agora cara


let cor = "verde";

switch (cor){
    case "vermelho":
        console.log("Pare!");
        break;
    case "Amarelo":
        console.log("Atenção");
        break;
    case "Verde":
        console.log("Siga");
        break;
    default:
        console.log("Semafóro Quebrado");
}

// o mesmo 

let numero = parseInt(prompt(
    "Escolha uma opção:\n" +
    "1 - Saque\n" +
    "2 - Transferência\n" +
    "3 - Saldo\n" +
    "4 - Extrato"
  ));
  
  switch (numero) {
    case 1:
      console.log("Saque");
      break;
    case 2:
      console.log("Transferência");
      break;
    case 3:
      console.log("Saldo");
      break;
    case 4:
      console.log("Extrato");
      break;
    default:
      console.log("Opção inválida");
  }
  
// assunto de for 

for (inicialiazação; condição; incrementação){

}

for (let i = 0; i <= 5; i++){
    console.log(`Interação: ${i}`);
}

// atividade de for 

const passo = ["passo 1", "passo 2", "passo 3", "passo 4", "passo 5", "passo 6", "passo 7", "passo 8", "passo 9", "passo 10"];

for (let i = 0; i < passo.length; i++) {
    console.log(`${passo[i]}`);
}

for (let i = 0; i <= 10; i += 1) {
    console.log(`passo ${i}`);
}

// em dobro
for (let i = 2; i <= 20; i += 2) {
    console.log(`passo ${i}`);
}

//numeros impares
for (let i = 1; i <= 10; i += 2) {
    console.log(`passo ${i}`);
}

// outra maneira de fazer com impar
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(`O número ${i} é ímpar.`);
    }
}

// multiplicação
let numero = Number(prompt("Digite um número"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// assunto de hj while

let contagemRegressiva = 10;

while (contagemRegressiva > 0) {
    console.log(contagemRegressiva);
    contagemRegressiva--; 
}

/////////////////////////////////////////////////////////

let palavra = prompt("Digite uma palavra:");
let contador = 1;


while (contador <= 5) {
    console.log(palavra);
    contador++
}

////////////////////////////////////

let numero = parseInt(prompt("Digite um número acima de 4:"));
while (numero <= 4) {
    numero = parseInt(prompt("Digite um número acima de 4:"));

}

for (let i = numero; i >= 1; i--) { 
    if (i % 2 == 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}
console.log("Chegou a zero!");

//////////////////////////////////

let palavra = prompt("Digite a palavra");

do {
    
} while (palavra !== sair);
    palavra = prompt("Digite a palavra");

////////////////////////////////////

function somar(a, b, c) {
    return a + b + c
}

console.log(somar(2, 5, 8));

////////////////////////////////////

const texto = "Eu estou no escopo global";

function exemplo(){
    const texto = "Eu estou no escopo global função";
    console.log(texto);
}

exemplo()

/////////////////////////////////////

const nome = prompt("Digite seu nome");

function mostrarMensagem(nome) {
    alert(`Olá ${nome}! Bem-vindo(a)!`);
}

mostrarMensagem(nome);


let numero = parseInt(prompt("Digite um número maior ou igual a 10:"));

function decrementar(numero) {
    console.log(`Contando para trás a partir de ${numero}:`);
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

decrementar(numero);



function saudar(nome) {
    if (!nome) {
        nome = "Visitante";
    }
    alert(`Olá, ${nome}!`);
}

let visitante = prompt("Qual o seu nome?");
saudar(visitante);

/////////////////////////////////////////////////

const verificar = function (numero) {
    if (numero % 2 === 0) {
        alert("Seu número é par");
    } else {
        alert("Seu número é ímpar");
    }
}

const numero = Number(prompt("Digite um número:"));

verificar(numero);

//////////////////////////////////////////////////


const saudar = x => {
    return x
}
console.log(saudar(10));

/////////////////////////////////////////////////////////////

let palavra;

const escrever = () => {
    do {
        palavra = prompt("Digite uma palavra:");
        if (palavra !== "sair") {
            console.log("Você digitou:", palavra);
        }
    } while (palavra !== "sair");
}
escrever();

/////////////////////////////////////////////////////////////

const escrever = () => {
let palavra;

    do {
        palavra = prompt("Digite uma palavra:");

        alert(`Sua palavra foi: ${palavra}`);
    } while (palavra !== "sair");

    alert("Programa encerrado");
}
 escrever()

//////////////////////////////////////////////////////////// callback

function executarCallback(numero1, numero2, outraForma) {
    outraForma(numero1, numero2);
}

executarCallback(2, 5, function(numero1, numero2)) {
    console.log(numero1 + numero2);
}

///////////////////////////////////////////////////////

function verificarNumero(numero, callback) {
  if (numero >= 10) {
    return callback("Número alto");

  } return callback("Número baixo");

}

function mensagem(texto) {
  console.log(texto);
}

verificarNumero(5, mensagem);

//////////////////////////////////


const nomes = ["Alex", 1, "Yoshi", 24, "Mario", 100];

console.log(nomes["Alex"]);

///////////////

const lista = ["Alex", "Yoshi", "Mario"];

for(let i = 0; i <= lista.length; i++){
    console.log(lista[i]);
}

////////////////////////////////////////
 
function contarPares(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] % 2 === 0){
            contador++;
        }
    }
    return contador;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log (contarPares(numeros));

//////////////////////////////////////

const pessoa = {
    nome: "Alex",
    idade: 29,
    profissão: "Desenvolvedor"

const chave = "idade";

console.log (pessoa[chave]);


}

////////////////////////////////////////

const pessoas = [
    { nome: "Alex", idade: 29 },
    { nome: "Yoshi", idade: 18 },
    { nome: "Maria", idade: 24 }
];

for (let pessoa of pessoas) {
    if (pessoa.idade >= 21) {
        console.log(`${pessoa.nome} pode se casar`);
    } else {
        console.log(`${pessoa.nome} não pode se casar`);
    }
}

/////////////////////////////////////////////////////////



function boasVindas(nome, callback) {
    return callback(nome);  
}

function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}
 
boasVindas("Matheus", saudar);  

///////////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5, 6];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

console.log(pares);

/////////////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5, 6,];

numeros.forEach(numero) => {
    console.log(numeros * 2);
};

////////////////////////////////////////////////////////

const numeros = [10, 20, 30];
let soma = 0;

numeros.forEach((elemento) => {
    soma += elemento;
});

console.log(soma); 


const numeros = [25, 57, 78, 129];
let soma = 0;

numeros.forEach((elemento) => {
    soma += elemento;
});

console.log(soma);

////////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5, 6];
const dobrados = [];

numeros.forEach((elemento) => {
    dobrados.push(elemento * 2);
});

console.log(dobrados);


//////////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.map((numero) => {
    numero % 2 === 0 {
        return numero;
    }
});

console.log(pares);

/////////////////////////////////////////////////////////

const pontuacoes = [15, 20, 8, 12];
const somar = pontuacoes.map((player) => {
    return player + 10;
});

console.log(somar);

///////////////////////////////////////////////////////

const pontuacoes = [15, 20, 8, 12];
const somar = [];

pontuacoes.forEach((player) => {
    somar.push(player + 10);
});

console.log(somar);

////////////////////////////////////////////////////////



const alunos = [
    { nome: "Alex", nota: 4 },
    { nome: "Yoshi", nota: 9 },
    { nome: "Mario", nota: 7 }
];

for (let aluno of alunos) {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome} foi aprovado`);
    } else {
        console.log(`${aluno.nome} não foi aprovado`);
    }
}


/////////////////////////////////////////////////////



const alunos = [
    { nome: "Alex", nota: 4 },
    { nome: "Yoshi", nota: 9 },
    { nome: "Mario", nota: 7 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);

console.log(aprovados);


/////////////////////////////////////////////////////////

const numeros = [10, 20, 30];

const somar = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(somar);

///////////////////////////////////////////////////////

const notas = [7, 8, 6, 9, 5];

const soma = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
}, 0);

const media = soma / notas.length;

console.log(media); 


////////////////////////////////////////////////////

const usuario = [
    { nome: "Matheus", ativo: true }
];

function processarUsuario(usuario) {
    if (usuario.ativo === true) {
        console.log(`Usuário ${usuario.nome} está ativo.`);
    } else {
        console.log(`Usuário ${usuario.nome} está inativo.`);
    }
}

function exibeMensagem(texto) {
    console.log(texto);
}

processarUsuario(usuario[0]);

const texto = "Mensagem exibida com sucesso!";
exibeMensagem(texto);

// feito com callback

const usuario = [
    { nome: "Matheus", ativo: true }
];

function processarUsuario(meuUsuario, funcaoCallback) {
    if (meuUsuario.ativo === true) {
        return funcaoCallback(`Usuário ${meuUsuario.nome} está ativo.`);
    }
    return funcaoCallback(`Usuário ${meuUsuario.nome} está inativo.`);
}

function exibeMensagem(texto) {
    console.log(texto);
}

processarUsuario(usuario[0], exibeMensagem);
















