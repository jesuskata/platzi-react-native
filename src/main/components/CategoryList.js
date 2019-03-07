// Dependencies
import React from 'react';
import {
  FlatList
} from 'react-native';

// Shared
import {
  renderEmpty, horizontalSeparator, renderCategoryItem, keyExtractor
} from '../../share/uiFunctions';

// Components
import CategoryListLayout from './CategoryListLayout';

export default class CategoryList extends React.Component {
  render() {
    const { categoryList } = this.props;
    return (
      <CategoryListLayout
        title="Categories"
      >
        <FlatList
          horizontal
          keyExtractor={keyExtractor}
          data={categoryList}
          ListEmptyComponent={renderEmpty}
          ItemSeparatorComponent={horizontalSeparator}
          renderItem={renderCategoryItem}
        />
      </CategoryListLayout>
    )
  }
}
