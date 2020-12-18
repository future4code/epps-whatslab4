import React from "react"
import {InputUsuario, InputMensagem, Botao, Container, ContainerMensagens} from "./styles/Styles.js"


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
  onKeyUpEnter = (event) =>{
    if(event.key === "Enter" ){
      this.adicionaMensagem()
    }
  }

  onChangeinputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeinputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }

  render(){
    const listaMensagens = this.state.mensagem.map((novaMensagem) => {
      return (
          <p key={novaMensagem}><b>{novaMensagem.usuario}:</b> {novaMensagem.mensagem}</p>  
            
      )
    })

    return(
      <Container>
          <div>
            <InputUsuario
              placeholder={"Nome"}
              value={this.state.valorInputUsuario}
              onChange={this.onChangeinputUsuario}
            />
            <InputMensagem 
              placeholder={'Mensagem'}
              value={this.state.valorInputMensagem}
              onChange={this.onChangeinputMensagem} 
              onKeyPress={this.onKeyUpEnter}
            />
            <Botao type="submit" onClick={this.adicionaMensagem}>Enviar mensagem</Botao>
          </div>
          <ContainerMensagens>{listaMensagens}</ContainerMensagens>
      
      </Container>
    )
  }
}

export default Inputs