import classNames from 'classnames';
import { createElement } from 'react';
import PropTypes from 'prop-types';

const ThreeDotSVG = ({ place = 'rightbar', children, className }) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      width: '18.75px',
      height: '18.75px',
      className: classNames('flex h-full w-full items-center justify-center'),
    },
    createElement('path', {
      d: 'M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 2 2z',
    }),
    children,
  );
};
ThreeDotSVG.propTypes = {
  className: PropTypes.string,
  place: PropTypes.string,
};
export default ThreeDotSVG;
