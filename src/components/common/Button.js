// import React from 'react';
// import PropTypes from 'prop-types';
// import { StyleSheet, css } from 'aphrodite/no-important';

// const defaultStyles = {
//   Button: {
//     display: 'flex',
//     alignItems: 'center',
//     borderRadius: '.25em',
//     border: 'none',
//     margin: '0.25em',
//     padding: '0.5em',
//     fontSize: '1.5em',
//     color: 'rgb(220,220,220)',
//     fontWeight: 'bold',
//     textTransform: 'lowercase',
//     fontVariant: 'small-caps',
//     textDecoration: 'none',
//     outline: 'none',
//     backgroundImage:
//       'linear-gradient(-180deg, rgb(35, 41, 37), rgb(45, 51, 47) 90%)',
//   },
//   Icon: {
//     lineHeight: '2em',
//     marginLeft: '.5em',
//   },
//   flat: {
//     background: 'rgba(255,255,255,0.25)',
//     color: 'rgb(36,41,46)',
//     border: '1px solid rgb(36,41,46)',
//   },
//   raised: {
//     backgroundImage:
//       'linear-gradient(-180deg, rgb(59, 214, 67), rgb(43, 154, 47) 90%)',
//     color: 'rgb(255,255,255)',
//   },
//   dangerous: {
//     backgroundImage: 'linear-gradient(-180deg,rgb(225,25,0),rgb(220,20,0) 90%)',
//     color: 'rgb(255,255,255)',
//   },
// };

// const styles = StyleSheet.create(defaultStyles);

// const className = ({ isFlat, isRaised, isDangerous }) => {
//   return css(
//     styles.Button,
//     isFlat && styles.flat,
//     isRaised && styles.raised,
//     isDangerous && styles.dangerous,
//   );
// };

// const getColor = ({ isFlat, isRaised, isDangerous }) => {
//   const { Button, flat, raised, dangerous } = defaultStyles;
//   return isFlat
//     ? flat.color
//     : isRaised
//     ? raised.color
//     : isDangerous
//     ? dangerous.color
//     : Button.color;
// };

// const Button = props => {
//   return (
//     <button className={className(props)} onClick={props.onClick}>
//       {props.text({ color: getColor(props) })}
//       {props.icon({ color: getColor(props) })}
//       {props.children}
//     </button>
//   );
// };

// Button.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.func,
//   icon: PropTypes.func,
//   children: PropTypes.any,
// };

// Button.defaultProps = {
//   text: () => {},
//   icon: () => {},
// };

// export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { Button as MaterialButton, IconButton } from '@material-ui/core/';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  Button: {
    // eslint-disable-next-line
    margin: theme.spacing.unit,
  },
};

class Button extends PureComponent {
  render() {
    const { children, classes, icon } = this.props;
    return icon ? (
      <IconButton className={classes.Button} {...this.props}>
        {children}
        {icon}
      </IconButton>
    ) : (
      <MaterialButton className={classes.Button} {...this.props}>
        {children}
      </MaterialButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
  icon: PropTypes.any,
};

export default withStyles(styles)(Button);
