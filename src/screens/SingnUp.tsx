import {useNavigation} from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import {useForm, Controller} from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import Input from '@components/Input';
import Button from '@components/Button';


const SignUp = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: any) {

  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} bg='black'>
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={12}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name='name'
            render={({ field: {onChange, value} }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: {onChange, value} }) => (
              <Input
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: {onChange, value} }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirm'
            render={({ field: {onChange, value} }) => (
              <Input
                placeholder="Confirmar senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
              />
            )}
          />

          <Button
            onPress={handleSubmit(handleSignUp)}
            mt={3}
          >
            Criar e acessar
          </Button>
        </Center>

        <Button
          variant="outline"
          mt={'24'}
          onPress={handleGoBack}
        >
          Voltar para tela de Login
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
