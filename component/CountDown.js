import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';

const CountDown = (props) => {
    let message = ['set', 'bang!'];
    let [display, setDisplay] = useState('ready');
    useEffect(() => {
        let int;
        let i = 0;
        int = setInterval(() => {
            setDisplay(message[i]);
            console.log(i, message[i]);
            if(i==1) {
                clearInterval(int);
                props.gameOn();
                // props.isVisible(false);
            }
            i++;
          }, 1000);
        }
    ,[])
    return (
      <Text  style={{fontFamily : 'joystix', fontSize : 30}}>
        {display}
      </Text>
  );
}

export default CountDown;