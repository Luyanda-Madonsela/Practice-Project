"use client";

import React, { useState } from 'react';
import { 
  Button, 
  HStack, 
  Spacer, 
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  InputGroup,
  InputRightElement,
  Divider,
  Center
} from '@chakra-ui/react';

type ModalAction = 'Login' | 'Sign Up' | '';

export default function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalType, setModalType] = useState<ModalAction>('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleOpenModal = (type: ModalAction) => {
        setModalType(type);
        setShowPassword(false); 
        setShowConfirmPassword(false);
        onOpen();
    };

    return (
        <>
            {/*------------------------------------ Navigation Bar-------------------------------------- */}
            <HStack as="nav" spacing={4} h="4.5rem" w="full" bg="white" border="md" borderWidth="1px" borderColor="red.500" color="black" justifyContent="center" alignItems="center" position="fixed" top={0} left={0} right={0} zIndex={999}>
                <HStack as="div" w="90%">
                    <HStack borderWidth="1px" borderColor="red.500" h="100%">
                        <Text borderWidth="1px" borderColor="red.500" fontSize="lg" fontWeight="bold"> Logo </Text>
                        <Text fontSize="lg" fontWeight="bold"> Practice Project </Text>
                    </HStack>
                    <Spacer />
                    <Button colorScheme="blue" variant="ghost">Dashboard</Button>
                    
                    <Button colorScheme="blue" variant="ghost" onClick={() => handleOpenModal('Login')}>
                        Login
                    </Button>
                    <Button colorScheme="blue" variant="ghost" onClick={() => handleOpenModal('Sign Up')}>
                        Sign Up
                    </Button>
                </HStack>
            </HStack>
            {/*-------------------------------------------------------------------------------------------- */}
            <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
                <ModalOverlay />
                <ModalContent pb={4}>
                    <ModalHeader fontSize="2xl" fontWeight="bold">
                        {modalType === 'Login' ? 'Welcome Back' : 'Create Account'}
                    </ModalHeader>
                    <ModalCloseButton mt={2} />
                    
                    <ModalBody>
                        {/* ---------------- LOGIN FORM ---------------- */}
                        {modalType === 'Login' && (
                            <VStack spacing={4} align="stretch">
                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Email Address</FormLabel>
                                    <Input type="email" placeholder="name@company.com" focusBorderColor="blue.500" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Password</FormLabel>
                                    <InputGroup>
                                        <Input 
                                            type={showPassword ? 'text' : 'password'} 
                                            placeholder="••••••••" 
                                            focusBorderColor="blue.500" 
                                        />
                                        <InputRightElement w="4.5rem">
                                            <Button h="1.75rem" size="sm" variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <HStack justify="space-between" w="full" pt={1}>
                                    <Checkbox colorScheme="blue" size="md">
                                        <Text fontSize="sm">Remember me</Text>
                                    </Checkbox>
                                    <Link color="blue.500" fontSize="sm" fontWeight="medium">
                                        Forgot password?
                                    </Link>
                                </HStack>

                                <Button colorScheme="blue" size="lg" w="full" mt={2}>
                                    Log In
                                </Button>

                                <Divider my={4} />

                                <Center>
                                    <Text fontSize="sm" color="gray.600">
                                        Don't have an account?{' '}
                                        <Link color="blue.500" fontWeight="semibold" onClick={() => handleOpenModal('Sign Up')}>
                                            Sign up
                                        </Link>
                                    </Text>
                                </Center>
                            </VStack>
                        )}

                        {/* ---------------- SIGN UP FORM ---------------- */}
                        {modalType === 'Sign Up' && (
                            <VStack spacing={4} align="stretch">
                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Full Name</FormLabel>
                                    <Input type="text" placeholder="Enter your name" focusBorderColor="blue.500" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Email Address</FormLabel>
                                    <Input type="email" placeholder="name@company.com" focusBorderColor="blue.500" />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Password</FormLabel>
                                    <InputGroup>
                                        <Input 
                                            type={showPassword ? 'text' : 'password'} 
                                            placeholder="Create a password" 
                                            focusBorderColor="blue.500" 
                                        />
                                        <InputRightElement w="4.5rem">
                                            <Button h="1.75rem" size="sm" variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize="sm" fontWeight="medium">Confirm Password</FormLabel>
                                    <InputGroup>
                                        <Input 
                                            type={showConfirmPassword ? 'text' : 'password'} 
                                            placeholder="Confirm your password" 
                                            focusBorderColor="blue.500" 
                                        />
                                        <InputRightElement w="4.5rem">
                                            <Button h="1.75rem" size="sm" variant="ghost" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <HStack w="full" pt={1}>
                                    <Checkbox colorScheme="blue" size="md">
                                        <Text fontSize="sm">Grant Admin Role ⓘ</Text>
                                    </Checkbox>
                                </HStack>

                                <Button colorScheme="blue" size="lg" w="full" mt={2}>
                                    Create Account
                                </Button>

                                <Divider my={4} />

                                <Center>
                                    <Text fontSize="sm" color="gray.600">
                                        Already have an account?{' '}
                                        <Link color="blue.500" fontWeight="semibold" onClick={() => handleOpenModal('Login')}>
                                            Log in
                                        </Link>
                                    </Text>
                                </Center>
                            </VStack>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}