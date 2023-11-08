import {useNavigation} from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import {AuthNavigationRoutesProps} from '@routes/auth.routes';

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import Input from "@components/Input";
import Button from "@components/Button";

const SignIn = () => {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNewAccount () {
    navigation.navigate('singUp');
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

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>

          <Input
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="senha" secureTextEntry />

          <Button>Acessar</Button>
        </Center>

        <Center mt={32}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            variant="outline"
            onPress={handleNewAccount}
          >
            Criar conta
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignIn;
