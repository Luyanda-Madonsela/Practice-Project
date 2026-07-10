"use client";

import React, { useState } from "react";
import { 
  HStack, 
  VStack,
  Text, 
  Heading, 
  Button, 
  Spacer, 
  Box, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useClipboard
} from "@chakra-ui/react";

// 1. Define types for our data structures
interface ComponentData {
  title: string;
  code: string;
}

// Restrict keys to exactly match our UI sections
type ComponentKeys = "Alerts" | "Accordion" | "Buttons" | "Divider" | "Modal" | "Tabs";

const componentCode: Record<ComponentKeys, ComponentData> = {
  Alerts: {
    title: "Alert Component (React)",
    code: `import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

function SuccessAlert() {
  return (
    <Alert status='success' variant='subtle'>
      <AlertIcon />
      <AlertTitle>Data uploaded to the server</AlertTitle>
    </Alert>
  )
}

// Note: status can be 'error', 'success', 'warning', or 'info'`
  },
  Accordion: {
    title: "Accordion Component (React)",
    code: `import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

function SimpleAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>Section 1</Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Content 1</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}`
  },
  Buttons: {
    title: "Button Component (React)",
    code: `import { Button, ButtonGroup } from '@chakra-ui/react'

function ActionButtons() {
  return (
    <ButtonGroup spacing='6'>
      <Button colorScheme='blue'>Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  )
}`
  },
  Divider: {
    title: "Divider Component (React)",
    code: `import { Divider, Center } from '@chakra-ui/react'

function VerticalDivider() {
  return (
    <Center height='50px'>
      <Divider orientation='vertical' />
    </Center>
  )
}`
  },
  Modal: {
    title: "Modal Component (React)",
    code: `import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'

function BasicModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Modal Body Content</ModalBody>
      </ModalContent>
    </Modal>
  )
}`
  },
  Tabs: {
    title: "Tabs Component (React)",
    code: `import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function NavTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content One</TabPanel>
        <TabPanel>Content Two</TabPanel>
      </TabPanels>
    </Tabs>
  )
}`
  }
};

export default function ChakraUIComponents() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // 2. Strongly type your hook state
  const [activeComponent, setActiveComponent] = useState<ComponentData>(componentCode.Alerts);

  // 3. Strongly type the argument signature 
  const handleOpenCode = (componentKey: ComponentKeys): void => {
    setActiveComponent(componentCode[componentKey]);
    onOpen();
  };

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
          <Button onClick={() => handleOpenCode("Alerts")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%">
          <Text>Alert Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------ACCORDION---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="16.20rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Accordion</Text>
          <Spacer/>
          <Button onClick={() => handleOpenCode("Accordion")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Accordion Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------BUTTONS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="8rem" mt="1.5rem" alignItems="center" justifyContent="center">
          <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Buttons</Text>
          <Spacer/>
          <Button onClick={() => handleOpenCode("Buttons")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%">
          <Text>Button Components</Text>
        </Box>
      </VStack>

      {/*------------------------------------------DIVIDER---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="16.70rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Divider</Text>
          <Spacer/>
          <Button onClick={() => handleOpenCode("Divider")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Divider Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------MODAL---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="15.90rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Modal</Text>
          <Spacer/>
          <Button onClick={() => handleOpenCode("Modal")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Modal Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------TABS---------------------------------------- */}
      <VStack borderWidth="1px" borderColor="red.500" w="90%" h="13.80rem" mb="7rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack borderWidth="1px" borderColor="red.500" w="98%" mt="2rem"> 
          <Text>Tabs</Text>
          <Spacer/>
          <Button onClick={() => handleOpenCode("Tabs")}>View Code</Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Tabs Component</Text>
        </Box>
      </VStack>

      {/* Reusable Code Modal Component */}
      <CodeModal isOpen={isOpen} onClose={onClose} data={activeComponent} />
    </VStack>
  );
}

// 4. Define specific types for the sub-component props
interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ComponentData;
}

function CodeModal({ isOpen, onClose, data }: CodeModalProps) {
  const { onCopy, hasCopied } = useClipboard(data?.code || "");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent borderRadius="xl" overflow="hidden">
        
        {/* Header */}
        <ModalHeader display="flex" alignItems="center" gap={3} py={5}>
          <Text color="blue.500" fontWeight="bold" fontSize="xl">{`< >`}</Text>
          <Text fontSize="lg" fontWeight="bold">{data?.title}</Text>
        </ModalHeader>
        <ModalCloseButton mt={2} />

        {/* Code Body */}
        <ModalBody bg="#20212E" p={8} m={0}>
          <Box 
            as="pre" 
            color="#E2E8F0" 
            fontSize="sm" 
            fontFamily="monospace"
            whiteSpace="pre-wrap"
          >
            {data?.code}
          </Box>
        </ModalBody>

        {/* Footer */}
        <ModalFooter bg="white" py={4}>
          <Button 
            onClick={onCopy} 
            variant="outline" 
            borderRadius="full" 
            size="md"
            leftIcon={<Text fontWeight="bold">{`< >`}</Text>}
            bg="gray.50"
          >
            {hasCopied ? "Copied!" : "Copy All"}
          </Button>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );
}