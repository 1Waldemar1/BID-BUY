import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { HomeProducts } from "./components/home-products/home-products";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <NavBar />
        <HomeProducts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
