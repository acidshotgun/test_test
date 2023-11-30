import styles from "./BackgroundElements.module.scss";

const BackgroundElements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lightPurple}></div>
      <div className={styles.lightRed}></div>
      <div className={styles.purpleBall}></div>
      <div className={styles.redBallBig}></div>
      <div className={styles.redBallSmall}></div>
    </div>
  );
};

export default BackgroundElements;
