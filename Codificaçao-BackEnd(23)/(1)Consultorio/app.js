//entrada
const inpaciente = document.getElementById('inpaciente')
//ações
const btnAdd = document.getElementById('btnAdd')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')
//saidas
const outLista = document.getElementById('outLista')
const outAtendimento = document.getElementById('outAtendimento')
const arrayinpa = []
const pacienteatual = []
btnAdd.addEventListener('click', () => {
    const paciente = inpaciente.value
    arrayinpa.push(paciente)
    outLista.innerHTML = `${arrayinpa}`
    inpaciente.value = ''
})
btnUrgencia.addEventListener('click', () => {
    const pacienteurgente = inpaciente.value
    arrayinpa.unshift(pacienteurgente)
    outLista.innerHTML = `${arrayinpa}`
    inpaciente.value = ''
})
btnAtender.addEventListener('click', () => {
    const pacienteAtendimento = arrayinpa[0]
    pacienteatual.unshift(pacienteAtendimento)
    outAtendimento.innerHTML = `${pacienteatual}`
    if (!arrayinpa[0]) {
        alert('não há pacientes')
        return
    }

    if(pacienteatual){
        pacienteatual.pop()
        pacienteatual.unshift(arrayinpa[0])
    }
})