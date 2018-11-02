import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  ListItem: {
    display: 'flex',
    listStyleType: 'none',
  },
});

const ListItem = props => {
  return (
    <li className={`${css(styles.ListItem)} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListItem;
