import { useState } from 'react';
import { Heading, useToast, VStack } from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { api } from '../services/api';

export function Find(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');

  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool(): Promise<void | Record<string, unknown>> {
    try {
      setIsLoading(true);
      if (!code.trim()) {
        return toast.show({
          title: 'Informe o código!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      await api.post('/pools/join', { code });
      navigate('pools');
      toast.show({
        title: 'Você entrou no bolão com sucesso!',
        placement: 'top',
        bgColor: 'green.500',
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      if (error.response?.data?.message === 'Pool not found.') {
        return toast.show({
          title: 'Bolão não encontrado!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      if (error.response?.data?.message === 'You already joined this pool.') {
        return toast.show({
          title: 'Você já está nesse bolão!',
          placement: 'top',
          bgColor: 'red.500',
        });
      }
      toast.show({
        title: 'Opa! Não foi possível encontrar o bolão',
        placement: 'top',
        bgColor: 'red.500',
      });
    }
    return undefined;
  }
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Buscar por código" showBackButton />
      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          fontSize="xl"
          color="white"
          mb={8}
          textAlign="center"
        >
          Encontre o bolão através de {'\n'} seu código único
        </Heading>
        <Input
          mb={2}
          placeholder="Qual o código do bolão?"
          onChangeText={setCode}
          autoCapitalize="characters"
          value={code}
        />
        <Button
          title="BUSCAR BOLÃO"
          isLoading={isLoading}
          onPress={() => handleJoinPool()}
        />
      </VStack>
    </VStack>
  );
}
