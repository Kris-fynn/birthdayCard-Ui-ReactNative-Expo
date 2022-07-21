
import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import fggc from './assets/icons/boyboy.jpg'
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor:"lightblue",
    flex: 1,
    alignContent:"center",
    alignItems:"center",
    fontSize:30,
    maxWidth:1024,
    borderColor:"red",
    borderWidth:5,
    borderRadius:25,
  },
  tinyLogo: {
    width: 300,
    height: 300,
    borderRadius:150,
    borderColor:"#4d0026",
    borderWidth:2,
  },
  headerhead:{
    fontSize:42,
    color: '#green',
    fontWeight:'bold',
  },
  headercontent:{
    color: '#ffffcc',
    fontSize: 60,
  },
  boyname:{
    fontSize: 40,
    color:'#ff5050',
    marginBottom:10,
  },
  boycontent:{
    color:"#4d0026",
textAlign:'center',
    fontSize : 32,
    fontStyle:'italic',
  },
  appdev:{
  paddingTop:200,


  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.headerhead}>Happy</Text>
    <Text style={styles.headercontent}>Birthday</Text>
      <Image
        style={styles.tinyLogo}
        source={fggc}
      />
      <Text style={styles.boyname}>Mr Junior Pascal</Text>
      <Text style={styles.boycontent}>Happy birthday, my precious son!<br></br> You are loved today, tomorrow, and always<br>
      </br>
      Every single day since you were born<br></br>
      you’ve added something amazing to my<br></br>
      life. I can’t imagine my life without you in<br></br>
      it. Happy birthday, son!
    </Text>
    <Text style={styles.appdev}>Designed by :Kris Fynn @ MLab || Coded by Kris Fynn</Text>
    </View>
  );
}

export default DisplayAnImage;   