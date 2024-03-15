import './App.css';
import { Bala } from './Components/Bala.jsx'
import { Tvenkinys } from './Components/Tvenkinys.jsx';
import { Jura } from './Components/Jura.jsx';
import { Vandenynas } from './Components/Vandenynas.jsx';
import { Pasaulis } from './Components/Pasaulis.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Bala />
      </div>
      <div>
        <Tvenkinys/>
      </div>
      <div>
        <Jura />
      </div>
      <div>
        <Vandenynas/>
      </div>
      <div>
        <Pasaulis />
      </div>
    </div>
  );
}

export default App;
