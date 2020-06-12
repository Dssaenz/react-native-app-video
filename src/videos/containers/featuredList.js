import React from 'react';
import {FlatList} from 'react-native';
import SectionListMovies from '../components/SectionListMovies';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import MovieCard from '../components/MovieCard';
import {connect} from 'react-redux';
import * as featuredActions from '../../redux/actions/featuredActions';

class FeaturedList extends React.Component {
  componentDidMount = () => {
    const {listFeatured, getFeatured} = this.props;
    if (!listFeatured.length) {
      getFeatured();
    }
  };

  keyExtractor = (item) => item.id.toString();

  renderEmpty = () => <Empty />;

  renderSeparator = () => <VerticalSeparator />;

  _renderItem = ({item}) => {
    const {viewFeatured} = this.props;
    return <MovieCard onPress={() => viewFeatured(item)} {...item} />;
  };
  render() {
    const {listFeatured} = this.props;
    return (
      <SectionListMovies title="Destacados">
        <FlatList
          horizontal
          data={listFeatured}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </SectionListMovies>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.featuredReducers;
};

export default connect(mapStateToProps, featuredActions)(FeaturedList);
