import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {

  return (
    <div className="App">
      {task("Finalizar módulo React")}
    </div>
  );
}

export default App;
