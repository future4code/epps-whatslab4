import React from "react"


class Inputs extends React.Component{
  render(){
    return(
      <div>
        <input placeholder={"Nome"}/>
        <input placeholder={'Mensagem'} />
        <button>Enviar mensagem</button>
      
      </div>
    )
  }
}

export default Inputs