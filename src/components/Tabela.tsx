import Cliente from "../core/Cliente"
import { Delete, Edit } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
               {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>

        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center
                     text-green-600 rounded-full
                      hover:bg-purple-50 p-1 m-1`}>{Edit}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-1 m-1`}>{Delete}</button>

                ) : false}
            </td>
        )
    }
    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`text-gray-700 bg-gradient-to-r from-blue-200 to-blue-500`}>
            {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}