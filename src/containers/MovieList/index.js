import React from 'react';
import {
  SectionList,
  Empty,
  VerticalSeparator,
  MovieSection,
} from '../../components';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {connect} from 'react-redux';
import {ViewLoader} from './styles';
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
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        dotStyle={{
          width: 30,
          height: 5,
          borderRadius: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          width: 30,
          height: 5,
          borderRadius: 5,
          backgroundColor: '#37E7CC',
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
          <Empty />
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
