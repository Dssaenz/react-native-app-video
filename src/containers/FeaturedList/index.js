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
    const {viewFeatured} = this.props;
    return <MovieCard onPress={() => viewFeatured(item)} {...item} />;
  };
  render() {
    const {listFeatured} = this.props;
    return (
      <SectionListMovies title="Featured">
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
