import React, { Component } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export const Player = () => (
    <AudioPlayer
     autoPlay= {true}
      showSkipControls ={false}
      showDownloadProgress ={false}
      showJumpControls={false}
      src="http://streaming.jmsstudiosinc.com:8008/stream"
    
    />
  );


