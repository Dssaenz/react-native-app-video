import React from 'react';
import {Wrapper, WrapperVideo, WrapperLoader} from './styles';

function LayoutVideo(props) {
  return (
    <Wrapper>
      <WrapperVideo>{props.video}</WrapperVideo>
      <WrapperLoader>{props.loading && props.loader}</WrapperLoader>
    </Wrapper>
  );
}

export default LayoutVideo;
