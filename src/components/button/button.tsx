import styles from './button.module.scss';

interface IButtonProps {
  red: boolean;
}

export const Button = ({ red }: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${red ? styles.red : styles.white}`}
    >
      Заказать сайт
    </button>
  );
};
