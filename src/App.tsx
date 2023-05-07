import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { HomeProducts } from "./components/home-products/home-products";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <NavBar />
        <HomeProducts />
      </div>
    </div>
  );
}

export default App;
