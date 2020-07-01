import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, SubIcon} from './styles';

const moon = require('../../../resources/day.png');
const plus = require('../../../resources/plus.png');
const language = require('../../../resources/english.png');

class ButtonOptions extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: false,
    }).start();
    this.open = !this.open;
  };

  render() {
    const pinStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -20],
          }),
        },
      ],
    };

    const punStyle = {
      transform: [
        {
          scale: this.animation,
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -40],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.changeLanguage}>
          <Animated.View
            style={[styles.button, styles.secondary, punStyle, opacity]}>
            <SubIcon source={language} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.props.changetheme}>
          <Animated.View
            style={[styles.button, styles.secondary, pinStyle, opacity]}>
            <SubIcon source={moon} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Icon source={plus} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    right: 10,
  },
  button: {
    zIndex: 100,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#00cfac',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: '#00cfac',
  },
  secondary: {
    width: 50,
    height: 50,
    borderRadius: 48 / 2,
    backgroundColor: '#FFF',
  },
});

export default ButtonOptions;
