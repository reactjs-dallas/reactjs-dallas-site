// External Dependencies
import React from 'react';

// MUI Dependencies
import SvgIcon from '@material-ui/core/SvgIcon';

// Component Definition
const ReactLogoSvg = props => (
  <SvgIcon viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </SvgIcon>
);

export default ReactLogoSvg;
