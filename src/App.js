import Counter from '../src/counter'
import './App.css';
import Testing from '../src/exaple'
import Countertwo from '../src/anotherCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countertwo/>
        <Counter/>
          <Testing name = "Chris" />
      </header>
    </div>
  );
}

export default App;
