import Button from "../../components/Button/Button";
import { mianPageData, mianPageDataAdaptive } from "./mainPage.data";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <div>
        <div className={styles.content}>
          <div className={styles.subheader}>
            <h1>
              Зарабатывайте
              <br /> больше <br />
              <span>с WELBEX</span>
            </h1>
            <p>
              Развиваем и контролируем <br /> продажи за вас
            </p>
          </div>
          <div className={styles.descr}>
            <div className={styles.subheader}>
              Вместе с 
              <span className={styles.textOne}>БЕСПЛАТНОЙ </span>
              <br /> <span className={styles.textTwo}>КОНСУЛЬТАЦИЕЙ</span>
              <span>&nbsp;</span>мы дарим:
            </div>
            {mianPageData.map((item, i) => {
              return (
                <div className={styles.item}>
                  <span className={styles.title}>{item.title}</span>
                  <p className={styles.text}>{item.text}</p>
                </div>
              );
            })}
            {mianPageDataAdaptive.map((item, i) => {
              return (
                <div className={styles.itemAdaptive}>
                  <div className={styles.line}></div>
                  <span className={styles.title}>{item.adaptiveTitle}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.button}>
          <Button text="Получить консультацию" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
