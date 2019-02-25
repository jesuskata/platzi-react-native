// Dependencies
import React from 'react';
import {
  FlatList
} from 'react-native';

// Components
import SuggestionListLayout from './SuggestionListLayout';
import Empty from './Empty';
import VerticalSeparator from './VerticalSeparator';
import Suggestion from './Suggestion';

const list = [
  {
    title: 'Avengers',
    key: '1'
  },
  {
    title: 'Toy Story',
    key: '2'
  }
];


export default class SuggestionList extends React.Component {
  renderEmpty = () => <Empty text="There is no suggestions." />;

  itemSeparator = () => <VerticalSeparator />;

  renderItem = ({ item }) => <Suggestion {...item} />

  render() {
    return (
      <SuggestionListLayout
        title="Shared for you."
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}
