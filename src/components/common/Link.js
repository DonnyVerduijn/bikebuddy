import React from 'react';
import PropTypes from 'prop-types';
import style from './../../css/Link.css';

const Link = props => {
  return (
    <a className={style.Link} href="#">
      {props.value}
    </a>
  );
};

Link.propTypes = {
  value: PropTypes.string,
};

export default Link;
