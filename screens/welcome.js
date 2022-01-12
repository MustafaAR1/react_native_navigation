import React from 'react';
import {View,ImageBackground,StyleSheet,Text,Image,StatusBar,TouchableOpacity} from 'react-native';
function WelcomeScreen() {
  return (
  <ImageBackground blurRadius={1} style = {styles.imagestyle} source = {{uri: 'https://i.pinimg.com/236x/8c/b5/ee/8cb5ee0a8fc8dd21497f0c2d0ebe1238.jpg'}} > 

<View style={styles.container}>

<Image style={styles.logostyle} source={{uri:'https://reactjs.org/logo-og.png'}}/>
<Text style={styles.textstyle}> you can sell what you want</Text>


</View>


<View style={styles.btnstyle1}>

</View>
<View style={styles.btnstyle2}>

</View>




</ImageBackground>
  );
}


const styles = StyleSheet.create({


container : {
  height:'50%',
  width:'70%',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'red',
  
position:'absolute',
   top:50,
},

logostyle: {
 width:'100%',
    height:"80%",
    borderColor: "black", //button background/border color
   
   

},
textstyle: { 
  position: 'absolute',
  top: 200,

  color:'white'
},

btnstyle1: {
    width:'100%',
    height:"10%",
    borderColor: "black", //button background/border color
    backgroundColor:'tomato',
    
    
    
},
btnstyle2 : { 
    width:'100%',
    height:"10%",
    // paddingTop:40,
    borderColor: "black", //button background/border color
    backgroundColor:'yellow',

},
imagestyle: { 
  flex: 1,
 justifyContent: 'flex-end',
 alignItems:'center'
 },
});

export default WelcomeScreen;