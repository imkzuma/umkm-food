import { 
    Box, Flex, Icon, Menu, useDisclosure, 
    Stack, IconButton, Divider, Link, Text, Button,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { BsGeoAltFill } from 'react-icons/bs';

import UserMenuComponents from "./UserMenu";
import NotificationMenu from "./NotificationMenu";
import { useState } from "react";

const ModalPengantaran = ({ isOpen, onClose }) => {
    return(
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, possimus?
                </ModalBody>

                <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showModal, setShowModal] = useState(false);

    return(
        <Box 
            bg = {'white'} 
            borderBottom = { '1px solid #E8E8E8' }
            px = {{ md: '138px', base: '5px' }}
            position={'sticky'} top={'0'} zIndex={'10'}
        >
            <ModalPengantaran isOpen={showModal} onClose={() => setShowModal(false)} />
            
            <Flex
                h = {'80px'}
                alignItems = {'center'}
                justifyContent = {'space-between'}
            >
                <Flex alignItems = {'center'}>
                    <IconButton
                        size = {'md'}
                        bg = {'white'}
                        icon = { isOpen ? <CloseIcon /> : <HamburgerIcon /> }
                        aria-label = {'open-menu'}
                        display = {{ md: 'none' }}
                        onClick = { isOpen ? onClose : onOpen }
                    />
                    <Box>Logo</Box>
                </Flex>

                <Flex 
                    alignItems={'center'}
                >
                    <Stack
                        direction = {'row'} 
                        alignItems={'center'}
                        spacing = {'22px'}
                    >
                        <Flex as = {Button} bg = {"red.100"} _hover = {{bg:'red.200'}} alignItems={'center'} gap = {2} onClick={() => setShowModal(true)}>
                            <Flex alignItems={'center'} gap = {1}>
                                <Icon as = {BsGeoAltFill} 
                                    m="0"
                                    fontSize = "xl" 
                                    color = {'#727272'}
                                    cursor = {'pointer'}
                                    _hover = {{
                                        color : "gray.600",
                                        transition: "0.3s ease-in"
                                    }} 
                                />
                                <Text display = {{ base: 'none', md: 'block' }} fontWeight={'semibold'}>
                                    Antar ke: 
                                </Text>
                            </Flex>
                            <Text display = {{ base: 'none', md: 'block' }}>
                                Pilih Lokasi Antar
                            </Text>
                            
                        </Flex>

                        <Link href = "#" display={'flex'}>
                            <Icon as = {FaShoppingCart} 
                                m="0"
                                fontSize = "xl" 
                                color = {'#727272'}
                                cursor = {'pointer'}
                                _hover = {{
                                    color : "gray.600",
                                    transition: "0.3s ease-in"
                                }} 
                            />
                        </Link>

                        <Menu isLazy>
                            <NotificationMenu />
                        </Menu>
                        
                        <Divider 
                            orientation = 'vertical' 
                            size = {2} h = {8}  
                            border = {'1px solid #727272'}
                        />
                        <Menu isLazy>
                            <UserMenuComponents />
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}