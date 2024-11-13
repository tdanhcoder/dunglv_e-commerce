import Logo from '#components/Logo';
import classNames from 'classnames';
import BoxIcon from './BoxIcon';
import { brandLinks, controlIcons, mainMenu, subMenu } from './data';
import styles from './Header.module.scss';
import Menu from './Menu';

function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.wrap, 'container')}>
        <div className={styles.menuBox}>
          <div className={styles.boxIcon}>
            <BoxIcon data={brandLinks} />
          </div>
          <div className={styles.menu}>
            <Menu data={mainMenu} />
          </div>
        </div>
        <>
          <Logo />
        </>
        <div className={styles.menuBox}>
          <div className={styles.menu}>
            <Menu data={subMenu} />
          </div>
          <div className={styles.boxIcon}>
            <BoxIcon data={controlIcons} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
