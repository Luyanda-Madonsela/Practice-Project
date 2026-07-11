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
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useClipboard,
  CloseButton
} from "@chakra-ui/react";

import {
  Alert,
  AlertTitle,
  AlertDescription,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'

interface ComponentData {
  title: string;
  code: string;
}

interface AlertPreview {
  status: "info" | "success" | "warning" | "error";
  label: string;
  message: string;
  bg: string;
  border: string;
  color: string;
}


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
    code: `import { Button, HStack, Box, Text } from '@chakra-ui/react'

function ActionButtons() {
  return (
    <HStack spacing='0.75rem'>
      <Button bg='#2F6FED' color='white' borderRadius='0.75rem'>Primary</Button>
      <Button bg='#0F172A' color='white' borderRadius='0.75rem'>Secondary</Button>
      <Button bg='white' color='#0F172A' borderWidth='1px' borderColor='#E2E8F0' borderRadius='0.75rem'>Ghost</Button>
      <Button bg='white' borderWidth='1px' borderColor='#E2E8F0' borderRadius='0.75rem' px='0'>
        <Box as='svg' viewBox='0 0 16 16' boxSize='1rem'>
          <path d='M8 3.25v9.5M3.25 8h9.5' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
        </Box>
      </Button>
      <Button bg='#E2E8F0' color='#94A3B8' borderRadius='0.75rem' isDisabled>Disabled</Button>
      <Button bg='#0F172A' color='white' borderRadius='0.75rem' leftIcon={
        <Box as='svg' viewBox='0 0 20 20' boxSize='0.95rem' animation='spin 0.8s linear infinite'>
          <path d='M10 3a7 7 0 1 0 7 7' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
        </Box>
      }>
        Loading
      </Button>
    </HStack>
  )
}`
  },
  Divider: {
    title: "Divider Component (React)",
    code: `import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'

function DividerExamples() {
  return (
    <VStack
      align='stretch'
      spacing='1rem'
      borderWidth='1px'
      borderColor='#E2E8F0'
      borderRadius='1rem'
      p='1rem'
    >
      <Text fontWeight='700' fontSize='0.85rem'>Horizontal divider</Text>
      <HStack spacing='0.8rem' align='center'>
        <Text fontSize='0.78rem'>Section A</Text>
        <Divider flex='1' borderColor='#E2E8F0' />
        <Text fontSize='0.78rem'>Section B</Text>
      </HStack>

      <Text fontWeight='700' fontSize='0.85rem'>Vertical divider</Text>
      <HStack spacing='0.8rem' align='stretch'>
        <Box borderWidth='1px' borderColor='#E2E8F0' borderRadius='0.75rem' px='2rem' py='1.15rem'>
          <Text fontWeight='700' fontSize='0.78rem'>Left</Text>
        </Box>
        <Divider orientation='vertical' h='100%' borderColor='#E2E8F0' />
        <Box borderWidth='1px' borderColor='#E2E8F0' borderRadius='0.75rem' px='2rem' py='1.15rem'>
          <Text fontWeight='700' fontSize='0.78rem'>Right</Text>
        </Box>
      </HStack>
    </VStack>
  )
}`
  },
  Modal: {
    title: "Modal Component (React)",
    code: `import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Text, useDisclosure } from '@chakra-ui/react'

function DeleteWorkspaceModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg='blackAlpha.200' backdropFilter='blur(6px)' />
        <ModalContent borderRadius='20px'>
          <ModalHeader>Delete workspace</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color='#475569'>
              Are you sure you want to delete this workspace? This action cannot be undone and all associated data will be permanently removed.
            </Text>
          </ModalBody>
          <ModalFooter gap='0.75rem'>
            <Button variant='outline' onClick={onClose}>Cancel</Button>
            <Button bg='#F84545' color='white' onClick={onClose}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`
  },
  Tabs: {
    title: "Tabs Component (React)",
    code: `import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

function DashboardTabs() {
  return (
    <Box borderWidth='1px' borderColor='#E2E8F0' borderRadius='1rem' bg='white' p='1rem'>
      <Tabs variant='unstyled' defaultIndex={0}>
        <TabList borderBottomWidth='1px' borderColor='#E2E8F0' gap='2rem'>
          {['Overview', 'Settings', 'Activity'].map((label) => (
            <Tab
              key={label}
              px='0'
              pb='0.95rem'
              borderBottomWidth='2px'
              borderColor='transparent'
              color='#64748B'
              fontWeight='600'
              _selected={{ color: '#0F172A', borderColor: '#2563EB' }}
            >
              {label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel px='0' pt='1.35rem'>
            <Text fontWeight='700' color='#0F172A' mb='0.5rem'>Overview content</Text>
            <Text color='#64748B'>
              This is the content for the active tab. You can switch tabs to update the panel below.
            </Text>
          </TabPanel>
          <TabPanel px='0' pt='1.35rem'>
            <Text fontWeight='700' color='#0F172A' mb='0.5rem'>Settings content</Text>
            <Text color='#64748B'>Manage preferences, access, and workspace configuration here.</Text>
          </TabPanel>
          <TabPanel px='0' pt='1.35rem'>
            <Text fontWeight='700' color='#0F172A' mb='0.5rem'>Activity content</Text>
            <Text color='#64748B'>Review recent updates, member actions, and audit history.</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}`
  }
};

const alertPreviews: AlertPreview[] = [
  {
    status: "info",
    label: "Info",
    message: "This is an informational alert.",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    color: "#2563EB"
  },
  {
    status: "success",
    label: "Success",
    message: "Action completed successfully.",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    color: "#10B981"
  },
  {
    status: "warning",
    label: "Warning",
    message: "Please review the changes before continuing.",
    bg: "#FFFBEB",
    border: "#FDE68A",
    color: "#D97706"
  },
  {
    status: "error",
    label: "Error",
    message: "Something went wrong. Try again.",
    bg: "#FEF2F2",
    border: "#FECACA",
    color: "#DC2626"
  }
];

const accordionItems = [
  {
    title: "Getting started",
    description: "Learn the setup basics and configure your workspace in a few quick steps.",
  },
  {
    title: "Pricing & plans",
    description: "Choose a plan that fits your team. You can upgrade or downgrade at any time, and changes take effect immediately.",
  },
  {
    title: "Security & compliance",
    description: "Review security controls, compliance coverage, and admin policies for your organization.",
  },
];

function AlertStatusIcon({ status, color }: { status: AlertPreview["status"]; color: string }) {
  if (status === "warning") {
    return (
      <Box as="svg" viewBox="0 0 20 20" boxSize="1.55rem" color={color} flexShrink={0}>
        <path
          d="M10.866 3.5L17.361 15a1 1 0 0 1-.87 1.5H3.51a1 1 0 0 1-.87-1.5L9.134 3.5a1 1 0 0 1 1.732 0z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M10 7.25v4.15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="13.65" r="0.85" fill="currentColor" />
      </Box>
    );
  }

  if (status === "success") {
    return (
      <Box as="svg" viewBox="0 0 20 20" boxSize="1.55rem" color={color} flexShrink={0}>
        <circle cx="10" cy="10" r="7.15" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M6.9 10.15l2.1 2.15 4.1-4.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Box>
    );
  }

  if (status === "error") {
    return (
      <Box as="svg" viewBox="0 0 20 20" boxSize="1.55rem" color={color} flexShrink={0}>
        <circle cx="10" cy="10" r="7.15" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M7.4 7.4l5.2 5.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M12.6 7.4l-5.2 5.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </Box>
    );
  }

  return (
    <Box as="svg" viewBox="0 0 20 20" boxSize="1.55rem" color={color} flexShrink={0}>
      <circle cx="10" cy="10" r="7.15" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 8.5v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="10" cy="6.3" r="0.85" fill="currentColor" />
    </Box>
  );
}

function AccordionCaretIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <Box as="svg" viewBox="0 0 12 12" boxSize="0.8rem" color={isExpanded ? "#2563EB" : "#64748B"} flexShrink={0}>
      <path
        d={isExpanded ? "M3 7.5l3-3 3 3" : "M3 4.5l3 3 3-3"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

function AccordionToggleIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <Box as="svg" viewBox="0 0 12 12" boxSize="0.9rem" color="#94A3B8" flexShrink={0}>
      <path d="M2.25 6h7.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {!isExpanded ? (
        <path d="M6 2.25v7.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : null}
    </Box>
  );
}

function ButtonPlusIcon() {
  return (
    <Box as="svg" viewBox="0 0 16 16" boxSize="0.95rem" color="currentColor" flexShrink={0}>
      <path d="M8 3.25v9.5M3.25 8h9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Box>
  );
}

function ButtonLoadingIcon() {
  return (
    <Box
      as="svg"
      viewBox="0 0 20 20"
      boxSize="0.95rem"
      color="currentColor"
      flexShrink={0}
      animation="spin 0.8s linear infinite"
    >
      <path d="M10 3a7 7 0 1 0 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Box>
  );
}

export default function ChakraUIComponents() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPreviewModalOpen,
    onOpen: onPreviewModalOpen,
    onClose: onPreviewModalClose,
  } = useDisclosure();
  const [activeComponent, setActiveComponent] = useState<ComponentData>(componentCode.Alerts);
  const [visibleAlerts, setVisibleAlerts] = useState<Record<AlertPreview["status"], boolean>>({
    info: true,
    success: true,
    warning: true,
    error: true,
  });


  const handleOpenCode = (componentKey: ComponentKeys): void => {
    setActiveComponent(componentCode[componentKey]);
    onOpen();
  };

  const handleDismissAlert = (status: AlertPreview["status"]): void => {
    setVisibleAlerts((current) => ({ ...current, [status]: false }));
  };

  const handleTriggerAlert = (status: AlertPreview["status"]): void => {
    setVisibleAlerts((current) => ({ ...current, [status]: true }));
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
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" minH="11rem" mt="3rem" alignItems="center" justifyContent="start" px="0.5rem" pb="1rem">
        <HStack w="98%" mt="1rem" mb="1rem"> 
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
        <HStack w="98%" alignItems="stretch" spacing="0.875rem" flexWrap="wrap">
          {alertPreviews.map((preview) => (
            <VStack key={preview.label} flex="1 1 16rem" alignItems="stretch" spacing="0.65rem">
              <Box minH="4.25rem">
                {visibleAlerts[preview.status] ? (
                  <Alert
                    status={preview.status}
                    bg={preview.bg}
                    borderWidth="1px"
                    borderColor={preview.border}
                    borderRadius="0.75rem"
                    alignItems="center"
                    px="0.875rem"
                    py="0.75rem"
                    gap="0.625rem"
                    minH="4.25rem"
                  >
                    <VStack>
                      <AlertStatusIcon status={preview.status} color={preview.color} />
                    </VStack>
                    <Box flex="1">
                      <AlertTitle
                        fontFamily="Geist, sans-serif"
                        fontSize="0.75rem"
                        fontWeight="700"
                        color="#1E293B"
                        mb="0.15rem"
                      >
                        {preview.label}
                      </AlertTitle>
                      <AlertDescription
                        fontFamily="Geist, sans-serif"
                        fontSize="0.72rem"
                        lineHeight="1.35"
                        color="#475569"
                      >
                        {preview.message}
                      </AlertDescription>
                    </Box>
                    <CloseButton
                      size="sm"
                      color="#64748B"
                      mt="0.1rem"
                      aria-label={`Dismiss ${preview.label.toLowerCase()} alert`}
                      onClick={() => handleDismissAlert(preview.status)}
                    />
                  </Alert>
                ) : (
                  <Box
                    borderWidth="1px"
                    borderStyle="dashed"
                    borderColor={preview.border}
                    borderRadius="0.75rem"
                    minH="4.25rem"
                    bg="#F8FAFC"
                  />
                )}
              </Box>
              <Button
                onClick={() => handleTriggerAlert(preview.status)}
                borderRadius="0.7rem"
                h="2.2rem"
                bg={preview.bg}
                borderWidth="1px"
                borderColor={preview.border}
                color={preview.color}
                fontFamily="Geist, sans-serif"
                fontWeight="600"
                fontSize="0.78rem"
                _hover={{ bg: preview.bg }}
                _active={{ bg: preview.bg }}
              >
                Trigger {preview.label} Alert
              </Button>
            </VStack>
          ))}
        </HStack>
      </VStack>
      {/*------------------------------------------ACCORDION---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" minH="16.2rem"  mt="1.5rem" alignItems="center" justifyContent="start" px="0.5rem" pb="0.75rem">
        <HStack w="98%" mt="1rem" mb="1rem"> 
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
        <Box w="98%" borderWidth="1px" borderColor="#E2E8F0" borderRadius="0.85rem" overflow="hidden" bg="white">
          <Accordion defaultIndex={[1]} allowToggle>
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.title} border="none">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        px="1rem"
                        py="0.95rem"
                        _hover={{ bg: "#F8FAFC" }}
                        borderTopWidth={index === 0 ? "0" : "1px"}
                        borderTopColor="#E2E8F0"
                        gap="0.75rem"
                      >
                        <AccordionCaretIcon isExpanded={isExpanded} />
                        <Box flex="1" textAlign="left">
                          <Text
                            fontFamily="Geist, sans-serif"
                            fontWeight="700"
                            fontSize="0.84rem"
                            color="#1E293B"
                          >
                            {item.title}
                          </Text>
                        </Box>
                        <AccordionToggleIcon isExpanded={isExpanded} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel px="1rem" pt="0" pb="1rem" borderTopWidth="1px" borderTopColor="#E2E8F0">
                      <Text
                        fontFamily="Geist, sans-serif"
                        fontSize="0.78rem"
                        lineHeight="1.55"
                        color="#64748B"
                      >
                        {item.description}
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </VStack>
      {/*------------------------------------------BUTTONS---------------------------------------- */}
        <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" minH="9rem" mt="1.5rem" alignItems="center" justifyContent="start" px="0.5rem" pb="1rem">
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

        <Box
          w="98%"
          bg="#FFFFFF"
          px={{ base: "0.85rem", md: "1rem" }}
          py="0.95rem"
          overflowX="auto"
        >
          <HStack spacing="0.75rem" minW="max-content" alignItems="center">
            <Button
              h="2.45rem"
              px="1.15rem"
              borderRadius="0.75rem"
              bg="#2F6FED"
              color="white"
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.8rem"
              _hover={{ bg: "#285FD0" }}
              _active={{ bg: "#224FB0" }}
            >
              Primary
            </Button>
            <Button
              h="2.45rem"
              px="1.15rem"
              borderRadius="0.75rem"
              bg="#0F172A"
              color="white"
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.8rem"
              _hover={{ bg: "#1E293B" }}
              _active={{ bg: "#020617" }}
            >
              Secondary
            </Button>
            <Button
              h="2.45rem"
              px="1.15rem"
              borderRadius="0.75rem"
              bg="#FFFFFF"
              color="#0F172A"
              borderWidth="1px"
              borderColor="#E2E8F0"
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.8rem"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}
            >
              Ghost
            </Button>
            <Button
              h="2.45rem"
              minW="2.45rem"
              px="0"
              borderRadius="0.75rem"
              bg="#FFFFFF"
              color="#0F172A"
              borderWidth="1px"
              borderColor="#E2E8F0"
              _hover={{ bg: "#F8FAFC" }}
              _active={{ bg: "#F1F5F9" }}
              aria-label="Add item"
            >
              <ButtonPlusIcon />
            </Button>
            <Button
              h="2.45rem"
              px="1.15rem"
              borderRadius="0.75rem"
              bg="#E2E8F0"
              color="#94A3B8"
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.8rem"
              isDisabled
              _disabled={{ bg: "#E2E8F0", color: "#94A3B8", opacity: 1, cursor: "not-allowed" }}
            >
              Disabled
            </Button>
            <Button
              h="2.45rem"
              px="1.05rem"
              borderRadius="0.75rem"
              bg="#0F172A"
              color="white"
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.8rem"
              leftIcon={<ButtonLoadingIcon />}
              _hover={{ bg: "#1E293B" }}
              _active={{ bg: "#020617" }}
            >
              Loading
            </Button>
          </HStack>
        </Box>
      </VStack>
      {/*------------------------------------------DIVIDER---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" minH="16.7rem" mt="1.5rem" alignItems="center" justifyContent="start" px="0.5rem" pb="0.75rem">
        <HStack w="98%" mt="1rem" mb="1rem"> 
          <Text
              fontFamily="Geist, sans-serif"
              fontWeight="700"
              fontSize="0.9rem"
              lineHeight="100%"
              letterSpacing="0%"
              color="#0F172A">
                Dividers
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


        <VStack
          w="98%"
          alignItems="stretch"
          spacing="1rem"
          borderWidth="1px"
          borderColor="#E2E8F0"
          borderRadius="1rem"
          px="0.9rem"
          py="1rem"
          bg="#FFFFFF"
          bgColor="#F8FAFC"
        >
          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.84rem"
            color="#0F172A"
          >
            Horizontal divider
          </Text>
          <HStack w="100%" spacing="0.7rem" alignItems="center">
            <Divider flex="1" borderColor="#E2E8F0" />
          </HStack>

          <Text
            fontFamily="Geist, sans-serif"
            fontWeight="700"
            fontSize="0.84rem"
            color="#0F172A"
          >
            Vertical divider
          </Text>
          <HStack spacing="0.85rem" alignItems="stretch" w="fit-content">
            <Box
              minW="5.6rem"
              minH="3.25rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              borderRadius="0.75rem"
              px="1.4rem"
              py="1.05rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#FFFFFF"
            >
              <Text
                fontFamily="Geist, sans-serif"
                fontWeight="700"
                fontSize="0.78rem"
                color="#0F172A"
              >
                Left
              </Text>
            </Box>
            <Divider orientation="vertical" h="3.5rem" borderColor="#E2E8F0" />
            <Box
              minW="5.6rem"
              minH="3.25rem"
              borderWidth="1px"
              borderColor="#E2E8F0"
              borderRadius="0.75rem"
              px="1.4rem"
              py="1.05rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="#FFFFFF"
            >
              <Text
                fontFamily="Geist, sans-serif"
                fontWeight="700"
                fontSize="0.78rem"
                color="#0F172A"
              >
                Right
              </Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>

      {/*------------------------------------------MODAL---------------------------------------- */}
      <VStack
        bgColor="white"
        borderRadius="0.75rem"
        borderColor="#E2E8F0"
        borderWidth="1px"
        w="90%"
        minH="15.9rem"
        mt="1.5rem"
        alignItems="center"
        justifyContent="start"
        px="0.5rem"
        pb="1rem"
      >
        <HStack w="98%" mt="1rem" mb="1.5rem"> 
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
        <Box
          w="98%"
          minH="11.75rem"
          bg="linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 100%)"
          boxShadow="inset 0 0 0 1px rgba(255,255,255,0.72)"
          px={{ base: "1rem", md: "2rem" }}
          py={{ base: "1.25rem", md: "1.75rem" }}
          position="relative"
          overflow="hidden"
        >
          <VStack position="relative" spacing="0.9rem" align="stretch">
            <Button
              alignSelf="center"
              h="2.5rem"
              px="1.2rem"
              bg="#2563EB"
              color="white"
              borderRadius="0.55rem"
              fontFamily="Geist, sans-serif"
              fontWeight="600"
              fontSize="0.82rem"
              _hover={{ bg: "#1D4ED8" }}
              _active={{ bg: "#1E40AF" }}
              onClick={onPreviewModalOpen}
            >
              Open Modal
            </Button>

            <Modal isOpen={isPreviewModalOpen} onClose={onPreviewModalClose} isCentered>
              <ModalOverlay bg="rgba(15, 23, 42, 0.12)" backdropFilter="blur(7px)" />
              <ModalContent
                maxW={{ base: "calc(100vw - 2rem)", md: "29rem" }}
                borderRadius="1rem"
                borderWidth="1px"
                borderColor="#E5E7EB"
                boxShadow="0 20px 60px rgba(15, 23, 42, 0.18)"
                px="0"
                py="0"
              >
                <ModalHeader
                  fontFamily="Geist, sans-serif"
                  fontWeight="700"
                  fontSize="1.5rem"
                  color="#1E293B"
                  px="1.5rem"
                  pt="1.35rem"
                  pb="0.65rem"
                >
                  Modal is open
                </ModalHeader>
                <ModalCloseButton
                  top="1rem"
                  right="1rem"
                  color="#94A3B8"
                  borderRadius="full"
                  _hover={{ bg: "#F8FAFC", color: "#64748B" }}
                />
                <ModalBody px="1.5rem" pb="1.1rem">
                  <Text
                    fontFamily="Geist, sans-serif"
                    fontWeight="400"
                    fontSize="0.95rem"
                    lineHeight="1.65"
                    color="#475569"
                  >
                    Are you sure this modal is open? This action cannot be
                    undone and all associated data will be permanently removed.
                  </Text>
                </ModalBody>
                <ModalFooter px="1.5rem" pb="1.35rem" pt="0" gap="0.75rem">
                  <Button
                    flex="1"
                    h="2.75rem"
                    bg="white"
                    color="#1E293B"
                    borderWidth="1px"
                    borderColor="#E2E8F0"
                    borderRadius="0.55rem"
                    fontFamily="Geist, sans-serif"
                    fontWeight="600"
                    fontSize="0.92rem"
                    _hover={{ bg: "#F8FAFC" }}
                    onClick={onPreviewModalClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    flex="1"
                    h="2.75rem"
                    bg="#F44444"
                    color="white"
                    borderRadius="0.55rem"
                    fontFamily="Geist, sans-serif"
                    fontWeight="600"
                    fontSize="0.92rem"
                    _hover={{ bg: "#E23636" }}
                    _active={{ bg: "#CF2626" }}
                    onClick={onPreviewModalClose}
                  >
                    Confirm
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </VStack>
        </Box>
      </VStack>
      {/*------------------------------------------TABS---------------------------------------- */}
      <VStack bgColor="white" borderRadius="0.75rem" borderColor="#E2E8F0" borderWidth="1px" w="90%" mb="7rem" mt="1.5rem" alignItems="center" justifyContent="center" px="0.5rem" pb="0.75rem">
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
        <Box
          w="98%"
          px={{ base: "0.9rem", md: "1.1rem" }}
          py="0.95rem"
        >
          <Tabs variant="unstyled" defaultIndex={0}>
            <TabList
              borderBottomWidth="1px"
              borderColor="#E2E8F0"
              gap={{ base: "1.5rem", md: "3rem" }}
              overflowX="auto"
              overflowY="hidden"
              sx={{
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {[
                { label: "Overview", heading: "Overview content", body: "This is the content for the active tab. You can switch tabs to update the panel below." },
                { label: "Settings", heading: "Settings content", body: "Manage preferences, access, and workspace configuration from this section." },
                { label: "Activity", heading: "Activity content", body: "Track recent changes, updates, and workspace events in one place." },
              ].map((tab) => (
                <Tab
                  key={tab.label}
                  px="0"
                  pb="0.9rem"
                  pt="0.05rem"
                  borderBottomWidth="2px"
                  borderColor="transparent"
                  borderRadius="0"
                  color="#64748B"
                  fontFamily="Geist, sans-serif"
                  fontWeight="600"
                  fontSize="0.94rem"
                  whiteSpace="nowrap"
                  _hover={{ color: "#0F172A" }}
                  _selected={{ color: "#0F172A", borderColor: "#2563EB" }}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel px="0" pt="1.35rem" pb="0.4rem">
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="700"
                  fontSize="0.94rem"
                  color="#0F172A"
                  mb="0.6rem"
                >
                  Overview content
                </Text>
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="400"
                  fontSize="0.86rem"
                  lineHeight="1.55"
                  color="#64748B"
                  maxW="41rem"
                >
                  This is the content for the active tab. You can switch tabs to update the panel below.
                </Text>
              </TabPanel>
              <TabPanel px="0" pt="1.35rem" pb="0.4rem">
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="700"
                  fontSize="0.94rem"
                  color="#0F172A"
                  mb="0.6rem"
                >
                  Settings content
                </Text>
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="400"
                  fontSize="0.86rem"
                  lineHeight="1.55"
                  color="#64748B"
                  maxW="41rem"
                >
                  Manage preferences, access, and workspace configuration from this section.
                </Text>
              </TabPanel>
              <TabPanel px="0" pt="1.35rem" pb="0.4rem">
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="700"
                  fontSize="0.94rem"
                  color="#0F172A"
                  mb="0.6rem"
                >
                  Activity content
                </Text>
                <Text
                  fontFamily="Geist, sans-serif"
                  fontWeight="400"
                  fontSize="0.86rem"
                  lineHeight="1.55"
                  color="#64748B"
                  maxW="41rem"
                >
                  Track recent changes, updates, and workspace events in one place.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
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