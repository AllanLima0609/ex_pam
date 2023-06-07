import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import Constants from 'expo-constants';

import Apostila05 from './components/apostila_05';

let corApp = '#000';
export default function App() {
  return (
    <View style={styles.container}>
      <Apostila05 />
      <StatusBar style={corApp === '#000' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: corApp,
    //alignItems: 'center',
   // justifyContent: 'center',
    padding: 8,
  },
});
