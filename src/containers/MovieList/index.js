/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// COMPONENTS //
import {
  Loader,
  SectionList,
  MovieSection,
  VerticalSeparator,
} from '../../components';

// STYLES //
import theme from '../../themes';
import {ViewLoader} from './styles';

// REDUX //
import {connect} from 'react-redux';
import * as moviesAction from '../../redux/actions/moviesAction';
class MoviesList extends React.Component {
  state = {
    activeIndex: 0,
  };

  componentDidMount = () => {
    const {listMovies, getMovies} = this.props;
    if (!listMovies.lenght) {
      getMovies();
    }
  };

  _renderItem = ({item}) => {
    return <MovieSection {...item} />;
  };

  keyExtractor = (item) => item.id.toString();

  renderSeparator = () => <VerticalSeparator />;

  get pagination() {
    const {listMovies} = this.props;
    return (
      <Pagination
        dotsLength={listMovies.length}
        activeDotIndex={this.state.activeIndex}
        containerStyle={{backgroundColor: theme.color.rgbaDark}}
        dotStyle={{
          width: 30,
          height: 5,
          borderRadius: 5,
          backgroundColor: theme.color.rgbaTransparent,
        }}
        inactiveDotStyle={{
          width: 30,
          height: 5,
          borderRadius: 5,
          backgroundColor: theme.color.whiteBlue,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const {listMovies, loading} = this.props;
    if (loading || !listMovies.length) {
      return (
        <ViewLoader>
          <Loader />
        </ViewLoader>
      );
    }
    return (
      <SectionList>
        <Carousel
          layout={'stack'}
          layoutCardOffset={'20'}
          data={listMovies}
          sliderWidth={410}
          itemWidth={410}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
        {this.pagination}
      </SectionList>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.moviesReducers;
};

export default connect(mapStateToProps, moviesAction)(MoviesList);
