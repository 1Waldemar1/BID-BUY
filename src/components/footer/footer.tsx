import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCoins,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className={style.colorfooter}>
      <div className={style.logo}>
        <img src={logo} alt="" />
        <p>
          Don't worry if something doesn't work. If everything worked, you'd be
          fired.
        </p>
      </div>
      <p>© Web development 2023</p>
      <div className={style.mobile}>
        <ul className={style.list}>
          <Link to={"/"}>
            <li className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faHouse} />
              <p>Главная</p>
            </li>
          </Link>
          <Link to={"auction"}>
            <li className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faCoins} />
              <p>Аукцион</p>
            </li>
          </Link>
          <Link to={"signin"}>
            <li className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faUser} />
              <p>Войти</p>
            </li>
          </Link>
          <Link to={"/"}>
            <li className={style.item}>
              <FontAwesomeIcon className={style.icon} icon={faCartPlus} />
              <p>Корзина</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
