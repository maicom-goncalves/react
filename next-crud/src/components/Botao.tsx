interface BotaoProps{
    cor?:'green' | 'blue' | 'gray'
    className?:string
    children:any
    onClick?: ()=> void
}
export default function Botao(props){
    const cor = props.cor ?? 'gray'
    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-${cor} to-${cor}-700
        text-white px-4 py-2 rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}