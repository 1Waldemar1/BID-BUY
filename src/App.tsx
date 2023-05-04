import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
