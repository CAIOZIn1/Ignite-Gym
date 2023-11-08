import { Spinner, Center } from "native-base";

const Loading = () => {
  return (
    <Center flex={1} bg="black">
      <Spinner />
    </Center>
   );
}

export default Loading;
