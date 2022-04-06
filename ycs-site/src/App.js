import logo from './logo.svg';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import Our_Team from './components/Our_Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css';

//ORIGINAL WEBSIT http://yalecompsociety.org/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Yale Computer Society Site
        </h1>
        <a
          className="App-link"
          href="http://yalecompsociety.org/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About YCS
        </a>
        <About/>
        <Projects/>
        <Events/>
        <Our_Team/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
