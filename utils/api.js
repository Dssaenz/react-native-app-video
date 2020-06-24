const BASE_API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=6d8cac20bc40cf9e644422c0f30fd8c2';

class Api {
  // Suggestion fetch //
  async fetchSuggestions(lenguage) {
    let url = 'top_rated?';
    let page = 'page=1';
    const data = await fetch(
      `${BASE_API}${url}${API_KEY}&language=${lenguage}&${page}`,
    ).then((response) => response.json());
    return data;
  }

  async getDetailSuggestions(id, lenguage = 'en-US') {
    const data = await fetch(
      `${BASE_API}${id}?${API_KEY}&language=${lenguage}`,
    ).then((response) => response.json());
    return data;
  }

  async getIdVideo(id) {
    let video = 'videos';
    let lenguage = 'language=en-US';
    let page = 'page=1';
    const data = await fetch(
      `${BASE_API}${id}/${video}?${API_KEY}&${lenguage}&${page}`,
    ).then((response) => response.json());
    return data;
  }

  // Featured Fetch //
  async fetchFeatured(lenguage) {
    let url = 'popular?';
    let page = 'page=1';
    const data = await fetch(
      `${BASE_API}${url}${API_KEY}&language=${lenguage}&${page}`,
    ).then((response) => response.json());
    return data;
  }

  async getDetailFeatured(id, lenguage = 'en-US') {
    const data = await fetch(
      `${BASE_API}${id}?${API_KEY}&language=${lenguage}`,
    ).then((response) => response.json());
    return data;
  }

  // Upcoming Fetch //
  async fetchUpcoming() {
    let url = 'upcoming?';
    let lenguage = 'language=en-US';
    let page = 'page=1';
    const data = await fetch(
      `${BASE_API}${url}${API_KEY}&${lenguage}&${page}`,
    ).then((response) => response.json());
    return data;
  }

  async getDetailUpcoming(id) {
    let lenguage = 'language=en-US';
    let page = 'page=1';
    const data = await fetch(
      `${BASE_API}${id}?${API_KEY}&${lenguage}&${page}`,
    ).then((response) => response.json());
    return data;
  }
}

export default new Api();
