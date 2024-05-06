//CRIAÇÃO E BUSCA DAS VARIAVEIS//
const Kids = []
const inNome  = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");
const outLista = document.getElementById("outLista");
const adicionarKid = () => {
    const NomeDaCriança = inNome.value
    const IdadeDaCriança = Number(inIdade.value)
    //VALIDAÇÃO BASICA//
    if(NomeDaCriança === '' || IdadeDaCriança <= 0 || IdadeDaCriança === '' || isNaN(IdadeDaCriança)){
        alert('Digite os valores corretos, sem deixar espaços em branco MONGOL')
        return
    }Kids.push({NomeDaCriança: NomeDaCriança, IdadeDaCriança: IdadeDaCriança})//EMPURRAR VALORES P ARRAY
    inNome.value = ''
    inIdade.value = ''
};btnAdicionar.addEventListener("click", adicionarKid);
    const ListarCrianças = () => {
        if(Kids.length == 0){
            alert('Não há nenhuma criança registrada no sistema DEMENTE')
            return
        }
        let lista = ''
        Kids.forEach((Kid) => {
            return lista += `${Kid.NomeDaCriança}(${Kid.IdadeDaCriança} anos) \n`
        })
        console.log(lista)
        outLista.textContent = lista
};btnListar.addEventListener("click", ListarCrianças);
    const OrdenarPorIdade = () => {
        if (Kids.length === 0) {
            alert('Não há nenhuma criança registrada no sistema RETARDADO');
            return;}
        //USA SUBTRAÇÃO PARA VER QUAL É O MAIS VELHO
        Kids.sort((a, b) => a.IdadeDaCriança - b.IdadeDaCriança);//SORT=FAZ COMPARAÇÃO USANDO A ORDEM COLOCADA ENTRE "()"
        //MOSTRAR LISTA EM ORDEM
        let listaOrdenada = '';
        Kids.forEach(Kid => {
            listaOrdenada += `${Kid.NomeDaCriança} (${Kid.IdadeDaCriança} anos)\n`;
        });
        outLista.textContent = listaOrdenada;
};btnFiltrar.addEventListener("click", OrdenarPorIdade);
