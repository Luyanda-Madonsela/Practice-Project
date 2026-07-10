import { HStack, VStack } from "@chakra-ui/react/stack";
import { Text, Heading, Button, Spacer, Box } from "@chakra-ui/react";

export default function ChakraUIComponents() {
  return (
    <VStack minH="90vh">
      <HStack borderWidth="1px" borderColor="red.500" w="90%" mt="8.5rem" alignItems="center">  
        <Heading fontSize="4xl" fontWeight="bold">Chakra UI Components Practice</Heading>  
      </HStack>
      {/*------------------------------------------ALERTS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Alerts</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%" >
          <Text>Alert Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------ACCORDION---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="16.20rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Accordion</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <Text>Accordion Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------BUTTONS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="8rem" mt="1.5rem" alignItems="center" justifyContent="center">
          <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Buttons</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%" >
          <Text>Button Components</Text>
        </Box>
      </VStack>
      {/*------------------------------------------DIVIDER---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="16.70rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Divider</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <Text>Divider Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------MODAL---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="15.90rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Modal</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <Text>Modal Component</Text>
        </Box>
      </VStack>
      {/*------------------------------------------TABS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13.80rem" mb="7rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Tabs</Text>
          <Spacer/>
          <Button>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%" >
          <Text>Tabs Component</Text>
        </Box>
      </VStack>
    </VStack>
  )
}