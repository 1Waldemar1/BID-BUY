import { useState } from "react";
import { Link } from "react-router-dom";
import { Messenger } from "../messenger/messenger";
import style from "./auction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export const Auction = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://cdn.citilink.ru/sW8mxiEBzIlKrMVEnUfnpR7-cMaWzfWpGnq4IBAfsFQ/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1804836_v01_b.jpg",
      name: "Смартфон vivo T1 6/128Gb, таинственная галактика",
      price: 19990,
      description:
        "VIVO T1 — смартфон с AMOLED-дисплеем, аккумулятором ёмкостью 5000 мАч, быстрой зарядкой FlashCharge и процессором Qualcomm Snapdragon 680. Максимум возможностей для работы и отдыха.",
      date: "2023-05-27",
    },
    {
      id: 2,
      image:
        "https://cdn.citilink.ru/IbsUkzj9ns2IULnGClAOHPbhgKNC-2PmQYrAg9MG3Ds/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1892210_v01_b.jpg",
      name: "Смартфон Huawei nova 10 SE 8/128Gb, серебристый",
      price: 23990,
      description:
        "Смартфон Huawei nova 10 SE — функциональное устройство в тонком корпусе, которое удобно лежит в ладони. Матовое покрытие задней панели не оставляет отпечатков пальцев",
      date: "2023-05-28",
    },
    {
      id: 3,
      image:
        "https://cdn.citilink.ru/E-xkOEpluxpGKlX8mwKc48guNrMjt0D18M40D4Y2kOo/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1782601_v01_b.jpg",
      name: "Смартфон Samsung Galaxy A52s 8/256Gb, SM-A528B, черный",
      price: 28990,
      description:
        "Смартфон Samsung Galaxy A52s выполнен во влаго- и пыленепроницаемом корпусе. Устройство способно выдержать погружение на 1 метр в пресную воду и пробыть там до получаса",
      date: "2023-06-06",
    },
    {
      id: 4,
      image:
        "https://cdn.citilink.ru/2G_Ykw3vOi2xmaowvxPZy8v6rkeQkonAjIS33TveVus/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1841083_v01_b.jpg",
      name: "Смартфон vivo Y35 4/128Gb, черный агат",
      price: 14990,
      description:
        "Смартфон VIVO Y35 выполнен в корпусе, устойчивом к царапинам и интенсивному использованию. Восьмиядерный процессор обеспечивает высокую производительность, плавную и быструю работу приложений.",
      date: "2023-06-01",
    },
    {
      id: 5,
      image:
        "https://cdn.citilink.ru/1pr9zJ1ttRZPVEqwqgDITaeQD4i9fgGPBd_cQ_HSHro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1823504_v01_b.jpg",
      name: "Смартфон Xiaomi Poco C40 4/64Gb, черный",
      price: 7990,
      description:
        "Смартфон Xiaomi Poco C40 имеет 6,71-дюймовый дисплей Dot Drop с визуальным 2,5D-эффектом и максимальным разрешением 1650×720 пикселей. Экран обладает широкими углами обзора",
      date: "2023-05-21",
    },
    {
      id: 6,
      image:
        "https://cdn.citilink.ru/mP1umTanD3u6K77usjJJL_n75vEmQIvTgS_Ctc4iAWs/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1402188_v01_b.jpg",
      name: "Смартфон Xiaomi Redmi 9A 2/32Gb, синий",
      price: 5990,
      description:
        "Смартфон Xiaomi Redmi 9A – бюджетная модель, подходящая для использования мессенджеров и интернета.",
      date: "2023-06-07",
    },
    {
      id: 7,
      image:
        "https://cdn.citilink.ru/zlkju8NfWkURiSrPseHGeGBMidZvAV2COefYzlEHCwA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1869931_v01_b.jpg",
      name: "Смартфон REALME 10 4G 8/256Gb, RMX3630, черный",
      price: 21990,
      description:
        "Шустрый, возможно удвоить ОЗУ за счёт ПЗУ. Приятно лежит в руке, относительно небольшой. Неплохой объём памяти.",
      date: "2023-05-20",
    },
    {
      id: 8,
      image:
        "https://cdn.citilink.ru/OF00BK8O5MFbc8Y6JBGpmTleT6WZARvOuMbz8kovRbA/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1804848_v01_b.jpg",
      name: "Смартфон vivo T1 6/128Gb, звездный путь",
      price: 19990,
      description:
        "VIVO T1 — смартфон с AMOLED-дисплеем, аккумулятором ёмкостью 5000 мАч, быстрой зарядкой FlashCharge и процессором Qualcomm Snapdragon 680. Максимум возможностей для работы и отдыха.",
      date: "2023-06-03",
    },
  ]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>Лоты</span>
      </div>
      <div className={style.mobile}>
        <FontAwesomeIcon icon={faFilter} />
        <span>Фильтры</span>
      </div>
      <div className={style.main}>
        <div className={style.catalog}>
          <div className={style.sidebar}>
            <h3>Категории</h3>
            <div className={style.category}>
              <div className={style.title_category}>Цена</div>
              <div className={style.inp}>
                <input type="number" placeholder="от 0" />
                <input type="number" placeholder="до 1000000" />
              </div>
            </div>
            <div className={style.category}>
              <div className={style.title_category}>
                Смартфоны и фототехника
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_1"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_1">
                  Планшеты
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_2"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_2">
                  Смартфоны и гаджеты
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_3"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_3">
                  Фототехника
                </label>
              </div>
            </div>
            <div className={style.category}>
              <div className={style.title_category}>
                ПК, ноутбуки, переферия
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_4"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_4">
                  Компьютеры и ПО
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_5"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_5">
                  Ноутбуки и аксессуары
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_6"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_6">
                  Переферия и аксессуары
                </label>
              </div>
            </div>
            <div className={style.category}>
              <div className={style.title_category}>ТВ, консоли и аудио</div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_7"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_7">
                  Аудеотехника
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_8"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_8">
                  Консоли
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_9"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_9">
                  Телевизоры и аксессуары
                </label>
              </div>
            </div>
            <div className={style.category}>
              <div className={style.title_category}>Бытовая техника</div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_10"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_10">
                  Встраимовая техника
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_11"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_11">
                  Техника для дома
                </label>
              </div>
              <div className={style.check}>
                <input
                  className={style.checkbox__input}
                  type="checkbox"
                  id="checkbox_12"
                />
                <label className={style.checkbox__label} htmlFor="checkbox_12">
                  Техника для кухни
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={style.product_list}>
          <div className={style.product_list_content}>
            <div className={style.product_catalog}>
              {products.map((product) => (
                <Link key={product.id} className={style.product} to={"#"}>
                  <div className={style.image}>
                    <img src={product.image} alt="" />
                  </div>
                  <div className={style.info}>
                    <div className={style.name}>{product.name}</div>
                    <div className={style.discription}>
                      {product.description}
                    </div>
                  </div>
                  <div className={style.auction}>
                    <div className={style.details}>
                      <div className={style.price}>
                        {product.price.toLocaleString("ru-RU", {
                          currency: "RUB",
                          style: "currency",
                          maximumFractionDigits: 0,
                        })}
                      </div>
                      <div className={style.date}>
                        <span className={style.date_end}>
                          Дата завершения аукциона: <span>{product.date}</span>
                        </span>
                      </div>
                    </div>
                    <div className={style.btn}>
                      <button>Подробнее</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Messenger />
    </div>
  );
};
