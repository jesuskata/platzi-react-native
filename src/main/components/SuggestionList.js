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


export default class SuggestionList extends React.Component {
  renderEmpty = () => <Empty text="There is no suggestions." />;

  itemSeparator = () => <VerticalSeparator />;

  renderItem = ({ item }) => <Suggestion {...item} />

  keyExtractor = item => item.id.toString();

  render() {
    const { suggestionList } = this.props;
    return (
      <SuggestionListLayout
        title="Shared for you."
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={suggestionList}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionListLayout>
    );
  }
}
