import "./App.css";
import Documentation from "./components/Documentation";
import Vechicle from "./components/Vehicle";
import InputToken from 'input-token'

function App() {
  return (
    <div className="grid gap-y-6">
      <Vechicle />

      <Documentation />
      <InputToken/>
    </div>
  );
}

export default App;
