const BASE_API = 'https://yts.am/api/v2/';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["getSuggestions"] }] */
class Api {
  async getSuggestions(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();
    return data.movies;
  }
}

export default new Api();
