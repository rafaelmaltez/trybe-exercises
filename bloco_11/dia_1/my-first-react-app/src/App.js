import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const items = ["Finalizar módulo React", "Curso Formula Negocio Online", "Concluir treinamento Outsystems"];

function App() {

  return (
    <div className="App">
      {items.map(item => task(item))}
    </div>
  );
}

export default App;
