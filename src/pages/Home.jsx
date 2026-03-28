import { FiLogOut } from "react-icons/fi";
import "../styles/home.css";
import { FiPlus } from "react-icons/fi";
function Home() {
  const nome = "Leycon";

  return (
    <div className="container">
      {/* HEADER */}
    <header className="header">
  <div className="header-content">
    <h2>Study card</h2>

    <button className="logout">
      <FiLogOut size={24} />
    </button>
  </div>
</header>

      {/* BOAS VINDAS */}
      <div className="welcome">
        <div className="welcome-box">
          <h1>Bem-Vindo,</h1>
        </div>

        <div className="name-box">
          <h2>{nome}</h2>
        </div>
<button className="btn-novo"> novo <FiPlus size={44}/></button></div>

      {/* TAREFAS */}
      <h3 className="titulo">minhas tarefas</h3>

      <div className="cards">
        {/* CARD 1 */}
        <div className="card">
          <div className="card-top">
            <strong>Nome</strong>
            <span>Tema</span>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="card-info">
            <span>⏱ inicio - fim</span>
            <span>🔷 pendente</span>
          </div>

          <div className="card-buttons">
            <button className="cancelar">Cancelar</button>
            <button className="concluir">Concluir</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="card-top">
            <strong>Nome</strong>
            <span>Tema</span>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="card-info">
            <span>⏱ inicio - fim</span>
            <span>✔ concluído</span>
          </div>

          <div className="card-buttons">
            <button className="excluir">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;