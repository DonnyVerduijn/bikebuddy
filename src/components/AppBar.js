import React from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet, css } from 'aphrodite/no-important';

import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from './common/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
// const style = {
//   Navigation: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     background: 'rgb(0, 0, 0)',
//     width: '100%',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     zIndex: 100,
//   },
//   Icon: {
//     width: '1.25em',
//     height: '1.25em',
//     margin: '.66em 1em',
//     fill: 'rba(34,34,34)',
//   },
//   PageTitle: {
//     color: 'rgb(255,255,255)',
//     fontSize: '1.25em',
//     fontWeight: 'bold',
//   },
//   HorizontalGroup: {
//     alignItems: 'center',
//   },
// };

// const styles = StyleSheet.create(style);

const AppBar = ({
  title,
  leftIcon,
  leftIconHandler,
  rightIcon,
  rightIconHandler,
  classes,
}) => {
  return (
    <MaterialAppBar>
      <Toolbar>
        <IconButton
          onClick={leftIconHandler} 
          className={classes.menuButton}
          color="inherit"
          aria-label={leftIcon}
        >
          <Icon type={leftIcon} />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {title}
        </Typography>
        <IconButton onClick={rightIconHandler} color="inherit">
          <Icon type={rightIcon} />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  );
  //   <div className={css(styles.Navigation)}>
  //     <HorizontalGroup className={css(styles.HorizontalGroup)}>
  //       {leftIcon && (
  //         <Icon
  //           type={leftIcon}
  //           size={style.Icon.width}
  //           color={style.Icon.fill}
  //           margin={style.Icon.margin}
  //           onClick={leftIconHandler}
  //         />
  //       )}
  //       {title && <Text color="rgb(255,255,255)">{title}</Text>}
  //     </HorizontalGroup>
  //     {rightIcon && (
  //       <Icon
  //         type={rightIcon}
  //         size={style.Icon.width}
  //         color={style.Icon.fill}
  //         margin={style.Icon.margin}
  //         onClick={rightIconHandler}
  //       />
  //     )}
  //   </div>
  // );
};

AppBar.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.string,
  leftIconHandler: PropTypes.func,
  rightIcon: PropTypes.string,
  rightIconHandler: PropTypes.func,
  classes: PropTypes.object,
};

AppBar.defaultProps = {
  leftIconHandler: () => {},
  rightIconHandler: () => {},
};

export default withStyles(styles)(AppBar);
