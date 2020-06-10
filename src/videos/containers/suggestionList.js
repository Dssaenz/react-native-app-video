import React from 'react';
import {FlatList, Text, View} from 'react-native';
import SectionList from '../components/SectionList';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import MovieCard from '../components/MovieCard';
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

  renderEmpty = () => <Empty text="No hay sugerencias" />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = ({item}) => {
    return <MovieCard {...item} />;
  };

  render() {
    const {listSuggestions} = this.props;
    return (
      <SectionList title="Recomendados para ti">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={listSuggestions}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </SectionList>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.suggestionsReducers;
};

export default connect(mapStateToProps, suggestionsActions)(SuggestionsList);
