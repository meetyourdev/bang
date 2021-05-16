import React from 'react';
import { Text } from 'react-native';

const NextRound = (props) => {
    return (
      <Text onPress={()=> {
        props.isVisible(false);
        props.onPress();
      }} style={{fontFamily : 'joystix', fontSize : 50}}>
        Next Round
      </Text>
  );
}

export default NextRound;