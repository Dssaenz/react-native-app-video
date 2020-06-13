// import React from 'react';
// import {View, Text, ActivityIndicator} from 'react-native';
// import Video from 'react-native-video';
// import {LayoutVideo} from '../../components';

// const example = require('../../TENET.mp4');

// class Player extends React.Component {
//   state = {
//     loading: false,
//   };

//   onBuffer = ({isBuffering}) => {
//     this.setState({loading: isBuffering});
//   };

//   onLoad = () => {
//     this.setState({loading: false});
//   };

//   render() {
//     return (
//       <LayoutVideo
//         loading={this.state.loading}
//         video={
//           <Video
//             source={example}
//             shouldPlay
//             controls
//             useNativeControls
//             onBuffer={this.onBuffer}
//             onLoad={this.onLoad}
//             style={{
//               position: 'absolute',
//               left: 0,
//               right: 0,
//               bottom: 0,
//               top: 0,
//             }}
//             resizeMode="contain"
//           />
//         }
//         loader={<ActivityIndicator color="#6fffe9" size="large" />}
//       />
//     );
//   }
// }

// export default Player;
