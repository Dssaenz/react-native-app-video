/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated} from 'react-native';

// COMPONENTS //
import {LayoutMovie, BackButton, DetailsMovie} from '../../components';

// STYLES //
import {ViewBack} from './styles';

// REDUX //
import {connect} from 'react-redux';
import * as suggestionsActions from '../../redux/actions/suggestionsActions';
import * as featuredActions from '../../redux/actions/featuredActions';

const {backListSugguest: backSuggest} = suggestionsActions;
const {backListFeatured: backFeatured} = featuredActions;

class MovieDetail extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  render() {
    const {backSuggest, backFeatured} = this.props;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <LayoutMovie>
          <ViewBack>
            {this.props.isActive ? (
              <BackButton onPress={() => backSuggest()} />
            ) : (
              <BackButton onPress={() => backFeatured()} />
            )}
          </ViewBack>
          <DetailsMovie {...this.props.list} />
        </LayoutMovie>
      </Animated.View>
    );
  }
}

const mapStateToProps = ({moviesReducers, suggestionsReducers}) => {
  return {moviesReducers, suggestionsReducers};
};

const mapDispatchToProps = {
  backSuggest,
  backFeatured,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
