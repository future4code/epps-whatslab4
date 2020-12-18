import React from "react"
import {InputUsuario, InputMensagem, Botao, Container, ContainerInputs} from "./styles/Styles.js";

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
      <Container>
        <ContainerInputs>
          <InputUsuario
            placeholder={"Nome"}
            value={this.state.valorInputUsuario}
            onChange={this.onChangeinputUsuario}
          />
          <InputMensagem 
            placeholder={'Mensagem'}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeinputMensagem} 
          />
          <Botao onClick={this.adicionaMensagem}>Enviar mensagem</Botao>
        </ContainerInputs>
        <div>{listaMensagens}</div>
      </Container>
    )
  }
}

export default Inputs