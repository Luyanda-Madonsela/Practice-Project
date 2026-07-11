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
  

  const [activeComponent, setActiveComponent] = useState<ComponentData>(componentCode.Alerts);


  const handleOpenCode = (componentKey: ComponentKeys): void => {
    setActiveComponent(componentCode[componentKey]);
    onOpen();
  };

  return (
    <VStack minH="90vh" bgColor="#FAFAFF">
      <HStack w="90%" mt="8.5rem" alignItems="center">  
        <Heading  fontFamily="Inter, sans-serif"
          fontWeight="700"
          fontSize="1.75rem"
          lineHeight="100%"
          letterSpacing="0%"
          color="#14141F">
            Chakra UI Components Practice
        </Heading>  
      </HStack>

      {/*------------------------------------------ALERTS---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="10rem" mt="3rem" alignItems="center" justifyContent="start">
        <HStack w="98%" mt="1rem"> 
          <Text 
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
              Alerts
          </Text>
          <Spacer/>
          <Button 
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"
              onClick={() => handleOpenCode("Alerts")}>
              View Code
          </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%">
          <Text>Alert Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------ACCORDION---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="16.20rem"  mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="0rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
              Accordion
          </Text>
          <Spacer/>
          <Button 
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"
              onClick={() => handleOpenCode("Accordion")}>
              View Code
            </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Accordion Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------BUTTONS---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="8rem" mt="1.5rem" alignItems="center" justifyContent="center">
          <HStack w="98%" mt="1rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
                Buttons
            </Text>
          <Spacer/>
          <Button 
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"
              onClick={() => handleOpenCode("Buttons")}>
                View Code
            </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="50%">
          <Text>Button Components</Text>
        </Box>
      </VStack>

      {/*------------------------------------------DIVIDER---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="16.70rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="1rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
                Divider
            </Text>
          <Spacer/>
          <Button
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"
              onClick={() => handleOpenCode("Divider")}>
                View Code
            </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Divider Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------MODAL---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="15.90rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="1rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
                Modal
            </Text>
          <Spacer/>
          <Button
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"
              onClick={() => handleOpenCode("Modal")}>
                View Code
            </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Modal Component</Text>
        </Box>
      </VStack>

      {/*------------------------------------------TABS---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" h="13.80rem" mb="7rem" mt="1.5rem" alignItems="center" justifyContent="center">
        <HStack w="98%" mt="1rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
                Tabs
            </Text>
          <Spacer/>
          <Button
              w="6.375rem" 
              h="1.75rem" 
              borderRadius="65rem" 
              color="#475569" 
              borderColor="#F1F5F9" 
              borderWidth="0.0625rem"  
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.75rem"          
              onClick={() => handleOpenCode("Tabs")}>
                View Code
            </Button>
        </HStack>
        <Box borderWidth="1px" borderColor="red.500" w="98%" h="70%">
          <Text>Tabs Component</Text>
        </Box>
      </VStack>


      <CodeModal isOpen={isOpen} onClose={onClose} data={activeComponent} />
    </VStack>
  );
}


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
            leftIcon={<Text fontWeight="bold"></Text>}
            bg="gray.50"
          >
            {hasCopied ? "Copied!" : "Copy All"}
          </Button>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );
}