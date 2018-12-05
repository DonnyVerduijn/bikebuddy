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
        {rightIcon && (
          <IconButton onClick={rightIconHandler} color="inherit">
            <Icon type={rightIcon} />
          </IconButton>
        )}
      </Toolbar>
    </MaterialAppBar>
  );
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
