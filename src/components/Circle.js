import { Component } from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount() {
    console.log('mount');
    const {
      map,
      position,
      radius,
      strokeColor,
      fillColor,
      onClick,
    } = this.props;

    this.circle = map.addCircle({
      center: position,
      radius,
      strokeColor,
      fillColor,
      clickable: onClick !== undefined,
    });

    if (onClick) {
      // eslint-disable-next-line
      this.circle.on(plugin.google.maps.event.CIRCLE_CLICK, onClick);
    }
  }
  componentWillUnmount() {
    this.props.removeElement(this.props.index);
  }
  render() {
    return null;
  }
}

Circle.propTypes = {
  map: PropTypes.object,
  index: PropTypes.number,
  removeElement: PropTypes.func,
  position: PropTypes.object,
  radius: PropTypes.number,
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  onClick: PropTypes.func,
};

Circle.defaultProps = {
  position: { lat: 0, lng: 0 },
  radius: 5,
  strokeColor: '#3344cc',
  fillColor: '#3344cc',
};

export default Circle;
