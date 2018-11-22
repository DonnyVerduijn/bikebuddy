import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  Text: {
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    paddingRight: '.5em',
    borderRight: '2px solid rgb(35,41,32)',
    fontSize: '1.5em',
    lineHeight: '1em',
  },
  subtitle: {
    paddingLeft: '.5em',
    fontSize: '1.25em',
    lineHeight: '1em',
  },
  caption: {
    fontSize: '0.75em',
    fontVariant: 'small-caps',
  }
});

const Text = props => {
  return (
    <span
      className={css(
        styles.Text,
        props.type === 'title' && styles.title,
        props.type === 'subtitle' && styles.subtitle,
        props.type === 'caption' && styles.caption,
      )}
    >
      {props.children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

export default Text;
