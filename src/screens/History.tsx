import { Heading, VStack, SectionList, Text } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreemHeader } from "@components/ScreenHeader";
import { useState } from "react";

export function History(){
  const [exercises, setExercises] = useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada Unilateral']
    },
    {
      title: '27.08.22',
      data: ['Puxada Unilateral']
    },
]);

  return(
    <VStack flex={1}>
      <ScreemHeader title="Histórico de exercícios"/>

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <HistoryCard />
        )}
        renderSectionHeader={({section}) => (
          <Heading color='gray.100' fontSize='md' mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={4}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent:'center'}}
        ListEmptyComponent={({}) => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda.{'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
