import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import List from './common/List';
import ListItem from './common/ListItem';
import PanGestureService from '../util/PanGestureService';

const styles = StyleSheet.create({
  SideNavigationMenu: {
    position: 'absolute',
    width: '18.5em',
    left: '-18.5em',
    top: '0',
    bottom: '0',
    transition: 'left .1s linear',
    background: 'rgb(255,255,255)',
    zIndex: 1000,
  },
  open: {
    left: 0,
  },
  isPanning: {
    transition: 'none',
  },
  ListItem: {
    display: 'block',
    padding: '.75em 1em',
    fontSize: '1.1em',
    color: 'rgb(34,34,34)',
    borderBotom: '1px solid rgba(0,0,0,0.1)',
  },
  List: {
    marginTop: '.75em',
  },
});

class SideNavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.closeMenu = props.closeMenu;
    this.rootElement = document.getElementById('app');
    this.state = { isPanning: false };
  }
  componentDidMount() {
    const element = this.element.current;
    const resetPosition = () => element.style.removeProperty('left');
    const changePosition = position =>
      (element.style.left = `${Math.min(position, 0)}px`);
    const menuShouldClose = event =>
      event.x < 0;

    PanGestureService({
      element,
      horizontalMoveStarts: () => this.setState({ isPanning: true }),
      horizontalMoves: event => this.props.isOpen && changePosition(event.x),
      horizontalMoveEnds: event => {
        this.setState({ isPanning: false });
        menuShouldClose(event) && this.closeMenu();
        resetPosition();
      },
    });
  }
  render() {
    const { isOpen, toTargetWindow } = this.props;
    const className = `${css(styles.SideNavigationMenu)} ${isOpen &&
      css(styles.open)} ${this.state.isPanning && css(styles.isPanning)}`;

    return (
      <div ref={this.element} className={className}>
        <List className={css(styles.List)}>
          <ListItem
            className={css(styles.ListItem)}
            onClick={() => toTargetWindow('/')}
            text="Bikelist"
          />
          <ListItem
            className={css(styles.ListItem)}
            onClick={() => toTargetWindow('/map')}
            text="Map"
          />
          <ListItem
            className={css(styles.ListItem)}
            onClick={() => toTargetWindow('/settings')}
            text="Settings"
          />
          <ListItem
            className={css(styles.ListItem)}
            onClick={() => toTargetWindow('/about')}
            text="About"
          />
        </List>
      </div>
    );
  }
}

SideNavigationMenu.propTypes = {
  isOpen: PropTypes.bool,
  toTargetWindow: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default SideNavigationMenu;
