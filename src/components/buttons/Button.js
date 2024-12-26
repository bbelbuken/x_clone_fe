import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({
  size = 'normal',
  children,
  className,
  to = null,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  return createElement(
    'button',
    {
      className: classNames(
        ' flex justify-center items-center hover:bg-[#d7dbdc] rounded-full transition-colors font-bold overflow-hidden break-words',
        {
          'min-h-9 min-w-9 text-[15px] tracking-[0.020em] px-4':
            size === 'normal',
        },
        {
          'min-h-[52px] min-w-[52px] w-full  text-[17px] leading-5 px-[32px]':
            size === 'large',
        },
        {
          'min-h-[65px] min-w-[52px] w-full  text-[17px] leading-5 px-3':
            size === 'account',
        },
        {
          'w-[78px] h-[32px] text-[14px] ': size === 'follow',
        },
        className,
      ),
      onClick: handleClick,
    },
    children,
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large', 'account']),
  className: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
