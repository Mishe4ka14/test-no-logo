import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import icon from '../../assets/icons8-телефон-50.png';
import { Button } from '../button/button';

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrollDirection === 'down' ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.title_web}>Web</h1>
          <h1 className={styles.title_store}>Store</h1>
        </div>
        <div className={styles.header_right}>
          <img className={styles.icon_phone} src={icon}/>
          <p className={styles.number}>+7 (495) 926-01-26</p>
          <Button red={false}/>
        </div>
      </div>
      <nav className={styles.links_box}>
        <li>компания</li>
        <li>услуги</li>
        <li>работы</li>
        <li>контакты</li>
      </nav>
    </header>
  );
};

export default Header;
