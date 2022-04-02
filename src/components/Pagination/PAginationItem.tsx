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
                border='none'
                cursor={'pointer'}
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
        border='none'
        cursor={'pointer'}
        size='sm'
        fontSize='xs'
        color='white'
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
    