import React from 'react';
import { Image} from 'react-native';

const Player = (props) => {
    let player = require('../assets/image/player.png')
    let dead = require('../assets/image/dead.png')
    let rotationDegree = props.isReverse ? "180deg" : "0deg";
    return (
    <Image source={props.isDead ? dead : player} style={{height : 100, width : 100,  transform: [
      { rotateZ: rotationDegree }
    ]}}/>
  );
}

export default Player;