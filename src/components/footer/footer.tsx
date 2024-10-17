import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_info}>
        <p>Адрес: г. Москва, ул. Долгоруковская...</p>
        <p>Телефон: +7 (495) 926-01-26</p>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d... "
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </footer>
  );
};

export default Footer;
