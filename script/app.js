import { createInterface } from 'readline';
class ListasCSS {
    constructor() {
        this.propriedades = [],
            this.rl = createInterface({
                input: process.stdin,
                output: process.stdout
            });
    }

    comecar() {
        console.log("Digite nome de propriedade CSS, ou digite 'SAIR' para encerrar: ");
        this.rl.on('line', input => {
            if (input.toUpperCase() === 'SAIR') {
                this.rl.close();
            } else {
                this.addPropriedade(input.toUpperCase());
            }
        })
        this.rl.on('close', () => {
            this.mostrarPropriedadesOrdenadas()
            console.log("Programa encerrado");
        })
    }

    addPropriedade(propriedade) {
        this.propriedades.push(propriedade)
    }

    mostrarPropriedadesOrdenadas() {
        const propriedadesOrdenadas = this.propriedades.sort()
        console.log("Propriedades Ordenadas: ");
        propriedadesOrdenadas.forEach(propriedade => console.log(propriedade))
    }


}

const listaCss = new ListasCSS()
listaCss.comecar()