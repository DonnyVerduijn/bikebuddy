import { connect } from 'react-redux';
// import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
// import { setMenuVisibility } from './../../actions/GlobalActions';


export default withRouter(
  connect(
    null,
    null,
  )(NavigationBar),
);
