import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { init } from './src/db';
import store from './src/game'
import { useFonts } from 'expo-font';

export default function App() {

  init()
  .then(() => {
    console.log("Initialized database.");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

  const [loaded] = useFonts({
    'Bungee': require('./assets/fonts/Bungee.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if(!loaded) {
    return <ActivityIndicator/>
  }

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}


