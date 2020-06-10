import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Header from './src/sections/components/header';
import SuggestionsList from './src/videos/containers/suggestionList';
import MoviesList from './src/videos/containers/moviesList';
import FeaturedList from './src/videos/containers/featuredList';
import Player from './src/player/containers/player';

// Redux //
import store from './store';
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <ScrollView>
            <View style={{backgroundColor: '#0b132b'}}>
              <Player />
              <MoviesList />
              <SuggestionsList />
              <FeaturedList />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
