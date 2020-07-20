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
import * as UpcomingActions from '../../redux/actions/UpcomingActions';

class UpcomingList extends React.Component {
  componentDidMount = () => {
    const {getUpcoming, listUpcoming} = this.props;
    if (!listUpcoming.length) {
      getUpcoming();
    }
  };

  keyExtractor = (item) => item.id.toString();

  renderEmpty = () => <Loader />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = ({item}) => {
    const {viewUpcoming, type} = this.props;
    return (
      <MovieCard
        onPress={() => {
          if (type === 'EN') {
            viewUpcoming(item.id, 'en-US');
          } else if (type === 'ES') {
            viewUpcoming(item.id, 'es-ES');
          }
        }}
        {...item}
      />
    );
  };

  render() {
    const {listUpcoming, type} = this.props;
    return (
      <SectionListMovies title={type === 'EN' ? 'Coming soon' : 'Próximamente'}>
        <FlatList
          horizontal
          data={listUpcoming}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          showsHorizontalScrollIndicator={false}
        />
      </SectionListMovies>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.upcomingReducers;
};

export default connect(mapStateToProps, UpcomingActions)(UpcomingList);
