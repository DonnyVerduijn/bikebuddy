import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  List: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
});

const List = props => {
  const className = `${props.className ? props.className : ''} ${css(
    styles.List,
  )} `;
  return <ul className={className}>{props.children}</ul>;
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
};

export default List;
