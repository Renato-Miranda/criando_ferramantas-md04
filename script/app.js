import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedades = [];

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

rl.on('close', () => {
    const propriedadesOrdenadas = propriedades.sort();
    console.log('\nPropriedades ordenadas de A-Z:');
    propriedadesOrdenadas.forEach(propriedade => {
        console.log(propriedade);
    });
    process.exit(0);
});

obterDadosEntrada();