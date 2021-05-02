import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Table from './components/Table.js';
import Search from './components/Search.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Search />
      <br></br>
      <Table />
    </div>
  );
}

export default App;
