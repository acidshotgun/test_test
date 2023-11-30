import styles from "./Button.module.scss";

interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
