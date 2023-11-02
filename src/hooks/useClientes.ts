import Cliente from "../core/Cliente"
import { useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import { useEffect } from "react"
import useTabelaouForm from "./useTabelaouForm";


export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } = useTabelaouForm()
  
    useEffect(obterTodos, [])
    
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
       obterTodos()
     }
  
    async function salvarCliente(cliente: Cliente) {
     await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
  
}

    return {
        cliente,
        clientes,
        novoCliente,
        excluirCliente,
        salvarCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
        
    }
}