import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Menu } from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
      
    </div>
  );
}

export default App;
