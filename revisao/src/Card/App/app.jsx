import Perfil from '../perfil/perfil'
import imagemJessica from ''
const App =()=>{
    return(
        <Perfil 
        imagem={imagemJessica}
        nome={"Jessica Randall"}
        local="Londres, Reino Unido"
        cargo="Engenheiro de software"
        />
    )
}

export default App;