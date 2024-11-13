import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

function Icon({ name, imgSrc }) {
  return (
    <div className={styles.icon}>
      <img src={imgSrc} alt={name} />
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Icon;
