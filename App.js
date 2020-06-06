import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/containers/suggestionList';
import CategoriesList from './src/videos/containers/categoriesList';
import API from './utils/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listSuggestions: [],
      listCategories: [],
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
      const movies = await API.getSuggestions(20);
      const categories = await API.getCategories();
      this.setState({
        listSuggestions: movies.data.movies,
        listCategories: categories.data.movies,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({loading: false, error: error});
    }
  }
  render() {
    const {listSuggestions, listCategories, error, loading} = this.state;
    if (loading || !listSuggestions.length || !listCategories.length) {
      return <Text>Cargando ...</Text>;
    }
    if (error) {
      console.log('Error');
    }
    return (
      <SafeAreaView>
        <Header />
        <CategoriesList list={listCategories} />
        <SuggestionsList list={listSuggestions} />
      </SafeAreaView>
    );
  }
}

export default App;
