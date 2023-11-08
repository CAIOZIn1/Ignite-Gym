import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import Loading from '@components/Loading';

export default function app(){
  const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}
