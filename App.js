import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardingScreenOne } from './screens/components/OnboardingScreenOne';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >E-Attendance</Text>
      <OnboardingScreenOne/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
