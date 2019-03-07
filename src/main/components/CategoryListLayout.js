// Dependencies
import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default function CategoryListLayout(props) {
  const { title, children } = props;
  return (
    <ImageBackground
      source={require('../../../assets/background.png')} // eslint-disable-line
      style={styles.container}
    >
      <Text style={styles.title}>{ title }</Text>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
