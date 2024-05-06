


const App=()=>{

    // const ativo = true
    const [ativo, setAtivo] = React.useState(true)
    const [contador, setContador] = React.useState(0)
    const [item, setItem] = React.useState(['item 1'])
    
    function Handleclick(){
        setContador((contador)=>{
            setItem((item)=>{
                return [...item, 'item' + contador]
            })   
        })
        return contador + 1
    }

    return(
        <>
        <button onClick={()=> setAtivo}>
            {ativo === true ? "ativo" : "inativo"}
        </button>
        <button>
            {contador}
        </button>
        </>
    )
}

export default App;