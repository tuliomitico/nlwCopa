import React from 'react';
import { Center, Spinner } from 'native-base';

export function Loading(): React.ReactElement {
  return (
    <Center flex={1} bgColor="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  );
}
