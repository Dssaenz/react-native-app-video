import React from 'react';
import {FlatList} from 'react-native';
import SectionList from '../components/SectionList';
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

  renderEmpty = () => <Empty text="No hay sugerencias" />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = ({item}) => {
    return <MovieCard {...item} />;
  };
  render() {
    const {listFeatured} = this.props;
    return (
      <SectionList title="Destacados">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={listFeatured}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </SectionList>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.featuredReducers;
};

export default connect(mapStateToProps, featuredActions)(FeaturedList);
