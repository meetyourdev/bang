import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

const ScoreScreen = ({route,navigation}) => {
    let score = route.params;
    return(
        <View style={{flex:  1}}>
            <View  style={{flex:  1/3, padding : 20, alignItems : "center", justifyContent : "center"}}>    
                <Text style={{fontFamily : 'joystix' , fontSize : 50, alignSelf : 'center'}}>{score.a > score.b ? "Player A wins !" : "Player B wins !"}</Text>
            </View>
            <View  style={{flex:  1/3, alignItems : "center", justifyContent : "center"}}>
                <Text style={{fontFamily : 'joystix' , fontSize : 30}}>Player A : {score.a}</Text>
                <Text style={{fontFamily : 'joystix' , fontSize : 30}}>Player B : {score.b}</Text>
            </View>
            <TouchableOpacity style={{flex:  1/3, alignItems : "center"}} onPress={()=>navigation.navigate('GameScreen')}>
                <Text style={{fontFamily : 'joystix' , fontSize : 25, borderWidth : 3, borderRadius : 20, padding : 15}}>Start Again !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScoreScreen