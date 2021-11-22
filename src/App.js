import './App.css';
import Simple from './Components/SimpleComponent';
import Pure from './Components/PureComponent';
import ClickCounter from './Components/ClickCounter';

function App() {
  return (
    <div className="App">
      <Simple/>
      <Pure/>
      <ClickCounter></ClickCounter>
    </div>
  );
}

export default App;
