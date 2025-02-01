import './App.css';
import Empresa from './Components/Empresa';
import Footer from './Components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
