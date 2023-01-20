
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';



export default function App() {
  
  const [loaded] = useFonts({
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
  })

  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#DAC3F7" size="large" />
      </View>
    )
  }

 return (
  <Provider store={store} >
    <AppNavigator/>
  </Provider>
 );   
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',	
    alignItems: 'center',
  }
});