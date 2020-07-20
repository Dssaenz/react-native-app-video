import React from 'react';
import {AppLayout} from '../containers';
// Naviggation //
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

// Themes //
import theme from '../themes';
import {ThemeProvider} from 'styled-components/native';

const MainStack = createStackNavigator();
// const MyTransition = {
//   gestureDirection: 'horizontal',
//   transitionSpec: {
//     open: TransitionSpecs.TransitionIOSSpec,
//     close: TransitionSpecs.TransitionIOSSpec,
//   },
//   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
//   cardStyleInterpolator: ({current, next, layouts}) => {
//     return {
//       cardStyle: {
//         transform: [
//           {
//             translateX: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [layouts.screen.width, 0],
//             }),
//           },
//           {
//             rotate: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [1, 0],
//             }),
//           },
//           {
//             scale: next
//               ? next.progress.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 0.9],
//                 })
//               : 1,
//           },
//         ],
//       },
//       overlayStyle: {
//         opacity: current.progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 0.5],
//         }),
//       },
//     };
//   },
// };

function MainStackNavigator() {
  return (
    <ThemeProvider theme={theme}>
      <MainStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={'AppLayout'} component={AppLayout} />
      </MainStack.Navigator>
    </ThemeProvider>
  );
}

export default MainStackNavigator;
