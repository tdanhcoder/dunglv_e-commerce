import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

function Menu({ data = [{ name: '', href: '' }] }) {
  return (
    <>
      {data.map(({ name, href }, idx) => (
        <NavLink key={idx} to={href} className={styles.menu}>
          {name}
        </NavLink>
      ))}
    </>
  );
}

Menu.propTypes = {
  data: PropTypes.array,
};

export default Menu;
