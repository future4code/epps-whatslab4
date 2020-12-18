import React from "react"

class Inputs extends React.Component{

  state = {
    mensagem: [
  ],
    valorInputUsuario: "",
    valorInputMensagem: "",
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    const novoMensagem = [
      ...this.state.mensagem, novaMensagem
    ];
    this.setState({ mensagem: novoMensagem})
  };

  onChangeinputUsuario = (event) => {
    console.log(event.target.value)
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeinputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }

  render(){
    const listaMensagens = this.state.mensagem.map((novaMensagem) => {
      return (
          <p>{novaMensagem.usuario}: {novaMensagem.mensagem}</p>        
      )
    })

    return(
      <div>
        <div>
          <input 
            placeholder={"Nome"}
            value={this.state.valorInputUsuario}
            onChange={this.onChangeinputUsuario}
          />
          <input 
            placeholder={'Mensagem'}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeinputMensagem} 
          />
          <button onClick={this.adicionaMensagem}>Enviar mensagem</button>
        </div>
        <div>{listaMensagens}</div>
      </div>
    )
  }
}

export default Inputs