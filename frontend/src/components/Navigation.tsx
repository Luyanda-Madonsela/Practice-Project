import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navigation() {
    return (
        <HStack as="nav" spacing={4} h="4.5rem" w="maxW" bg="white" border="md" borderWidth="1px" borderColor="red.500" color="black">
            <HStack borderWidth="1px" borderColor="red.500">
                <Text borderWidth="1px" borderColor="red.500" fontSize="lg" fontWeight="bold"> Logo </Text>
                <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
            </HStack>
            <Spacer />
            <Button colorScheme="blue" variant="ghost">Home</Button>
            <Button colorScheme="blue" variant="ghost">About</Button>
            <Button colorScheme="blue" variant="ghost">Contact</Button>

        </HStack>
    )
}
