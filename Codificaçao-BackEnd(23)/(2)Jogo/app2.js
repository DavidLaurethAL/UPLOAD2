//PRIMEIRA TENTATIVA, apenas com meus conhecimentos, se ajuda, não consegui terminar
// const inNumeros = document.getElementById('inNumeros')
// //ações
// const AdicionarNumeroBTN = document.getElementById('AdicionarNumeroBTN')
// const RestartBTN = document.getElementById('RestartBTN')
// //saidas
// const outLista = document.getElementById('outLista')
// const ERROS = document.getElementById('ERROS')

// const GuardaNumeros = []

// const NumeroDeChances = document.querySelector('#NumeroDeErros')
// const NumeroDeErros = document.getElementById("NumeroDeErros")


// //eventis

// AdicionarNumeroBTN.addEventListener('click', () => {
//     GuardaNumeros.push(inNumeros.value)
//     const inNumeroDeErros = GuardaNumeros.length
//     NumeroDeErros.innerHTML = `${GuardaNumeros} (${inNumeroDeErros})`
//     inNumeros.value = ''

// })
// RestartBTN.addEventListener('click', () => {
//         location.reload(); 
// })
// const RestartDica = (dica) => {
//     Dicas.textContent = dica;
// }

//Conectar com JS
document.addEventListener("DOMContentLoaded", function () {//Todos dentro dessa função
    let NumeroAleatorio, erros, chances;
    const StartBTN = document.getElementById("StartBTN");
    const ApostarBTN = document.getElementById("ApostarBTN");
    const inNumero = document.getElementById("inNumero");
    const QuantiaDeErros = document.getElementById("QuantiaDeErros");
    const QuantiaDeChances = document.getElementById("QuantiaDeChances");
    const Dicas = document.getElementById("Dicas");
//restart e dica
    const Restart = () => {
        location.reload();
    };
    const RestartDica = (dica) => {
        Dicas.textContent = dica;
    };
//Verificação: acertou ou não?
    const ValidaçãoResultado = () => {
        if (NumeroAleatorio === parseInt(inNumero.value)) {
            Dicas.textContent = "Você acertou o número!";
            inNumero.disabled = true;//caso "disabled" seja verdade(true) = o botão não funcionará(Lembre desse código) 
            StartBTN.disabled = true;//caso "disabled" seja verdade(true) = o botão não funcionará(Lembre desse código)
            ApostarBTN.classList.remove("oculta");
    }else {
        erros++;
        QuantiaDeErros.textContent = erros;
    const dica = NumeroAleatorio > parseInt(inNumero.value)
            ? "O número é maior que " + inNumero.value
            : "O número é menor que " + inNumero.value;
        RestartDica(dica);
    }};
//Inicialização do jogo, erros e acertos
    const Start = () => {
    NumeroAleatorio = Math.floor(Math.random() * 100) + 1;
        erros = 0;
        chances = 6;
    QuantiaDeErros.textContent = `${erros}`;
    QuantiaDeChances.textContent = chances;
    RestartDica("Dica: É um número entre 1 e 100");
    inNumero.value = "";
    inNumero.disabled = false;
    StartBTN.disabled = false;
    ApostarBTN.classList.add("oculta");
    };Start();
//Validação basica
    StartBTN.addEventListener("click", function () {
    if (chances > 0) {
        if (parseInt(inNumero.value) > 0 && parseInt(inNumero.value) < 101) {
            chances--;
            QuantiaDeChances.textContent = chances;
            ValidaçãoResultado();
        }else {
            alert("Apenas números de 1-100 são válidos");
        }
        }else {
            alert(`Suas chances acabaram, O número era ${NumeroAleatorio}`);
            inNumero.disabled = true;
            StartBTN.disabled = true;
            ApostarBTN.classList.remove("oculta");
    }});
    ApostarBTN.addEventListener("click", Restart);
});