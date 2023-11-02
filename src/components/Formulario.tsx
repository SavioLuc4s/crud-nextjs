import Cliente from "../core/Cliente"
import { useState } from "react"
import Entrada from "./Entrada"
import Botao from "./Botao"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setidade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            { id? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-5"/> 
            ) : false }
                <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
                <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setidade}/>

                <div className="mt-7 flex justify-end">
            <Botao cor="blue" className="mr-2"
            onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                {id ? 'Alterar' : 'Salvar'}            </Botao>
            <Botao onClick={props.cancelado}>
                Cancelar
            </Botao>
        </div>
        </div> 
    )
}