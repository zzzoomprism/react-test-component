import React from 'react';
import { ICONS } from '../assets/SVG';
import PropTypes from 'prop-types';

const Icon = ({ name, size, style = {}, color, className }) => {
  console.log(ICONS);
  const icon = ICONS[name];
  if (!icon) throw new Error('No icon named: ' + name);
  return (
    <svg
      style={{ ...style }}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 74 74"
      fill={color}
    >
      {icon.path}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
