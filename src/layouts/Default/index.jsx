import Header from '#components/Header';
import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames';

function DefaultLayout({ children }) {
  return (
    <div className={classNames(styles.wrap)}>
      <Header />
      <main className={styles.main}>{children}</main>

      <footer>Footer</footer>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

export default DefaultLayout;
