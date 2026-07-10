import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navigation() {
    return (
        <HStack as="nav" spacing={4} h="4.5rem" w="maxW" bg="white" border="md" borderWidth="1px" borderColor="red.500" color="black" justifyContent="center" alignItems="center" position="fixed" top={0} left={0} right={0} zIndex={999}>
            <HStack as="div" w="90%">
                <HStack borderWidth="1px" borderColor="red.500" h="100%">
                    <Text borderWidth="1px" borderColor="red.500" fontSize="lg" fontWeight="bold"> Logo </Text>
                    <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                </HStack>
                <Spacer />
                <Button colorScheme="blue" variant="ghost">Home</Button>
                <Button colorScheme="blue" variant="ghost">About</Button>
                <Button colorScheme="blue" variant="ghost">Contact</Button>
            </HStack>

        </HStack>
    )
}
