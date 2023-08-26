# Criando Ferramentas

Uma empresa de desenvolvimento de software precisa de uma ferramenta
que vai receber uma lista de propriedades de CSS (ex: background-color,
font-size, text-align) e vai devolvê-la ordenada de A-Z.
Ordenar o CSS ajuda a encontrar a propriedade que precisa ser alterada
mais rapidamente e essa ferramenta pode ser utilizada para checar a
ordenação de qualquer lista de palavras.

# Projeto - Ferramenta de Propriedades CSS

Este é um projeto de exemplo que demonstra uma ferramenta simples para coletar e ordenar propriedades CSS. Ele utiliza Node.js e a biblioteca readline para interagir com o usuário via linha de comando.

## Objetivos

O objetivo deste projeto é oferecer uma experiência básica de coleta e ordenação de propriedades CSS, demonstrando o uso de entrada do usuário e manipulação de arrays.

## Passo a Passo para Execução

1. Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo e instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/).

2. Clone este repositório para o seu ambiente local:

```bash

git clone https://github.com/Renato-Miranda/criando_ferramantas-md04.git
```

3. Navegue até o diretório do projeto:

```bash
cd criando_ferramantas-md04
```

4. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

5. Execute a ferramenta:

```bash
node app.js
```

6. Siga as instruções na linha de comando para inserir as propriedades CSS. Digite 'SAIR' quando desejar encerrar a coleta.

7. Após encerrar a coleta, o programa exibirá as propriedades ordenadas alfabeticamente.

## Requisitos

- Node.js (instalado a partir de https://nodejs.org/)
- npm (geralmente vem junto com o Node.js)

## Bibliotecas Utilizadas

- readline: Utilizado para interação com o usuário via linha de comando.

---

## Consultas Bibliográficas

- https://nodejs.org/api/readline.html
- https://github.com/ChristySchott/manual-node/blob/master/Capitulo_3.md
- https://www.npmjs.com/package/readline
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

---

Este é apenas um projeto de exemplo e não tem finalidade comercial. Fique à vontade para explorar o código e adaptá-lo às suas necessidades.

Criado por Renato Miranda - [GitHub Profile](https://github.com/Renato-Miranda)
