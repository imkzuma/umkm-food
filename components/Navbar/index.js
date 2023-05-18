import { 
    Box, Flex, Icon, Menu, useDisclosure, 
    Stack, IconButton, Divider, Link, Text, Button,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, FormControl, FormLabel, Input
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { BsGeoAltFill } from 'react-icons/bs';

import UserMenuComponents from "./UserMenu";
import NotificationMenu from "./NotificationMenu";
import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

const ModalPengantaran = ({ isOpen, onClose }) => {
    const [alamat, setAlamat] = useState('');

    useLayoutEffect(() => {
        if(localStorage.getItem('alamat') !== null){
            setAlamat(localStorage.getItem('alamat'));
        }

    }, []);

    const handleAlamat = () => {
        if(alamat !== ''){
            localStorage.setItem('alamat', alamat);
            onClose();
        }
    }
    return(
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Pilih Lokasi Antar
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl id="alamat">
                        <FormLabel>Alamat Pengantaran</FormLabel>
                        <Input type="text" value = {alamat} onChange = {(e) => setAlamat(e.target.value)} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAlamat}>
                    Submit
                </Button>
                <Button variant="outline" bg = {'red'} color = {'white'} _hover={{bg: 'red'}} onClick = {onClose}>
                    Cancel
                </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showModal, setShowModal] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const router = useRouter();

    return(
        <Box 
            bg = {'white'} 
            borderBottom = { '1px solid #E8E8E8' }
            px = {{ lg: '138px', md: '25px', base: '5px' }}
            position={'sticky'} top={'0'} zIndex={'10'}
        >
            <ModalPengantaran isOpen={showModal} onClose={() => setShowModal(false)} />
            
            <Flex
                h = {'80px'}
                alignItems = {'center'}
                justifyContent = {'space-between'}
            >
                <Flex alignItems = {'center'} gap = {{base: 2, lg: 7}}>
                    <IconButton
                        size = {'md'}
                        bg = {'white'}
                        icon = { isOpen ? <CloseIcon /> : <HamburgerIcon /> }
                        aria-label = {'open-menu'}
                        display = {{ lg: 'none' }}
                        onClick = { isOpen ? onClose : onOpen }
                    />
                    <Box>
                        <Image 
                            src = "/img/logo.png"
                            alt = "logo"
                        />
                    </Box>
                    <Link 
                        href = "/" 
                        display = {{ base: 'none', lg: 'block' }} 
                        _hover={{
                            textDecoration: "none"
                        }}
                    >
                        <Button
                            variant = {'unstyled'}
                            fontSize = {'14px'}
                            fontWeight = {'600'}
                            rounded={0}
                            borderBottom={router.pathname === '/' ? '1px solid red' : null}
                            color = {router.pathname === '/' ? 'red' : 'gray.900'}
                        >
                            Home
                        </Button>
                    </Link>
                </Flex>

                <Flex 
                    alignItems={'center'}
                >
                    <Stack
                        direction = {'row'} 
                        alignItems={'center'}
                        spacing = {'22px'}
                    >
                        <Flex as = {Button}
                            color = {"white"} 
                            bg = {"#E52535"} 
                            alignItems={'center'} 
                            gap = {2} 
                            _hover = {{bg:'#E52535'}} 
                            onClick={() => setShowModal(true)}
                        >
                            <Flex alignItems={'center'} gap = {1}>
                                <Icon as = {BsGeoAltFill} 
                                    m="0"
                                    fontSize = "xl" 
                                    cursor = {'pointer'}
                                />
                                <Text display = {{ base: 'none', lg: 'block' }} fontWeight={'semibold'}>
                                    Antar ke: 
                                </Text>
                            </Flex>
                            <Text display = {{ base: 'none', lg: 'block' }}>
                                {
                                    localStorage.getItem('alamat') !== null ? localStorage.getItem('alamat') : 'Pilih Lokasi'
                                }
                            </Text>
                        </Flex>

                        {/* <Link href = "#" display={'flex'}>
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
                        </Link> */}

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