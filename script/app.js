import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedades = [];

function obterDadosEntrada(){
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ', entrada => {
        if (entrada.toLocaleUpperCase() === 'SAIR') {
            rl.close();
        } else {
            propriedades.push(entrada);
            obterDadosEntrada();
        }
    });
}