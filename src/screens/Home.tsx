import { useState } from "react";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatiorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState([
    "costas",
    "biceps",
    "triceps",
    "ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada Curvada",
    "Remada Unilateral",
    "Levantamento Terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigatiorRoutesProps>();

  function handleOpenExerciseDetails(){
    navigation.navigate('exercise');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={7}
        maxHeight={10}
        minH={10}
      />

      <VStack flex={1} px={8} mt={2} mb={5}>
        <HStack justifyContent="space-between">
          <Heading color="gray.100" fontSize="md" fontFamily='heading'>
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>



        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard
              title={item}
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 15}}
        />
      </VStack>
    </VStack>
  );
}
