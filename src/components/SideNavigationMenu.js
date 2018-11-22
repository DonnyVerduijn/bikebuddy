import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
// import List from './common/List';
import PanGestureService from '../util/PanGestureService';
import SideNavigationMenuItem from './SideNavigationMenuItem';

const styles = StyleSheet.create({
  SideNavigationMenu: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    position: 'absolute',
    width: '18.5em',
    left: '-18.5em',
    top: '0',
    bottom: '0',
    transition: 'left .1s linear',
    background: 'rgb(255,255,255)',
    zIndex: 1000,
  },
  List: {
    marginTop: '.75em',
  },
});

class SideNavigationMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.closeMenu = props.closeMenu;
    this.element;
    this.rootElement = document.getElementById('app');
    this.state = { isPanning: false, position: 0 };
  }

  setPosition(offset) {
    this.setState({ position: `${Math.min(offset, 0)}px` });
  }

  componentDidMount() {
    PanGestureService({
      element: this.element,
      horizontalMoveStarts: (event) => {
        this.setPosition(event.x);
        this.setState({ isPanning: true });
      },
      horizontalMoves: event => {
        this.setPosition(event.x);
      },
      horizontalMoveEnds: event => {
        this.setPosition(event.x);
        this.setState({ isPanning: false });
        event.x < 0 && this.closeMenu();
      },
    });
  }
  static getDerivedStateFromProps(props, state) {
    return { ...state, isMenuOpen: props.isMenuOpen };
  }

  render() {
    const { toTargetWindow } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div
        ref={ref => (this.element = ref)}
        className={css(styles.SideNavigationMenu)}
        style={{
          ...(isMenuOpen && !this.state.isPanning && { left: 0 }),
          ...(this.state.isPanning && {
            transition: 'none',
            left: this.state.position,
          }),
        }}
      >
        <ul className={css(styles.List)}>
          <SideNavigationMenuItem
            icon="bike"
            text="Bikes"
            onClick={() => this.closeMenu()}
          />
          <SideNavigationMenuItem
            icon="storage"
            text="Storages"
            onClick={toTargetWindow('/map')}
          />
          <SideNavigationMenuItem
            icon="settings"
            text="Settings"
            onClick={toTargetWindow('/settings')}
          />
          <SideNavigationMenuItem
            icon="about"
            text="About"
            onClick={toTargetWindow('/about')}
          />
        </ul>
      </div>
    );
  }
}

SideNavigationMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  toTargetWindow: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default SideNavigationMenu;
