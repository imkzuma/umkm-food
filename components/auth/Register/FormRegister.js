import { Button, FormControl, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack, transition } from "@chakra-ui/react";
import { useState } from "react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { BiUser, BiLock } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

export default function FormRegister(){
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [phone, setPhone] = useState("");

    return(
        <form>
            <Stack spacing={7}>
                <VStack gap = {1}>
                    <FormControl>
                        <InputGroup size = {'lg'}>
                            <InputLeftElement alignItems={'center'} justifyContent={'center'} px = {'2.5rem'}>
                                <Icon as = {BiUser} color = {'#BFC9D9'} fontSize={'25px'} />
                            </InputLeftElement>
                            <Input 
                                type = "text"
                                placeholder="Full Name"
                                value = {fullName}
                                onChange = {(e) => setFullName(e.target.value)}
                                fontSize={'16px'}
                                pl = {'4rem'}
                                rounded = {'xl'}
                                _placeholder = {{color : '#AAB4C8'}}
                                required
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup size = {'lg'}>
                            <InputLeftElement alignItems={'center'} justifyContent={'center'} px = {'2.5rem'}>
                                <Icon as = {BiUser} color = {'#BFC9D9'} fontSize={'25px'} />
                            </InputLeftElement>
                            <Input 
                                type = "text"
                                placeholder="Username"
                                value = {username}
                                onChange = {(e) => setUsername(e.target.value)}
                                fontSize={'16px'}
                                pl = {'4rem'}
                                rounded = {'xl'}
                                _placeholder = {{color : '#AAB4C8'}}
                                required
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup size = {'lg'}>
                            <InputLeftElement alignItems={'center'} justifyContent={'center'} px = {'2.5rem'}>
                                <Icon as = {BsEnvelope} color = {'#BFC9D9'} fontSize={'25px'} />
                            </InputLeftElement>
                            <Input 
                                type = "text"
                                placeholder="Email"
                                value = {email}
                                onChange = {(e) => setEmail(e.target.value)}
                                fontSize={'16px'}
                                pl = {'4rem'}
                                rounded = {'xl'}
                                _placeholder = {{color : '#AAB4C8'}}
                                required
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup size = {'lg'}>
                            <InputLeftElement alignItems={'center'} justifyContent={'center'} px = {'2.5rem'}>
                                <Icon as = {BiLock} color = {'#BFC9D9'} fontSize={'25px'} />
                            </InputLeftElement>
                            <Input
                                pl='4rem'
                                value = {password}
                                type={show ? 'text' : 'password'}
                                onChange = {(e) => setPassword(e.target.value)}
                                fontSize={'16px'}
                                rounded = {'xl'}
                                placeholder='Password'
                                _placeholder = {{color : '#AAB4C8'}}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button variant = {'unstyled'} h='1.75rem' size='sm' onClick={() => setShow(!show)}>
                                {show ? (
                                    <ViewIcon color = {'#BFC9D9'} fontSize={'20px'} />
                                ):(
                                    <ViewOffIcon color = {'#BFC9D9'} fontSize={'20px'} />
                                )}  
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup size = {'lg'}>
                            <InputLeftElement alignItems={'center'} justifyContent={'center'} px = {'2.5rem'}>
                                <Icon as = {AiOutlinePhone} color = {'#BFC9D9'} fontSize={'25px'} />
                            </InputLeftElement>
                            <Input 
                                type = 'number'
                                placeholder="Phone Number"
                                value = {phone}
                                onChange = {(e) => setPhone(e.target.value)}
                                fontSize={'16px'}
                                pl = {'4rem'}
                                rounded = {'xl'}
                                _placeholder = {{color : '#AAB4C8'}}
                                required
                            />
                        </InputGroup>
                    </FormControl>
                </VStack>
                <Button
                    isDisabled = {fullName === "" || username === "" || email === "" || password === "" || phone === ""}
                    _disabled={{ 
                        bg: '#E4EBF5',
                        color: '#AAB4C8',
                        cursor: 'not-allowed',
                        _hover: {
                            bg: '#E4EBF5',
                            color: '#AAB4C8',
                        }
                    }}
                    _hover={{
                        filter: 'brightness(0.85)',
                        transition: 'all 0.2s ease-in'
                    }}
                    transition={'all 0.2s ease-in'}
                    w = {"full"}
                    rounded = {'xl'}
                    h = {'56px'}
                    bg = {'#E52535'}
                    color = {'white'}
                    fontWeight={'700'}
                >
                    <Text>
                        Login
                    </Text>
                </Button>
            </Stack>
        </form>
    )
}