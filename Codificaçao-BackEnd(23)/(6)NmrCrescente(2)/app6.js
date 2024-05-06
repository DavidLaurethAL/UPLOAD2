//CRIAÇÃO E BUSCA DAS VARIAVEIS//
const Numero = []
const inNumero = document.getElementById("inNumero");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");
const outLista = document.getElementById("outLista");
const adicionarNumero = () => {
    const ValorNumerico = Number(inNumero.value)
    //VALIDAÇÃO BASICA//
    if(ValorNumerico <= 0 || ValorNumerico === '' || isNaN(ValorNumerico) || Numero.indexOf(ValorNumerico) == true){//tentei utilizar indexOf mas n deu :)
        alert('Digite NUMEROS não REPETIDOS, sem deixar espaços em branco seu MONGOL')
        return
    }Numero.push({ValorNumerico: ValorNumerico})//EMPURRAR VALORES P ARRAY 
    // outLista.textContent = Numero tentei usar isso para escrever os valores toda vez que adicionasse um numero, nao deu
    inNumero.value = ''
};
btnAdicionar.addEventListener("click", adicionarNumero);
    const ListarNumeros = () => {
        if(Numero.length == 0){
            alert('Não há nenhum numero registrado no sistema DEMENTE')
            return
        }
        let lista = ''
        Numero.forEach((Numero) => {
            return lista += `(${Numero.ValorNumerico} anos) \n`
        })
        outLista.textContent = lista
    };btnListar.addEventListener("click", ListarNumeros);
    const Ordenar = () => {
        if (Numero.length === 0) {
            alert('Não há nenhum numero registrado no sistema DEMENTE');
            return;}
        //USA SUBTRAÇÃO PARA VER QUAL É O MAIS VELHO
        Numero.sort((a, b) => a.ValorNumerico - b.ValorNumerico);//SORT=FAZ COMPARAÇÃO USANDO A ORDEM COLOCADA ENTRE "()"
        //MOSTRAR LISTA EM ORDEM
        let listaOrdenada = '';
        Numero.forEach(Numero => {
            listaOrdenada += `(${Numero.ValorNumerico})\n`;
        });
        if(listaOrdenada != ListarNumeros){
            outLista.textContent = "Os números não estão em ordem crescente";
        }else{
            outLista.textContent = "Os números estão em ordem crescente";
        }
        // outLista.textContent = listaOrdenada;
        console.log(listaOrdenada)
};btnFiltrar.addEventListener("click", Ordenar);
