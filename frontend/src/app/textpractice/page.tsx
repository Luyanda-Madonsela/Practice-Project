import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text, Heading, Spacer, Button, Box } from "@chakra-ui/react";

export default function TextPractice() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Text Practice</Heading>  
      </HStack>
      {/*------------------------------------------FONT SELECTOR---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Font Selector</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="25%" >
          <Text>Font Component 1 </Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="40%" mb="1.5rem" >
          <Text>Font Component 2</Text>
        </Box>
      </VStack>
      {/*------------------------------------------HEADERS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="18rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Headers(H1-H6)</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="80%" >
          <Text>Heading Components</Text>
        </Box>
      </VStack>
      {/*------------------------------------------TEXT AREA---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Text Area</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="60%" >
          <Text>Text Area Component 1 </Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="20%" mb="1.5rem" >
          <Text>Text Area Component 2</Text>
        </Box>
      </VStack>
      {/*------------------------------------------TEXT FORMATTING---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Text Formatting</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="20%" >
          <Text>Text FormattingComponent 1 </Text>
        </Box>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="30%" mb="1.5rem" >
          <Text>Text Formatting Component 2</Text>
        </Box>
      </VStack>
      {/*------------------------------------------LISTS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="15rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Lists (Ordered & Unordered)</Text>
          <Spacer/>
        </HStack>
        <HStack borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <VStack borderWidth="1px" borderColor="red.500" w="50%" h="100%">
            <Text>Ordered List</Text>
          </VStack>
          <VStack borderWidth="1px" borderColor="red.500" w="50%" h="100%">
            <Text>Unordered List</Text>
          </VStack>
        </HStack>
      </VStack>
      {/*------------------------------------------DIVIDERS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" mb="9rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Dividers</Text>
          <Spacer/>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="80%" >
          <Text>Dividers</Text>
        </Box>
      </VStack>
    </VStack>
  )
}