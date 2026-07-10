import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text } from "@chakra-ui/react";

export default function UserDashboard() {
  return (
    <HStack minH="90vh" w="100%" mt="4.3rem" alignItems="start">
      <VStack as="aside" borderWidth="0.2px" borderColor="red.500" w="15%" minH="85rem" >
          <Text fontSize="2xl" ml="1rem">Side Bar</Text>
      </VStack>
      <VStack borderWidth="1px" borderColor="red.500" w="85%" minH="70rem" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="4rem">
          <Text fontSize="2xl"  ml="1rem">Dashboard</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="13rem">
          <Text fontSize="2xl"  ml="1rem">Stats</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="25rem">
          <Text fontSize="2xl"  ml="1rem">User Profile</Text>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="100%" h="35rem">
          <Text fontSize="2xl"  ml="1rem">My Favourite Images</Text>
        </HStack>
      </VStack>
    </HStack>
  )
}