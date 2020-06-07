import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/containers/suggestionList';
import MoviesList from './src/videos/containers/moviesList';
import FeaturedList from './src/videos/containers/featuredList';
import API from './utils/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listMovies: [],
      listSuggestions: [],
      listFeatured: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({loading: true});
    try {
      const categories = await API.getMovies();
      const movies = await API.getSuggestions(20);
      const featured = await API.getFeatured(1);
      this.setState({
        listMovies: categories.data.movies,
        listSuggestions: movies.data.movies,
        listFeatured: featured.data.movies,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({loading: false, error: error});
    }
  }
  render() {
    const {
      listSuggestions,
      listMovies,
      listFeatured,
      error,
      loading,
    } = this.state;
    if (
      loading ||
      !listSuggestions.length ||
      !listMovies.length ||
      !listFeatured.length
    ) {
      return <Text>Cargando ...</Text>;
    }
    if (error) {
      console.log('Error');
    }
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor: '#0b132b'}}>
            <MoviesList list={listMovies} />
            <SuggestionsList list={listSuggestions} />
            <FeaturedList list={listFeatured} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
