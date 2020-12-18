import styled from 'styled-components'

const InputUsuario = styled.input`
    background-color: #d8dfd2;
    border-radius: 10px;
    border: none;
    margin: 20px 4px;
    height: 22px;
    width: 100px;
    padding: 8px;
    outline: none;
`

const InputMensagem = styled.input`
    background-color: #d8dfd2;
    border-radius: 10px;
    border: none;
    margin: 20px 4px;
    height: 22px;
    width: 400px;
    padding: 8px;
    outline: none;
`

const Botao = styled.button`
    background-color: #999999;
    border-radius: 10px;
    border: none;
    margin: 20px 4px;
    height: 40px;
    width: 134px;
    padding: 8px;
    cursor: pointer;
    outline: none;
`

const Container = styled.div`
    background-color: whitesmoke;
    border-radius: 30px;
    height: 100vh;
    width: 960px;
    margin: auto;
    display: flex;
    justify-content: center;

`

const ContainerInputs = styled.div`
    display: flex;
    align-items: flex-end;
`

export {InputUsuario, InputMensagem, Botao, Container, ContainerInputs}