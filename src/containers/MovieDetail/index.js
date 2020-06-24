/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated} from 'react-native';

// COMPONENTS //
import {LayoutMovie, BackButton, DetailsMovie, Button} from '../../components';

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
const {backListUpcoming: backUpcoming} = UpcomingActions;

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

  onChangeLenguege = (id) => {
    const {suggestionsReducers, suggestion} = this.props;
    if (suggestionsReducers.type === 'EN') {
      suggestion(id, 'es-ES');
    } else if (suggestionsReducers.type === 'ES') {
      suggestion(id, 'en-US');
    }
  };

  render() {
    const {suggestionsReducers, list} = this.props;
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
          <Button
            changetheme={() => this.props.changetheme()}
            changeLanguage={() => this.onChangeLenguege(list.id)}
          />
        </ContainerLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = ({
  moviesReducers,
  suggestionsReducers,
  upcomingReducers,
}) => {
  return {moviesReducers, suggestionsReducers, upcomingReducers};
};

const mapDispatchToProps = {
  backSuggest,
  backFeatured,
  backUpcoming,
  suggestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
