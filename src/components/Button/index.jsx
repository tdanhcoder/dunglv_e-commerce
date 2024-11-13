import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

function Button({ square = false, ...props }) {
  const { btn } = styles;

  return (
    <button {...props} className={classNames(btn, { [styles.square]: square })}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  square: PropTypes.bool,
};

export default Button;
