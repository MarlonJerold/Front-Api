import React from "react";
import SendButton from "../Botao";

class Formulario extends React.Component {
  render() {
    return (
      <form className="formulario">
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" required/>
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" required/>
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de nascimento:</label>
          <input type="date" name="datanascimento" id="datanascimento" required/>
        </div>
        <div>
          <label htmlFor="telefoene">Telefone:</label>
          <input type="tel" name="telefone" id="telefone" placeholder="Digite seu telefone" required/>
        </div>
        <SendButton />
      </form>

    )
  }
}

export default Formulario;