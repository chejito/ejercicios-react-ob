import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import Clockfunctional from './components/clockFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Clock></Clock> */}
        <Clockfunctional></Clockfunctional>
      </header>
    </div>
  );
}

export default App;
