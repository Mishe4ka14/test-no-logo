import styles from './mainSection.module.scss';
import heroImage from '../../assets/monitor.png'; // Загрузите нужное изображение

const MainSection = () => {
  return (
    <section className={styles.main}>
      <div className="content"> 
        <h2>Корпоративный сайт от 50 000 рублей</h2>
        <button className={styles.order_btn}>Заказать сайт</button>
      </div>
      <img src={heroImage} alt="Hero" className={styles.hero_image} />
    </section>
  );
};

export default MainSection;
