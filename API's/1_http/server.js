import http from 'node:http'

const PORT = 3333

/**5 Rotas
 * GET -> listar todos usuários
 * GET -> listar UM usuários
 * POST -> Cadastrar usuários
 * PUT -> Atualizar UM usuário
 * DELETE -> Deletar UM usuário
 */
/** 3 Tipos de Requisição
 * body -> via formulario -> POST
 * ROUTER -> parametros -> GET, PUT, DELETE e as vezes o PATH
 * QUERY => /usuarios?param1=valor1&usuarios?param2=valor2 -> GET
 */
const usuarios=[]//base de dados
const server = http.createServer((request, response)=>{
    const {method, url} = request;
    //localhost:3333/usuario{id}

    //disponibilzar a API para ser consumida pelo FRONT-END
     respond.setHeader("Acess-control-Allow-Origin", "*")
     respond.setHeader("Acess-control-Allow-Methods', 'GET, POST, PUT, DELETE")
     respond.setHeader("Acess-control-Allow-Header")
     
    if(method === 'GET' && url === '/usuarios'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(usuarios))
    }else if(method === 'POST' && url === '/usuarios'){
       let body = ''
       request.on('data', (chunk)=>{
        //linha/chunk 1{
        //linha 2 "nome": "Carlos Wilton"    
        //linha 3}
          body += chunk.toString()
       })
       request.on('end', ()=>{
          const novousuario = JSON.parse(body)
          novousuario.id = usuarios.length + 1
          usuarios.push(novousuario)
          console.log(201, {'Content-Type': 'application/json'})
          response.end(JSON.stringify(novousuario))
       })
    }else if(method === 'PUT' && url.startsWith('/usuarios')){
        //encontrar um usuario(1)
        const id = parseInt(url.split('/'[2]))
        //receber as informações atualizadas(2)
        let body = ''
        request.on('data', (chunk)=>
            body += chunk.toString()
        )
        request.on('end', ()=>{
            const usuarioAtualizado = JSON.parse(body)
            console.log(usuarioAtualizado.nome)
        //encontrar usuario/confirmar existencia(3)
        const indexUsuario = usuarios.findIndex((usuario)=> usuario.id === id)
        if(indexUsuario === -1){
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Usuario não existe'}))
            return
        }
        //atualizar os dados(4)
        usuarios[indexUsuario] = {...usuarios[indexUsuario], ...usuarioAtualizado}
        //resposta de confirmação(5)
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(usuarios))[indexUsuario]
    })
    }else if(method === 'DELETE' && url.startsWith('/usuarios')){
        //localhnost:3333/usuario/
        const id = parseInt(url.split('/')[2])
        const encontrarUsuario = usuarios.findIndex((usuario)=> usuario.id === id)

        if(encontrarUsuario === -1){
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Usuario não encontrado'}))
            return
        }
        usuarios.splice(encontrarUsuario, 1) //Remover o usuário encontrado
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end({message: 'Usuário Deletado'});
    }else if(method === 'GET' && url.startsWith('/usuarios')){
        //http://localhost:3333/usuarios/1
        //split->[localhost:3333, usuarios, 1]
        const id = url.split('/')
        const usuario = usuarios.find((usuario)=>usuario.id == id)
        if(!user){
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message: 'Usuário não encontrado'}))
            return 
        }
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(usuario))
    }else{
        response.writeHead(404, {"Content-Type": "application/json"})
        response.end(JSON.stringify({message: 'Rota não EXISTE'}))
    }
});

server.listen(()=>{
    console.log(`Serviço on PORT: ${PORT}👌`)
})