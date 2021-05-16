/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from "react";
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Dimensions,
   View,
   TouchableWithoutFeedback
 } from 'react-native';
 
 import Player from '../component/Player'
 import StartButton from "../component/StartButton";
 import CountDown from "../component/CountDown";
 import NextRound from "../component/NextRound";
 
 const windowHeight = Dimensions.get('window').height;
 
 const GameScreen = ({route,navigation}) => {
 
   let [score, setScore] = useState({a : 0, b : 0})
   let [gameOn, setGameOn] = useState(false);
   let [oneDead, setOneDead] = useState(false);
   let [twoDead, setTwoDead] = useState(false);
 
   let [startButtonVisibility, setStartButtonVisibility] = useState(true);
   let [countDownVisibility, setCountDownVisibility] = useState(false);
   let [nextRoundButtonVisibility, setNextRoundButtonVisibility] = useState(false);
 
   let rounds = route.params;
    useEffect(()=>{
        const resetScore = navigation.addListener("focus", ()=> {
            setScore({a : 0, b : 0});
            setGameOn(false);
            setOneDead(false);
            setTwoDead(false);
            setCountDownVisibility(false);
            setStartButtonVisibility(true);
            setNextRoundButtonVisibility(false);
        });
        return resetScore;
    },[navigation]);
 
   let handleTouch = (evt) => {
     if ( gameOn ) {
       let y = evt.nativeEvent.locationY;
       console.log(y);
       if ( y < (windowHeight/2)) {
         setScore({a : score.a + 1 , b : score.b});
         setTwoDead(true);
       } else {
         setOneDead(true);
         setScore({a : score.a , b : score.b + 1});
       }
       setGameOn(false);
       setCountDownVisibility(false);
       setNextRoundButtonVisibility(true);
     }
   }
 
   let nextRound = () => {
       if (score.a+score.b == rounds) {
           navigation.navigate('ScoreScreen', score);
       }
     setCountDownVisibility(true);
     setOneDead(false);
     setTwoDead(false);
   }
 
   let startGame = () => {
     setGameOn(true);
   }
 
   return (
     <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback style={{flex : 9/10}} onPress={(evt) => handleTouch(evt) }> 
             <View style={{flex : 1, justifyContent : 'space-between', backgroundColor : 'ltgrey'}}>
 
 
               {/* PLAYER A */}
               <View style={{ alignSelf : 'center'}}>
                 <Text style={{ fontFamily : 'joystix' , fontSize : 30, alignSelf : 'center', padding : 10}}>{score.a}</Text>
                 <Player isDead={oneDead} isReverse={true}/>
               </View>
 
                {/* START BUTTON */}
               { startButtonVisibility ? 
               <View style={{alignSelf:"center"}}>
                 <StartButton isVisible={setStartButtonVisibility} showCountDown={setCountDownVisibility}/>
               </View>
               :null}
 
                  {/* COUNT DOWN */}
               { countDownVisibility ? 
               <View style={{alignSelf:"center"}}>
                 <CountDown isVisible={setCountDownVisibility} gameOn={startGame}/>
               </View>
               :null}
 
               {/* NEXT ROUND BUTTON */}
                 { nextRoundButtonVisibility ? 
               <View style={{alignSelf:"center"}}>
                 <NextRound isVisible={setNextRoundButtonVisibility} onPress={nextRound}/>
               </View>
               :null}
 
               {/* PLAYER B */}
               <View style={{ alignSelf : 'center'}}>
                 <Player isDead={twoDead} isReverse={false}/>
                 <View style={{flexDirection : 'row' , marginTop  : 10, justifyContent : 'center'}}>
                    <Text style={{ fontFamily : 'joystix'  , fontSize : 30 }}>{score.b}</Text>
                 </View>
                
               </View>
             </View>
             </TouchableWithoutFeedback>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container : {
     flex : 1,
     backgroundColor : 'white',
     padding : 10
   }
 });
 
 export default GameScreen;
 