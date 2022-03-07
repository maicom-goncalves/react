import { useEffect,useState } from "react";
import Cliente from "../components/core/Cliente";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../components/core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()
  const {
      tabelaVisivel,formularioVisivel,
      exibirTabela,exibirFormulario
  } = useTabelaOuForm();
  //const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');
  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes,setclientes] = useState<Cliente []>([])

  useEffect(obterTodos,[])
  
  function obterTodos(){
    repo.obterTodos().then(clientes =>{
      setclientes(clientes)
      //setVisivel('tabela')
      exibirTabela()
    })
  }

this.clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 24, '2'),
    new Cliente('Paulinha', 22, '3'),
    new Cliente('Paola', 44, '4')
  ]
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    //setVisivel('form')
    exibirFormulario()
  }
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
    console.log(`Excluir... ${cliente.nome}`)
  }
 async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente(){
    setCliente(Cliente.vazio())
    //setVisivel('form')
    exibirFormulario()
  }
  return{
      novoCliente,salvarCliente,
      clienteExcluido,clienteSelecionado,
      obterTodos,cliente,clientes,
      tabelaVisivel,exibirTabela,exibirFormulario
  }
}