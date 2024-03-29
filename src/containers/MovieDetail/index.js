/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated} from 'react-native';

// COMPONENTS //
import {
  LayoutMovie,
  BackButton,
  DetailsMovie,
  ButtonOptions,
} from '../../components';

// STYLES //
import {ViewBack, ContainerLayout} from './styles';

// REDUX //
import {connect} from 'react-redux';
import * as suggestionsActions from '../../redux/actions/suggestionsActions';
import * as featuredActions from '../../redux/actions/featuredActions';
import * as UpcomingActions from '../../redux/actions/UpcomingActions';

const {backListSugguest: backSuggest} = suggestionsActions;
const {viewSuggestion: suggestion} = suggestionsActions;
const {backListFeatured: backFeatured} = featuredActions;
const {viewFeatured: featured} = featuredActions;
const {backListUpcoming: backUpcoming} = UpcomingActions;
const {viewUpcoming: upcoming} = UpcomingActions;

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

  backList = () => {
    const {backSuggest, backFeatured, backUpcoming} = this.props;
    backSuggest();
    backFeatured();
    backUpcoming();
  };

  handleSuggestionsLenguage = (id) => {
    const {suggestionsReducers, suggestion} = this.props;
    if (suggestionsReducers.type === 'EN') {
      suggestion(id, 'es-ES');
    } else if (suggestionsReducers.type === 'ES') {
      suggestion(id, 'en-US');
    }
  };

  handleFeaturedLenguage = (id) => {
    const {featuredReducers, featured} = this.props;
    if (featuredReducers.type === 'EN') {
      featured(id, 'es-ES');
    } else if (featuredReducers.type === 'ES') {
      featured(id, 'en-US');
    }
  };

  handleUpcomingLenguage = (id) => {
    const {upcomingReducers, upcoming} = this.props;
    if (upcomingReducers.type === 'EN') {
      upcoming(id, 'es-ES');
    } else if (upcomingReducers.type === 'ES') {
      upcoming(id, 'en-US');
    }
  };

  onChangeLenguege = (id) => {
    this.handleSuggestionsLenguage(id);
    this.handleFeaturedLenguage(id);
    this.handleUpcomingLenguage(id);
  };

  render() {
    const {list} = this.props;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <ContainerLayout>
          <LayoutMovie>
            <ViewBack>
              <BackButton onPress={() => this.backList()} />
            </ViewBack>
            <DetailsMovie key={this.props.id} {...this.props.list} />
          </LayoutMovie>
          <ButtonOptions
            changetheme={() => this.props.changetheme()}
            changeLanguage={() => this.onChangeLenguege(list.id)}
          />
        </ContainerLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = ({
  featuredReducers,
  upcomingReducers,
  suggestionsReducers,
}) => {
  return {featuredReducers, suggestionsReducers, upcomingReducers};
};

const mapDispatchToProps = {
  backSuggest,
  backFeatured,
  backUpcoming,
  suggestion,
  featured,
  upcoming,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
