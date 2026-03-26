import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom'; // O import tem que ficar aqui no topo!

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = (e) => {
    e.preventDefault();
    console.log("Tentativa de login com:", { email, senha });
    alert("Bora entrar!");
  };

  return (
    <div className="container-principal">
      <form className="card-login" onSubmit={entrar}>
        <h1>Login</h1>
        
        <div className="campo-input">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Seu email cadastrado" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campo-input">
          <label>Senha</label>
          <input 
            type="password" 
            placeholder="Sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit" className="botao-entrar">
          Entrar
        </button>

        {/* O Link tem que ficar dentro do form ou do container, depois do botão */}
        <Link to="/cadastro" style={{ color: 'white', marginTop: '15px', display: 'block', textDecoration: 'none' }}>
          Não tem conta? Cadastre-se
        </Link>
      </form>
    </div>
  );
}

export default Login;