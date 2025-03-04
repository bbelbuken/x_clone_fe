import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createElement, memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = memo(
    ({
        size = 'normal',
        children,
        className,
        to = null,
        onClick,
        onMouseEnter,
        onMouseLeave,
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
                    ' flex justify-center items-center rounded-full transition-colors font-bold overflow-hidden break-words cursor-pointer',
                    {
                        'min-h-9 min-w-9 text-[15px] tracking-[0.020em] hover:bg-[#d7dbdc] px-4':
                            size === 'normal',
                    },
                    {
                        'min-h-[52px] min-w-[52px] w-full hover:bg-[#d7dbdc] text-[17px] leading-5 px-[32px]':
                            size === 'large',
                    },
                    {
                        'min-h-[65px] min-w-[52px] w-full hover:bg-[#d7dbdc] text-[17px] leading-5 px-3':
                            size === 'account',
                    },
                    {
                        'w-[78px] h-[32px] text-[14px] hover:bg-[#d7dbdc] ':
                            size === 'follow',
                    },
                    {
                        'w-[300px] h-full text-[14px] border-0 ':
                            size === 'signup',
                    },
                    {
                        'w-[105px] h-[40px] text-[15px] border-0 ':
                            size === 'subscribe',
                    },
                    {
                        'w-[80px] h-[40px] text-[14px] border-0 ':
                            size === 'apply',
                    },
                    {
                        'w-full h-[36px] text-[14px] border-0 ':
                            size === 'forgot-password',
                    },
                    {
                        'min-h-9 px-3 text-[15px] border border-[#536471] pb-0.5 font-bold transition-colors':
                            size === 'profile-follow',
                    },
                    className,
                ),
                onClick: handleClick,
                onMouseEnter,
                onMouseLeave,
            },
            children,
        );
    },
);

Button.propTypes = {
    size: PropTypes.oneOf([
        'normal',
        'large',
        'account',
        'follow',
        'profile-follow',
    ]),
    className: PropTypes.string,
    to: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

Button.displayName = 'Button';
export default Button;
