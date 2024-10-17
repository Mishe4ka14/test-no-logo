import styles from './mainSection.module.scss';
import heroImage from '../../assets/LED-Computer-Monitor-PNG-Free-Image.png'; 
import { Button } from '../button/button';

const MainSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.content}> 
          <h2>
            <span className={styles.boldWhite}>Корпоративный</span><br />
            <span className={styles.boldWhite}>сайт</span><br />
            <span className={styles.thinWhite}>от</span><br />
            <span className={styles.boldGray}>50 000</span><br />
            <span className={styles.thinWhite}>рублей</span>
          </h2>
          <Button red={true} />
        </div>
      </div>
      <img src={heroImage} alt="Hero" className={styles.hero_image} />
    </section>
  );
};

export default MainSection;
