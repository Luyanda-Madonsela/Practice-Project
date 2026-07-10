import { HStack, VStack } from "@chakra-ui/react/stack";
import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";

export default function VideoDisplayPractice() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" mb="3rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Video Display Practice</Heading>  
      </HStack>
      {/*------------------------------------------VIDEO PLAYER---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="40rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Building a Modern Video Player UI - Dark Theme</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="85%" >
          <Text>Video Player</Text>
        </Box>
      </VStack>

      {/*------------------------------------------VIDEOS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="35rem" mt="1.5rem" mb="13rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Video Grid</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="90%" >
          <Text>Video Card Grid</Text>
        </Box>
      </VStack>


    </VStack>
  )
}