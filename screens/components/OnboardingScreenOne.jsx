import React from 'react'
import { StyleSheet, Text, View } from 'react-native';



export const OnboardingScreenOne = () => {
  return (
   <View  >
     <Text style={styles.text} >What the Fuck!!!</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    outerHeight:'20px',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: {
    color: 'blue',
    fontWeight: 'bold',


  }
});
