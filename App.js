// Dependencies
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

// Components
import Home from './src/main/components/Home';
import Header from './src/main/components/Header';
import SuggestionList from './src/main/components/SuggestionList';
import CategoryList from './src/main/components/CategoryList';

// Utils
import Api from './utils/api';

/* eslint-disable */
type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await Api.getSuggestions(10);
    const categories = await Api.getMovies();
    console.log('movies: ', movies);
    console.log('categories: ', categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Suggestion</Text>
        <CategoryList
          categoryList={this.state.categoryList}
        />
        <SuggestionList
          suggestionList={this.state.suggestionList}
        />
      </Home>
    );
  }
}
/* eslint-disable */
