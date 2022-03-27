import { Button } from "@chakra-ui/react";

interface PAginationItemProps {
    isCurrent?: boolean;
    number: number;
}

export function PaginationItem({ 
    isCurrent = false, 
    number 
}: PAginationItemProps) {
    if (isCurrent) {
        return (
            <Button 
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default',
                }}
                >
                 {number}
            </Button>
        );
    }

    return (
        <Button 
        size='sm'
        fontSize='xs'
        width='4'
        bgColor='gray.700'
        _hover={{
            br: 'gray.500'
        }}
        >
            {number}
        </Button>
    )
    }
    