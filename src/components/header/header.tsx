import Nav from "react-bootstrap/esm/Nav";
import logo from "../../assets/logo.png";
import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={style.contener}>
      <div className={style.content}>
        <div className={style.link}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div className={style.num}>Москва +7 (965) 219-24-67</div>
        </div>
        <div className={style.navbar}>
          <Nav>
            <Nav.Link href="/">
              <div className={style.color}>Акции</div>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/">
              <div className={style.color}>Журнал</div>
            </Nav.Link>
            <Nav.Link eventKey={3} href="/">
              <div className={style.color}>Доставка</div>
            </Nav.Link>
            <Nav.Link eventKey={4} href="/">
              <div className={style.color}>Обратная связь</div>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};
