import React from "react";
import { Center, Icon, Text } from "native-base";

import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";
import { Fontisto} from '@expo/vector-icons'

export function SignIn() {
    return (
        <Center flex={1} bgColor='gray.900' p={7}>
            <Logo width={212} height={40} />
            <Button 
                title={'entrar com google'}
                type='SECONDARY' 
                leftIcon={<Icon 
                    as={Fontisto} 
                    name='google' 
                    size='md' 
                    color='white'/>}
                mt={12}
            />
            <Text color='gray.500' textAlign={'center'} mt={4}>
                Não utilizamos nenhuma informação além{'\n'} do seu e-mail para criação da sua conta.
            </Text>            
        </Center>
    )
}