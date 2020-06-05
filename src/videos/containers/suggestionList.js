import React from 'react';
import {FlatList, Text} from 'react-native';
import SectionList from '../components/SectionList';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import Suggestions from '../components/Seggestions';

class SuggestionsList extends React.Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;

  renderSeparator = () => <VerticalSeparator />;

  renderItem = (item) => <Suggestions />;
  render() {
    const list = [
      {
        title: 'Darwin',
        key: '1',
      },
      {
        title: 'Saenz',
        key: '2',
      },
    ];
    return (
      <SectionList title="recomendados para ti">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) => this.renderItem(item)}
        />
      </SectionList>
    );
  }
}

export default SuggestionsList;
