import React from 'react';
import {FlatList} from 'react-native';

// COMPONENTS //
import {
  Loader,
  MovieCard,
  VerticalSeparator,
  SectionListMovies,
} from '../../components';

// REDUX //
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

  renderEmpty = () => <Loader />;

  renderSeparator = () => <VerticalSeparator />;

  _renderItem = ({item}) => {
    const {viewFeatured, type} = this.props;
    return (
      <MovieCard
        onPress={() => {
          if (type === 'EN') {
            viewFeatured(item.id, 'en-US');
          } else if (type === 'ES') {
            viewFeatured(item.id, 'es-ES');
          }
        }}
        {...item}
      />
    );
  };
  render() {
    const {listFeatured, type} = this.props;
    return (
      <SectionListMovies title={type === 'EN' ? 'Featured' : 'Destacadas'}>
        <FlatList
          horizontal
          data={listFeatured}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
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
