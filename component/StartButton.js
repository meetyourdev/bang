import React from 'react';
import { Text } from 'react-native';

const StartButton = (props) => {
    return (
      <Text onPress={()=> {
        props.isVisible(false);
        props.showCountDown(true);
      }}  style={{fontFamily : 'joystix', fontSize : 50}}>
        START
      </Text>
  );
}

export default StartButton;