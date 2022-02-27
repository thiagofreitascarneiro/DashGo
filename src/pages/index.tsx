import Head from 'next/head'
import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex  
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
        <Flex 
          as="form"  
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          
        >
          <Stack spacing="4">
          <FormControl>
           <FormLabel htmlFor="email">E-mail</FormLabel>

           <Input 
           width='90%'
           id="email"
           name="email" 
           type="email"
           focusBorderColor="pink.500"
           bgColor="gray.900"
           variant="filled"
           _hover={{
             bgColor: 'gray.900'
              }}
           size="lg"
           />
          </FormControl>

          <FormControl>
          <FormLabel htmlFor="password">Senha</FormLabel>


          <Input 
           width='90%'
           id="email"
           name="email" 
           type="email"
           focusBorderColor="pink.500"
           bgColor="gray.900"
           variant="filled"
           _hover={{
             bgColor: 'gray.900'
              }}
           size="lg"  
           />
           </FormControl>
           </Stack>

          

           <Button 
            type="submit" 
            mt="6" 
            colorScheme="pink"
            size="lg"
            border="none"
            > 
                Entrar 
           </Button>
        </Flex>
    </Flex>
  )
}
