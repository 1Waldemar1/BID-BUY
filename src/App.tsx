import style from "./app.module.css";
import { NavBar } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { HomeProducts } from "./components/home-products/home-products";
import { Footer } from "./components/footer/footer";
import { Routes, Route, Link } from "react-router-dom";
import { SigIn } from "./components/register/signin/signin";
import { SigUp } from "./components/register/signup/signup";
import { Auction } from "./components/auction/auction";
import { Order } from "./components/basket/basket";

function App() {
  return (
    <div>
      <Header />
      <div className={style.app}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeProducts />} />
          <Route path="auction" element={<Auction />} />
          <Route path="signin" element={<SigIn />} />
          <Route path="signup" element={<SigUp />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
