import './App.css';
import Empresa from './Components/Empresa';
import Header from './Components/Header';
import Planos from './Components/Planos';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Planos />
        <Empresa />
      </main>
    </div>
  );
}

export default App;
