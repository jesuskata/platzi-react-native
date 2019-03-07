// Dependencies
import React from 'react';
import {
  FlatList
} from 'react-native';

// Shared
import {
  renderEmpty, verticalSeparator, renderSuggestionItem, keyExtractor
} from '../../share/uiFunctions';

// Components
import SuggestionListLayout from './SuggestionListLayout';

export default class SuggestionList extends React.Component {
  render() {
    const { suggestionList } = this.props;
    return (
      <SuggestionListLayout
        title="Shared for you."
      >
        <FlatList
          keyExtractor={keyExtractor}
          data={suggestionList}
          ListEmptyComponent={renderEmpty}
          ItemSeparatorComponent={verticalSeparator}
          renderItem={renderSuggestionItem}
        />
      </SuggestionListLayout>
    );
  }
}
