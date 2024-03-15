import './App.css';
import { Bala } from './Components/Bala.jsx'
import { Tvenkinys } from './Components/Tvenkinys.jsx';
import { Jura } from './Components/Jura.jsx';
import { Vandenynas } from './Components/Vandenynas.jsx';

function App() {
  return (
    <div className="App">
      <Bala />
      <Tvenkinys/>
      <Jura />
      <Vandenynas/>

    </div>
  );
}

export default App;
