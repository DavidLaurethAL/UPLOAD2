const data = require('./onibus.json')
    const ID =(Valor)=>{
        // console.log(data.linhas[Valor].id)
        console.log(data.linhas[Valor].horarios)
    }
    console.log(ID)
    const numero = 1
    ID(numero-1)
        // const resposta1 = `SEU ID:${data.linhas[Valor].id}, HORARIOS:${data.linhas[Valor].horarios}`
        // console.log(resposta1)
    // console.log(`${cidades.toString()}`) - console.log(`${cidades.join(';')}`)
