import styles from './aboutSection.module.scss';
import camera from '../../assets/Vector-Digital-Camera.png';
import notebook from '../../assets/Notebook-PNG-Cutout.png';
const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_text}>
        <h2 className={styles.title}>О компании</h2>
        <p className={styles.text}>
          <span className={styles.title_web}>Web</span>
          <span className={styles.title_store}>Store</span>
          — многопрофильная студия дизайна, основанная в 2006 году. За эти годы мы успели поработать в разных направлениях,
          реализовали множество проектов, достигли профессиональных высот и собрали внушительное портфолио.
          <br /> Сегодня мы сосредоточились на том, что нам по-настоящему нравится: дизайн и разработка веб-сайтов и мобильных приложений.
        </p>
        <p className={styles.text}>
          Мы гордимся своей замечательной командой по-настоящему талантливых дизайнеров, программистов, менеджеров, тестировщиков, проектировщиков.
          Все сотрудники &nbsp;
          <span className={styles.title_web}>Web</span>
          <span className={styles.title_store}>Store</span>
            &nbsp;работают в штате, поэтому мы гарантируем, что весь комплекс работ по разработке, созданию, поддержке и
          продвижению сайтов выполняется строго профессионально и качественно.
        </p>
        <p className={styles.text}>Мы уверены, что хорошая, четкая и последовательная разработка имеет большое значение для эффективного маркетинга. Поэтому предлагаем
          высококачестныый дизайн, удобство и функциональность, адаптированные под каждого клиента в зависимости от его потребностей и поставленных бизнес-задач
        </p>
      </div>
      <div className={styles.about_images}>
        <img src={camera} className={styles.photo_camera} alt="Camera" />
        <img src={notebook} className={styles.photo_camera} alt="Notebook" />
      </div>
    </section>
  );
};

export default AboutSection;
