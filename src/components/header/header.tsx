import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className={style.contener}>
      <div className={style.mobile}>
        <span className={style.menu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <div className={style.content}>
          <div className={style.link}>
            <Link to={"/"} className={style.image}>
              <img src={logo} alt="" />
            </Link>
            <div className={style.num}>Москва +7 (965) 219-24-67</div>
          </div>
          <nav className={style.navbar}>
            <li>
              <Link className={style.color} to={"/"}>
                Акции
              </Link>
            </li>
            <li>
              <Link className={style.color} to={"/"}>
                Журнал
              </Link>
            </li>
            <li>
              <Link className={style.color} to={"/"}>
                Доставка
              </Link>
            </li>
            <li>
              <Link className={style.color} to={"/"}>
                Обратная связь
              </Link>
            </li>
          </nav>
        </div>
        <span className={style.menu}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
    </div>
  );
};
