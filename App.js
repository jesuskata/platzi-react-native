// Dependencies
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

// Components
import Home from './src/main/components/Home';
import Header from './src/main/components/Header';
import SuggestionList from './src/main/components/SuggestionList';
/* eslint-disable */
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Suggestion</Text>
        <SuggestionList />
      </Home>
    );
  }
}
/* eslint-disable */
