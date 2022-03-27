import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
           { showProfileData && ( 
        <Box mr='4' textAlign='right'>
           <Text>Thiago Carneiro </Text>
           <Text 
           color="gray.300" 
           fontSize="small"> 
            thiagofreitascarneiro@hotmail.com
           </Text> 
        </Box>
           )}
        <Avatar size="md" name="Thiago Carneiro" src="https://github.com/thiagofreitascarneiro.png" />
    </Flex>
    )
}