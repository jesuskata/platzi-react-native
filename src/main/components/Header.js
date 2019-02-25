// Dependencies
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

function Header(props) {
  const { children } = props;
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')} // eslint-disable-line
            style={styles.logo}
          />
          <View style={styles.right}>
            {children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    resizeMode: 'contain' // Esto nos sirve para que el logo pase de cover a contain
  },
  container: {
    backgroundColor: '#dfe6e9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  }
});

export default Header;
