import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ size, children, className, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return createElement(
    'button',
    {
      className: classNames(
        'bg-[#eff3f4] flex justify-center items-center hover:bg-[#d7dbdc] rounded-full transition-colors font-bold overflow-hidden break-words',
        {
          'min-h-9 min-w-9 text-[15px] tracking-[0.020em] px-4':
            size === 'normal',
        },
        {
          'min-h-[52px] min-w-[52px] w-full  text-[17px] leading-5 px-[32px]':
            size === 'large',
        },
        className,
      ),
      onClick: handleClick,
    },
    children,
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  size: 'normal',
  to: null,
};

export default Button;
