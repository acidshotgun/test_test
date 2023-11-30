import { navigationMenu, socials } from "./header.data";
import logo from "../../icons/logo_welbex.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <a href="#">
        <div className={styles.logo}>
          <img className={styles.icon} src={logo} alt="logo"></img>
          <p className={styles.descr}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </p>
        </div>
      </a>

      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {navigationMenu.map((item, i) => {
            return (
              <li className={styles.listItem} key={i}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.contacts}>
        <span className={styles.phone}>+7 555 555-55-55</span>
        <ul className={styles.socials}>
          {socials.map((item, i) => {
            return (
              <li className={styles.socialsItem} key={i}>
                <a href={item.link}>
                  <img src={item.name} alt="icon"></img>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
