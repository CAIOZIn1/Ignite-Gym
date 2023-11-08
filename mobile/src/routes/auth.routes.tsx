import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import SignIn from '@screens/SingIn';
import SignUp from '@screens/SingnUp';

type AuthRoutes = {
  singIn: undefined,
  singUp: undefined,
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name='singIn'
        component={SignIn}
      />

      <Screen
        name='singUp'
        component={SignUp}
      />
    </Navigator>
  )
}
