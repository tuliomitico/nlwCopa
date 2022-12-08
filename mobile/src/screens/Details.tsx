import { useEffect, useState } from 'react';
import { Share } from 'react-native';
import { HStack, useToast, VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Guesses } from '../components/Guesses';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { Option } from '../components/Option';
import { EmptyMyPoolList } from '../components/EmptyMyPoolList';
import { PoolCardProps } from '../components/PoolCard';
import { PoolHeader } from '../components/PoolHeader';
import { api } from '../services/api';

interface RouteParams {
  id: string;
}
// Aula 5 hora 1 minuto 26
export function Details(): JSX.Element {
  const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>(
    'guesses',
  );
  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState({} as PoolCardProps);

  const { params } = useRoute();
  const toast = useToast();

  const { id } = params as RouteParams;

  async function handleCodeShare(): Promise<void> {
    await Share.share({
      message: poolDetails.code,
    });
  }

  async function fetchPoolDetails(): Promise<void> {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${id}`);
      setPoolDetails(response.data.pool);
    } catch (error) {
      console.error(error);
      toast.show({
        title: 'Não foi possível carregar os detalhes do bolão.',
        placement: 'top',
        bgColor: 'red.500',
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPoolDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header
        title={poolDetails.title}
        showBackButton
        showShareButton
        onShare={handleCodeShare}
      />
      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />
          <HStack bgColor="gray.800" rounded="sm" p={1} mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === 'guesses'}
              onPress={() => setOptionSelected('guesses')}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === 'ranking'}
              onPress={() => setOptionSelected('ranking')}
            />
          </HStack>
          <Guesses poolId={poolDetails.id} />
        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  );
}
