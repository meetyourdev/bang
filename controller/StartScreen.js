import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

const StartScreen = ({navigation}) => {

    let [rounds, setRounds] = useState(3);

    let changeRounds = (num) => {
        if(rounds+num>0) {
            setRounds(rounds+num);
        }
    }

    return(
        <View style={{flex:  1}}>
            <View  style={{flex:  2/3, alignItems : "center", justifyContent : "center"}}>
                <Text style={{fontFamily : 'joystix' , fontSize : 60}}>Ready</Text>
                <Text style={{fontFamily : 'joystix' , fontSize : 60}}>Set</Text>
                <Text style={{fontFamily : 'joystix' , fontSize : 60}}>Bang</Text>
            </View>
            <View  style={{flex:  2/3, alignItems : "center", justifyContent : "center"}}>
                <View>
                    <Text style={{fontFamily : 'joystix' , fontSize : 30, alignSelf : 'center'}}>Rounds</Text>
                </View>
                <View style={{flexDirection : 'row' , }}>
                    <TouchableOpacity onPress={()=> changeRounds(-2)}>
                        <Text style={{fontFamily : 'joystix' , fontSize : 50, marginRight : 30}}>{`<`}</Text>
                    </TouchableOpacity>
                    <Text style={{fontFamily : 'joystix' , fontSize : 50, marginRight : 30}}>{rounds}</Text>
                    <TouchableOpacity onPress={()=> changeRounds(2)}>
                        <Text style={{fontFamily : 'joystix' , fontSize : 50}}>{`>`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={{flex:  1/3, alignItems : "center"}} onPress={()=>navigation.navigate('GameScreen', rounds)}>
                <Text style={{fontFamily : 'joystix' , fontSize : 25, borderWidth : 3, borderRadius : 20, padding : 15}}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen