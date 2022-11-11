import { Heading, VStack, Text } from 'native-base';
import { Header } from '../components/Header';

import Logo from '../assets/logo.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function New(): JSX.Element {
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Criar novo bolão" />
      <VStack mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading
          fontFamily="heading"
          fontSize="xl"
          color="white"
          textAlign="center"
          my={8}
        >
          Crie seu bolão da copa e {'\n'}
          compartilhe entre amigos!
        </Heading>
        <Input mb={2} placeholder="Qual o nome do seu bolão?" />
        <Button title="Criar meu bolão" />
        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
