// Dependencies
import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native';

export default function Category(props) {
  const {
    genres,
    medium_cover_image: coverImage, // medium_cover_image was changed to a camelCased variable
  } = props;
  return (
    <ImageBackground
      style={styles.wrapper}
      source={{ uri: coverImage }}
    >
      <Text
        style={styles.genre}
      >
        {genres[0]}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0,
  }
});
