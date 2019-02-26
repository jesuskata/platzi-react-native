// Dependencies
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

// Components
import Home from './src/main/components/Home';
import Header from './src/main/components/Header';
import SuggestionList from './src/main/components/SuggestionList';

// Utils
import Api from './utils/api';

/* eslint-disable */
type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const movies = await Api.getSuggestions(10);
    console.log('movies: ', movies);
  }

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
