//1.Explique como o método map funciona em JavaScript e forneça um exemplo de uso:
//O método "map" chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e cria um NOVO ARRAY baseando-se nos retornos de cada chamada.EXEMPLO:
// let crias = ["manoel", "david", "carlos"]; 
// let catequese = crias.map(function(aqui passa um parametro)){
//     (aqui da pra passar um return de alguma variavel, no caso a catequese)
// });
//2.Qual é a diferença entre os métodos **`map`**, **`filter`** e **`reduce`** em JavaScript? Dê um exemplo de uso para cada um.
//map() permite a você iterar sobre o array e modificar seus elementos usando uma função de callback. 
//filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true
//reduce() É uma função de redução, que funciona em cada elemento de um determinado array, passando o valor retornado da operação anterior como um acumulador
//3.O que são módulos internos no Node.js? Dê exemplos de alguns módulos internos e explique brevemente sua função.
//Módulos são um recurso poderoso que permite a organização e reutilização de código de forma modular no Node.js
//EXEMPLOS: fs , url , querystring , util e os 
//4.Qual é a finalidade do módulo **`os`** no Node.js? Forneça um exemplo de como usar este módulo.
//fornece uma maneira simples de usar funcionalidades que são dependentes de sistema operacional.
//EXEMPLOS: const os = require('node:os'); 
//5.O que é o módulo **`fs`** no Node.js e para que serve? Dê um exemplo de uso deste módulo.
//O módulo fs disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system. Feito isso, você tem acesso a todos os métodos dele, o que inclui: fs. access() : checa se o arquivo existe e se o Node.
//6.Como você pode importar funções ou objetos de um arquivo JavaScript para outro usando os recursos internos de módulos do Node.js? Explique com um exemplo.
//export default NOMEDAFUNÇÃO;
//import NOMEDAFUÇÃO from "./nomedoarquivo.js"
//7.Descreva como você pode manipular arquivos no sistema de arquivos usando o módulo **`fs`** do Node.js.

//8.Explique brevemente o conceito de exportação e importação de módulos no Node.js, incluindo a diferença entre **`module.exports`** e **`exports`**.

//9.Como você pode criar e manipular objetos em JavaScript? Forneça exemplos de como criar objetos no JavaScript.