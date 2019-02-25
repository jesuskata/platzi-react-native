import React from 'react';
import {
  View,
  Text,
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
    >
      <Text>This is a separator.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
});
