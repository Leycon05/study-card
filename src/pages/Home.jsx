import { FiLogOut } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import "../styles/home.css";
import { useState } from "react";

function Home() {
  const nome = "Leycon";

  const [cards, setCards] = useState([
    {
      nome: "Estudar React",
      tema: "Front-end",
      texto: "Aprender componentes e hooks",
      data: "10/03 - 15/03",
      status: "pendente"
    }
  ]);

  // ✅ concluir
  function concluirCard(index) {
    const novosCards = [...cards];
    novosCards[index].status = "concluido";
    setCards(novosCards);
  }

  // ❌ cancelar
  function cancelarCard(index) {
    const novosCards = [...cards];
    novosCards[index].status = "cancelado";
    setCards(novosCards);
  }

  // 🔄 reativar
  function reativarCard(index) {
    const novosCards = [...cards];
    novosCards[index].status = "pendente";
    setCards(novosCards);
  }

  // 🗑 excluir
  function excluirCard(index) {
    const novosCards = cards.filter((_, i) => i !== index);
    setCards(novosCards);
  }

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

        <button className="btn-novo">
          novo <FiPlus size={44} />
        </button>
      </div>

      {/* TAREFAS */}
      <h3 className="titulo">minhas tarefas</h3>

      {/* CARDS */}
      <div className="cards">
        {cards.map((card, index) => (
          <div
            className={`card ${card.status}`}
            key={index}
          >

            <div className="card-top">
              <strong>{card.nome}</strong>
              <span>{card.tema}</span>
            </div>

            <p>{card.texto}</p>

            <div className="card-info">
              <div className="info-left">
                <div className="info-left">
  <span className="info-item">
    <FiClock size={16} />
    {card.data}
  </span>

  <span className="info-item">
    {card.status === "pendente" && (
      <>
        <FiAlertCircle size={16} /> Pendente
      </>
    )}

    {card.status === "concluido" && (
      <>
        <FiCheckCircle size={16} /> Concluído
      </>
    )}

    {card.status === "cancelado" && (
      <>
        <FiXCircle size={16} /> Cancelado
      </>
    )}
  </span>
</div>
              </div>

              <button className="edit-btn">
                <FiEdit size={20} />
              </button>
            </div>

            <div className="card-buttons">

              {/* PENDENTE */}
              {card.status === "pendente" && (
                <>
                  <button
                    className="concluir"
                    onClick={() => concluirCard(index)}
                  >
                    Concluir
                  </button>

                  <button
                    className="cancelar"
                    onClick={() => cancelarCard(index)}
                  >
                    Cancelar
                  </button>
                </>
              )}

              {/* CONCLUÍDO */}
              {card.status === "concluido" && (
                <button
                  className="excluir"
                  onClick={() => excluirCard(index)}
                >
                  Excluir
                </button>
              )}

              {/* CANCELADO */}
              {card.status === "cancelado" && (
                <>
                  <button
                    className="reativar"
                    onClick={() => reativarCard(index)}
                  >
                    Reativar
                  </button>

                  <button
                    className="excluir"
                    onClick={() => excluirCard(index)}
                  >
                    Excluir
                  </button>
                </>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;