import Button from "@components/Button";
import Input from "@components/Input";
import { ScreemHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/userPhoto";
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile(){
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return(
    <VStack flex={1}>
      <ScreemHeader
        title="Perfil"
      />

      <ScrollView>
        <Center mt={6} px={7}>
          {
            photoIsLoading ?

            <Skeleton
            w={PHOTO_SIZE} h={PHOTO_SIZE} rounded='full' startColor='gray.500' endColor='gray.400'
            />
            :
            <UserPhoto
              source={{uri:'https://github.com/CAIOZIn1.png'}}
              alt="Foto de perfil do usuário"
              size={PHOTO_SIZE}
            />
          }

          <TouchableOpacity>
            <Text color='green.500' fontWeight='bold' fontSize='md' mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            placeholder="Nome"
            bg='gray.600'
          />

          <Input
            value="sellacaio3@gmail.com"
            bg='gray.600'
            isDisabled
          />
        </Center>

        <VStack px={7} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2}>
            Alterar senha
          </Heading>

          <Input
            bg='gray.600'
            placeholder='Senha antiga'
            secureTextEntry
          />

          <Input
            bg='gray.600'
            placeholder='Nova antiga'
            secureTextEntry
          />

          <Input
            bg='gray.600'
            placeholder='Confirme a nova senha'
            secureTextEntry
          />

          <Button mt={4}>
            Atualizar
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
