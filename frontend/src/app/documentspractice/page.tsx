import { HStack, VStack } from "@chakra-ui/react/stack";
import { Box, Heading, Spacer, Text } from "@chakra-ui/react";

export default function DocumentsPractice() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Handling Documents Practice</Heading>  
      </HStack>
      {/*------------------------------------------READ & WRITE TO DOCUMENTS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="22rem" mt="3rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" h="90%" >
          <VStack borderWidth="1px" borderColor="red.500" w="59%" h="100%">
            <Text>Edit Document</Text>
          </VStack>
          <Spacer/>
          <VStack borderWidth="1px" borderColor="red.500" w="40%" h="100%">
            <Text>Read & Write Text Files</Text>
          </VStack>
        </HStack>
      </VStack>
      {/*------------------------------------------UPLOAD PDF---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="15rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="1.2rem"> 
          <Text>Upload PDF</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <Text>PDF Upload Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------DISPLAY PDF---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="65rem" mt="3rem" mb="" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="1.2rem"> 
          <Text>Display PDF</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="3%" >
          <Text>PDF Display Component 1</Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="89%" >
          <Text>Document Preview</Text>
        </Box>
      </VStack>
      {/*------------------------------------------SAVE/ DOWNLOAD PDF---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" mb="7rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="1.2rem"> 
          <Text>Save/ Download PDF</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%" >
          <Text>Save/ Download Component 1 </Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="40%" mb="1.5rem" ></Box>
      </VStack>
    </VStack>
  )
}