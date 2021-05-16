import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const StartScreen = ({navigation}) => {

    let [rounds, setRounds] = useState(3);

    let changeRounds = (num) => {
        if(rounds+num>0) {
            setRounds(rounds+num);
        }
    }

    return(
        <View style={styles.container}>
            <View  style={styles.titleContainer}>
                <Text style={styles.title}>Ready</Text>
                <Text style={styles.title}>Set</Text>
                <Text style={styles.title}>Bang</Text>
            </View>
            <View  style={styles.titleContainer}>
                <View>
                    <Text style={{fontFamily : 'joystix' , fontSize : 30, alignSelf : 'center'}}>Rounds</Text>
                </View>
                <View style={styles.roundsContainer}>
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
                <Text style={styles.startButton}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1
    },
    titleContainer : {
        flex:  2/3,
        alignItems : "center",
        justifyContent : "center"
    },
    title : {
        fontFamily : 'joystix' ,
        fontSize : 60
    },
    roundsContainer : { flexDirection : 'row' },
    startButton : {
        fontFamily : 'joystix' ,
        fontSize : 25,
        borderWidth : 3,
        borderRadius : 20,
        padding : 15
    }
  });

export default StartScreen