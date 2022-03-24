import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
} 


export function Input({name, label, ...rest}: InputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor="email">E-mail</FormLabel> }

        <ChakraInput 
        name={name}  
        width='90%'
        id={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
           }}
        size="lg"
        {...rest}
        />
       </FormControl>
    );
}