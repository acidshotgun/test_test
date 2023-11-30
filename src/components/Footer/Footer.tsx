import styles from "./Footer.module.scss";
import { aboutCompanyData, menuDataLeft, menuDataRight } from "./footer.data";
import { socials } from "../Header/header.data";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.about}>
              <span className={styles.subheader}>О компании</span>
              <ul className={styles.list}>
                {aboutCompanyData.map((item, i) => {
                  return (
                    <li className={styles.listItem} key={i}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.menu}>
              <span className={styles.subheader}>Меню</span>
              <div className={styles.menuItems}>
                <ul className={styles.list}>
                  {menuDataLeft.map((item, i) => {
                    return (
                      <li className={styles.listItem} key={i}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
                <ul className={styles.list}>
                  {menuDataRight.map((item, i) => {
                    return (
                      <li className={styles.listItem} key={i}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={styles.contacts}>
              <span className={styles.subheader}>Контакты</span>
              <div className={styles.info}>
                <span className={styles.phone}>+7 555 555-55-55</span>
                <ul className={styles.list}>
                  {socials.map((item, i) => {
                    return (
                      <li className={styles.social} key={i}>
                        <a href={item.link}>
                          <img src={item.name} alt="icon"></img>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <span className={styles.adress}>
                  Москва, Путевой проезд 3с1, к 902
                </span>
              </div>
            </div>
          </div>
          <div className={styles.rules}>
            <span className={styles.rights}>
              ©WELBEX 2022. Все права защищены.
            </span>
            <a className={styles.politics} href="#">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
