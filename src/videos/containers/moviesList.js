import React from 'react';
import SectionList from '../components/SectionList';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import MovieSection from '../components/MovieSection';

class MoviesList extends React.Component {
  state = {
    activeIndex: 0,
  };

  _renderItem({item, index}) {
    return <MovieSection {...item} />;
  }

  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;

  renderSeparator = () => <VerticalSeparator />;

  get pagination() {
    const {list} = this.props;
    const {activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={list.length}
        activeDotIndex={activeIndex}
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
    return (
      <SectionList>
        <Carousel
          layout={'stack'}
          layoutCardOffset={`18`}
          data={this.props.list}
          sliderWidth={400}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
        {this.pagination}
      </SectionList>
    );
  }
}

export default MoviesList;
