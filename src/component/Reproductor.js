import React, { Component } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export const Player = () => (
    <AudioPlayer
    style={{color:'black'}}
      autoPlay
      preload 
      showSkipControls ={false}
      showDownloadProgress ={false}
      src="http://streaming.jmsstudiosinc.com:8008/stream"
    
    />
  );


