

const TextArea = ()=>{

    const [mensagem, setMensagem] = React.useState('')

    return(
        <form>
            <textarea 
                value={mensagem}
                id="mensagem" 
                rows="5"
                onchange={({target}) => setMensagem(event.target.value)}
                />
                <p>{mensagem}</p>
        </form>
    )
}

export default TextArea;