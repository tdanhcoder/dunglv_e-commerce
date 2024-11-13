import Icon from '#components/Icon';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BoxIcon({ data = [{ name: '', href: '', src: '' }] }) {
  return (
    <>
      {data.map(({ name, href, src }, idx) => (
        <Link key={idx} to={href}>
          <Icon name={name} imgSrc={src} />
        </Link>
      ))}
    </>
  );
}

BoxIcon.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

export default BoxIcon;
