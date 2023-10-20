import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string,
  img?: string
};

export function ExerciseCard({title, img,...rest}: Props){
  return(
    <TouchableOpacity
      {...rest}
    >
      <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mt={3}>
        <Image
          source={{uri: img? img : 'https://www.acritica.com/image/policy:1.298200.1678903460:1678903460/image.jpg?f=default&w=1200'}}
          alt="Imagem Remada"
          w={16}
          h={16}
          rounded='md'
          mr={4}
          resizeMode='cover'
        />

        <VStack flex={1}>
          <Heading fontSize='lg' color='white'>
            {title}
          </Heading>

          <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
            Método Quantum
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
        />
      </HStack>
    </TouchableOpacity>
  );
}
