/* eslint-disable no-shadow */
import React from 'react';
import LayoutMovie from '../../components/LayoutMovie';
import Player from '../../../player/containers/player';
import BackButton from '../../../sections/components/BackButton';
import DetailsMovie from '../../../videos/components/DetailsMovie';
import {connect} from 'react-redux';
import * as suggestionsActions from '../../../redux/actions/suggestionsActions';
import * as featuredActions from '../../../redux/actions/featuredActions';
import {ViewBack} from './styles';
const {backListSugguest: backSuggest} = suggestionsActions;
const {backListFeatured: backFeatured} = featuredActions;

class MovieDetail extends React.Component {
  render() {
    const {backSuggest, backFeatured} = this.props;
    return (
      <LayoutMovie>
        <ViewBack>
          {this.props.isActive ? (
            <BackButton onPress={() => backSuggest()} />
          ) : (
            <BackButton onPress={() => backFeatured()} />
          )}
        </ViewBack>
        <DetailsMovie {...this.props.list} />
        <Player />
      </LayoutMovie>
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
