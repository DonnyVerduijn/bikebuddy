import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import NavigationBar from './../common/NavigationBar';
import Text from './../common/Text';
import Icon from './../common/Icon';
import NativeGoogleMap from './../../util/NativeGoogleMap';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
  Window: {
    background: 'none',
  },
});

class BikeMapWindow extends React.Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
  }

  componentDidMount() {
    console.log(this.mapElement.current.getBoundingClientRect());
    this.googleMap = NativeGoogleMap(this.mapElement.current);
    this.googleMap.onMapReady((map) => {
      console.log(map);
    });
  }

  componentWillUnmount(){
    this.googleMap.map.remove();
  }

  shouldComponentUpdate() { return false; }

  render() {
    const { goBack, showSettings } = this.props; 
    return (
      <Window className={css(styles.Window)}>
        <NavigationBar
          text={props => <Text {...props}>Recent</Text>}
          leftIcon={props => <Icon {...props} type="back" onClick={goBack} />}
          rightIcon={props => (
            <Icon {...props} type="settings" onClick={showSettings} />
          )}
        />
        <div style={{ }} className={css(styles.Map)} ref={this.mapElement}/>
        {/* <span>{this.props.match.params.userId}</span> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
      </Window>
    );
  }
}

BikeMapWindow.propTypes = {
  match: PropTypes.object,
};

export default BikeMapWindow;
