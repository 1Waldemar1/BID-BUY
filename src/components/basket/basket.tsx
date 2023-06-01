import { Link } from "react-router-dom";
import style from "./basket.module.css";

export const Order = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.title}>
          <div>
            <Link className={style.link} to={"/"}>
              <span>Вернуться к покупкам</span>
            </Link>
          </div>
          <span className={style.basket}>Корзина</span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.main}>
          <span className={style.not_products}>В корзине нет товаров</span>
          <span className={style.find}>
            Найдите то, что вам нужно в каталоге или при помощи поиска
          </span>
          <Link className={style.back_link} to={"/"}>
            Вернуться к покупкам
          </Link>
        </div>
      </div>
    </div>
  );
};
