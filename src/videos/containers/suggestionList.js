import React from 'react';
import {FlatList} from 'react-native';
import SectionList from '../components/SectionList';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import MovieCard from '../components/MovieCard';

class SuggestionsList extends React.Component {
  keyExtractor = (item) => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = ({item}) => {
    return <MovieCard {...item} />;
  };
  render() {
    return (
      <SectionList title="Recomendados para ti">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
        />
      </SectionList>
    );
  }
}

export default SuggestionsList;
