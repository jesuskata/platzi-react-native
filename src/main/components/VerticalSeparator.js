import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default function VerticalSeparator(props) {
  const { color } = props;
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: !color
            ? '#eaeaea'
            : color
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
});
