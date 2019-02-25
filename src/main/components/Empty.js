// Dependencies
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function Empty(props) {
  const { text } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 16
  }
});
