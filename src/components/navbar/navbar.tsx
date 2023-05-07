import { render } from "react-dom";
import {
  faBars,
  faCartPlus,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navbar.module.css";

export const NavBar = () => {
  return (
    <div className={style.contener}>
      <div className={style.contant}>
        <div className={style.btnserch}>
          <div className={style.btn}>
            <button>
              <FontAwesomeIcon icon={faBars} className={style.menu} />
              Каталог товаров
            </button>
          </div>
          <div className={style.serch}>
            <form  className={style.sub} action="" method="get">
              <input name="s" placeholder="Поиск по товарам" type="search" />
              <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
      </div>
    </div>
  );
};

render(<NavBar />, document.getElementById("root"));
