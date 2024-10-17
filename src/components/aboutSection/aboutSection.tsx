import styles from './aboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_text}>
        <h2>О компании</h2>
        <p>WebStore — многопрофильная студия дизайна...</p>
      </div>
      <div className={styles.about_images}>
        {/* Замените изображения на нужные */}
        <img src="path-to-image1" alt="About Image 1" />
        <img src="path-to-image2" alt="About Image 2" />
      </div>
    </section>
  );
};

export default AboutSection;
