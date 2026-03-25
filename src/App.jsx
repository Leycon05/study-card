import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from './Cadastro';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Se o usuário entrar no site puro, ele manda pro Cadastro */}
        <Route path="/" element={<Navigate to="/cadastro" />} />
        
        {/* Define os caminhos de cada tela */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;