import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text } from "@chakra-ui/react";


export default function AdminDashboard() {
  return (
<HStack minH="90vh" w="100%" alignItems="start">
  {/* ------------------------------SIDEBAR------------------------------------*/}
  <VStack as="aside" borderWidth="0.2px" borderColor="red.500" w="15%" h="100vh" position="fixed" left="0">
    <Text fontSize="2xl" ml="1rem">Side Bar</Text>
  </VStack>
  {/* ------------------------------------------------------------------------ */}
  <VStack borderWidth="1px" borderColor="red.500" w="85%" minH="70rem" justifyContent="start" marginLeft="15%"> 
    <HStack borderWidth="1px" borderColor="red.500" w="100%" h="4rem"position="fixed" top="0" left="15%" right="0" zIndex={10} bg="white">
      <Text fontSize="2xl" ml="1rem">Admin Overview</Text>
    </HStack>
    <HStack borderWidth="1px" borderColor="red.500" w="100%" h="13rem" mt="4rem">
      <Text fontSize="2xl" ml="1rem">Stats</Text>
    </HStack>
    <HStack borderWidth="1px" borderColor="red.500" w="100%" h="25rem">
      <Text fontSize="2xl" ml="1rem">User Activity</Text>
    </HStack>
    <HStack borderWidth="1px" borderColor="red.500" w="100%" h="35rem">
      <Text fontSize="2xl" ml="1rem">All Users</Text>
    </HStack>
  </VStack>
</HStack>
  )
}