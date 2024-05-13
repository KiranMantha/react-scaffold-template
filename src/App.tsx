import { Textbox } from '@atoms';
import './App.css';
import { env } from './env';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Build mode: {env.NODE_ENV}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Textbox placeholder="i'm texbox atom imported from @atoms" />
      </header>
    </div>
  );
}

export default App;
