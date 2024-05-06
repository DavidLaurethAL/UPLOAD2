//1)-Elaborar um programa que leia nome e número de acertos 
//de candidatos inscritos em um concurso. Listar os dados a cada inclusão. 
//Ao clicar no botão Aprovados 2a Fase, ler o número de acertos para aprovação 
//dos candidatos para a 2a fase do concurso. O programa deve, então, exibir os 
//candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à 
//nota informada. Exibir os candidatos aprovados em ordem decrescente de número 
//de acertos. Caso nenhum candidato tenha sido aprovado, exibir mensagem.
//CRIAÇÃO E BUSCA DAS VARIAVEIS//
const VetorBalaDMS = []
const VetorDosAprovados = []
const inNome = document.getElementById("inNome");
const inNota = document.getElementById("inNota");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");
const outLista = document.getElementById("outLista");
//CRIAÇÃO DAS CONSTANTES(VALORES)
const AdicionarCandidato = () => {
    const NomeDosCandidatos = inNome.value
    const NotaDosCandidatos = Number(inNota.value)
    //VALIDAÇÃO BASICA//
    if(NomeDosCandidatos === '' || NotaDosCandidatos < 0 || NotaDosCandidatos === '' || isNaN(NotaDosCandidatos)){
        alert('Digite os bagulho cria, sem deixar espaços em branco MONGOL')
        return
    }else if(NotaDosCandidatos > 6){
        VetorDosAprovados.push({NomeDosCandidatos: NomeDosCandidatos, NotaDosCandidatos: NotaDosCandidatos})
    }VetorBalaDMS.push({NomeDosCandidatos: NomeDosCandidatos, NotaDosCandidatos: NotaDosCandidatos})//EMPURRAR VALORES P VetorBalaDMS
        inNome.value = ''
        inNota.value = ''
};btnAdicionar.addEventListener("click", AdicionarCandidato);
    const ListarCandidatos = () => {
        if(VetorBalaDMS.length == 0){
            alert('Não há nenhum candidato registrado no sistema DOENTE')
            return
        }
        let lista = ''
        VetorBalaDMS.forEach((VetorBalaDMS) => {
            return lista += `Nome: ${VetorBalaDMS.NomeDosCandidatos}|Acertos: ${VetorBalaDMS.NotaDosCandidatos} \n`
        })
        outLista.textContent = lista
};btnListar.addEventListener("click", ListarCandidatos);
    const Aprovados = () => {
        if (VetorDosAprovados.length === 0) {
            alert('Não há nenhum candidato APROVADO registrado no sistema!');
            return;}
        //USA SUBTRAÇÃO PARA VER QUAL É O MAIS VELHO
        //const NumeroDeAprovados = VetorDosAprovados.length
        VetorDosAprovados.sort((a, b) => b.NotaDosCandidatos - a.NotaDosCandidatos);//SORT=FAZ COMPARAÇÃO USANDO A ORDEM COLOCADA ENTRE "()"
        //MOSTRAR LISTA EM ORDEM
        let ListaDeAprovados = '';
        VetorDosAprovados.forEach(VetorDosAprovados => {
            ListaDeAprovados += `Nome: ${VetorDosAprovados.NomeDosCandidatos}|Acertos: ${VetorDosAprovados.NotaDosCandidatos}\n`;
        });
        outLista.textContent = ListaDeAprovados;
};btnFiltrar.addEventListener("click", Aprovados);