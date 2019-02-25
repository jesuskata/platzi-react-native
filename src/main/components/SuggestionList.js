// Dependencies
import React from 'react';
import {
  Text,
  FlatList
} from 'react-native';

// Components
import SuggestionListLayout from './SuggestionListLayout';
import Empty from './Empty';
import VerticalSeparator from './VerticalSeparator';

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

  render() {
    return (
      <SuggestionListLayout
        title="Shared for you"
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </SuggestionListLayout>
    );
  }
}
