import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MainScreen from './MainScreen';
import * as ImageListAction from '../utils/ImageListAction';

const mapStateToProps = (state) => ({
  imageListReducer: state.imageListReducer.success,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...ImageListAction,
    },
    dispatch,
  );
}

const MainScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);

export default MainScreenContainer;
