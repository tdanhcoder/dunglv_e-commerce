import classNames from 'classnames';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className={classNames(styles.wrap, styles.logo)}>
      <h1 className={styles.logoMainBrand}>Marseille</h1>
      <p className={styles.logoSubBrand}>XStore Theme</p>
    </Link>
  );
}

Logo.propTypes = {};

export default Logo;
