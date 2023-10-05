import { StatusBar, Text, View } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function app(){
  const [fontsLoaded] = useFonts({Nunito_400Regular, Nunito_700Bold});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202824'}}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Text style={{ fontFamily: 'Nunito_700Bold', color: '#fff' }}>Olá Mundo</Text> : <View />}
    </View>
  );
}
