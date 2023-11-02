
interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    className?: string
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void

}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            className={`bg-gray-100  border border-blue-700 rounded-lg focus:outline-none px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}`} />
        </div>
    )
}