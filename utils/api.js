const BASE_API = 'https://yts.mx/api/v2/';
class Api {
  async fetchSuggestions(id) {
    let url = 'movie_suggestions.json?movie_id=';
    const data = await fetch(`${BASE_API}${url}${id}`).then((response) =>
      response.json(),
    );
    return data;
  }

  async fetchFeatured(id) {
    let url = 'movie_suggestions.json?movie_id=';
    const data = await fetch(`${BASE_API}${url}${id}`).then((response) =>
      response.json(),
    );
    return data;
  }

  async fetchMovies() {
    let url = 'list_movies.json?limit=5';
    const data = await fetch(`${BASE_API}${url}`).then((response) =>
      response.json(),
    );
    return data;
  }
}

export default new Api();
