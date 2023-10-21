import Button from "@components/Button";
import Input from "@components/Input";
import { ScreemHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/userPhoto";
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FileInfo } from "expo-file-system";

const PHOTO_SIZE = 33;

export function Profile(){
  const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false);
  const [userPhoto, setUserPhoto] = useState<string | undefined>('https://github.com/CAIOZIn1.png');

  const toast = useToast();

  const handleUserPhotoSelect = async () => {
    try{
      setPhotoIsLoading(true);
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        selectionLimit: 1,
      });

      if (photoSelected.canceled) return;

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo

        if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5){
          return toast.show({
            title: 'Essa imagem é muito grande, selecione uma com até 5MB',
            placement: 'bottom',
            bgColor: 'red.500'
          })
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch(err) {
      console.log(err);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return(
    <VStack flex={1}>
      <ScreemHeader
        title="Perfil"
      />

      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Center mt={6} px={7}>
          {
            photoIsLoading ?

            <Skeleton
            w={PHOTO_SIZE} h={PHOTO_SIZE} rounded='full' startColor='gray.500' endColor='gray.400'
            />
            :
            <UserPhoto
              source={{uri: userPhoto}}
              alt="Foto de perfil do usuário"
              size={PHOTO_SIZE}
            />
          }

          <TouchableOpacity onPress={handleUserPhotoSelect}>
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

          <Heading color='gray.200' fontSize='md' mb={2} alignSelf='flex-start' mt={12}>
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
        </Center>
      </ScrollView>
    </VStack>
  )
}
