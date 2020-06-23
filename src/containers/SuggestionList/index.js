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
import * as suggestionsActions from '../../redux/actions/suggestionsActions';

class SuggestionsList extends React.Component {
  componentDidMount = () => {
    const {getSuggestions, listSuggestions} = this.props;
    if (!listSuggestions.length) {
      getSuggestions();
    }
  };

  keyExtractor = (item) => item.id.toString();

  renderEmpty = () => <Loader />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = ({item}) => {
    const {viewSuggestion, viewSuggestionVideo, type} = this.props;
    return (
      <MovieCard
        onPress={() => {
          if (type === 'EN') {
            viewSuggestion(item.id, 'en-US');
          } else if (type === 'ES') {
            viewSuggestion(item.id, 'es-ES');
          }
        }}
        {...item}
      />
    );
  };

  render() {
    const {listSuggestions} = this.props;
    return (
      <SectionListMovies title="Recommended for you">
        <FlatList
          horizontal
          data={listSuggestions}
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
  return reducers.suggestionsReducers;
};

export default connect(mapStateToProps, suggestionsActions)(SuggestionsList);
