// importa a biblioteca readline.
import readline from 'readline';

// cria interface no console node.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedades = [];

// função recursiva que obtem os dados de entrada.
function obterDadosEntrada(){
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para encerrar): ', entrada => {
        if (entrada.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            propriedades.push(entrada.toUpperCase());
            obterDadosEntrada();
        }
    });
}

// função anonima que ordena e mostra as propriedades no console.
rl.on('close', () => {
    const propriedadesOrdenadas = propriedades.sort();
    console.log('\nPropriedades ordenadas de A-Z:');
    propriedadesOrdenadas.forEach(propriedade => {
        console.log(propriedade);
    });
    process.exit(0);
});

obterDadosEntrada();