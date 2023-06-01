import {
  faBars,
  faCartPlus,
  faCoins,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./navbar.module.css";
import "../../NavLink.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={style.contener}>
      <div className={style.contant}>
        <div className={style.serch__btns}>
          <div className={style.catalogy}>
            <button className={style.menu}>
              <FontAwesomeIcon className={style.icon} icon={faBars} />
              Каталог товаров
            </button>
          </div>
          <div className={style.serch}>
            <form className={style.sub} action="" method="get">
              <input
                className={style.inp}
                name="s"
                placeholder="Поиск по товарам"
                type="search"
              />
              <button className={style.btn__serch} type="submit">
                <FontAwesomeIcon
                  className={style.serch__icon}
                  icon={faMagnifyingGlass}
                />
              </button>
            </form>
          </div>
        </div>
        <div className={style.nav}>
          <NavLink className={style.item} to={"auction"}>
            <FontAwesomeIcon icon={faCoins} />
            <span className={style.title}>Аукцион</span>
          </NavLink>
          <NavLink className={style.item} to={"signin"}>
            <FontAwesomeIcon icon={faUser} />
            <span className={style.title}>Войти</span>
          </NavLink>
          <NavLink className={style.item} to={"order"}>
            <FontAwesomeIcon icon={faCartPlus} />
            <span className={style.title}>Корзина</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

{
  /* <ul>
  <li>
    <a href="">Бытовая техника</a>
  </li>
  <li>
    <a href="">Смартфоны</a>
  </li>
  <li>
    <a href="">Смартфоны</a>
  </li>
  <li>
    <a href="">Фототехника</a>
  </li>
  <li>
    <a href="">ТВ</a>
  </li>
  <li>
    <a href="">Консоли</a>
  </li>
  <li>
    <a href="">Пк</a>
  </li>
  <li>
    <a href="">Ноутбуки</a>
  </li>
  <li>
    <a href="">Периферия</a>
  </li>
  <li>
    <a href="">Сетевое оборудование</a>
  </li>
</ul> */
}
