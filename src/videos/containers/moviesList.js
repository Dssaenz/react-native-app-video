import React from 'react';
import SectionList from '../components/SectionList';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import MovieSection from '../components/MovieSection';

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

  _renderItem({item, index}) {
    return <MovieSection {...item} />;
  }

  keyExtractor = (item) => item.id.toString();

  renderEmpty = () => <Empty text="No hay sugerencias" />;

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
          backgroundColor: '#6fffe9',
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const {listMovies} = this.props;
    return (
      <SectionList>
        <Carousel
          layout={'stack'}
          layoutCardOffset={'20'}
          data={listMovies}
          sliderWidth={350}
          itemWidth={320}
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
