import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Table from './components/Table.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
