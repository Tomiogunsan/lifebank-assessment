import "./App.css";
import Documentation from "./components/Documentation";
import Vechicle from "./components/Vehicle";

function App() {
  return (
    <div className="grid gap-y-6">
      <Vechicle />

      <Documentation />
    </div>
  );
}

export default App;
