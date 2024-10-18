import styles from './footer.module.scss';
import { Map, Placemark } from '@pbe/react-yandex-maps';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="map-container">
        <Map
          defaultState={{ center: [55.725833, 37.653569], zoom: 15 }}
          className={styles.map}
          >
          <Placemark geometry={[55.725833, 37.653569]} />
        </Map>
      </div>
      <div className={styles.contact_info}>
        <div className={styles.info_box}>
          <div className={styles.info_container}>
            <p className={styles.title}>Aдрес:&nbsp;</p>
            <p className={styles.subtitle}>г. Москва, <br/> улица Дербеневская, дом 1, <span className={styles.line_break}></span> строение 6, подъезд 4 этаж 2</p>
          </div>
          <div className={styles.info_container}>
            <p className={styles.title}>Телефоны:&nbsp;</p>
            <p className={styles.subtitle}>+7 (495) 926-01-26 <br/> +7 (495) 926-01-26</p>
          </div>
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_container}>
            <p className={styles.title}>E-mail:&nbsp;</p>
            <p className={styles.info_email}>info@nologostudio.ru</p>
          </div>
          <div className={styles.info_container}>
            <p className={styles.title}>Skype:&nbsp;</p>
            <p className={styles.subtitle}>alex-trainer</p>
          </div>
          <div>
            <p className={styles.subtitle}>&copy; Mishe4ka14</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
