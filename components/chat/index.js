import { Button, Icon, Menu, MenuButton, MenuList, MenuItem, Stack, Avatar, Text, MenuGroup, Flex, InputGroup, Input, InputRightElement } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { BsFillChatRightFill, BsChevronLeft } from 'react-icons/bs';

export default function ChatComponent(){
    const [chatOpen, setChatOpen] = useState(false);
    const [sendChat, setSendChat] = useState('');
    
    const inputRef = useRef(null);

    const handleBlurMessage = () =>{
        inputRef.current.focus();
    }
    const handleSendMessage = (e) =>{
        e.preventDefault();
        setSendChat('');
        inputRef.current.blur();
    }

    return(
        <Menu isLazy closeOnSelect={false}>
            <MenuButton 
                as = {Button}
                bg = {'#E52535'} color = {'white'}
                boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
                _hover = {{
                    filter: 'brightness(0.8)'
                }}
                _active={{
                    bg: '#E52535'
                }}
                minW = {'50px'} minH = {"50px"}
                rounded = {'full'}
            >
                <Icon as = {BsFillChatRightFill} />
            </MenuButton>
            <MenuList
                overflow={'auto'}
                minH = {'500px'} maxH = {'500px'}
                minW = {{base:'350px', md:'400px'}} maxW = {{base:'350px', md:'400px'}}
            >
                <MenuGroup 
                    title = {<Icon as = {BsChevronLeft} />} 
                    as = {Button} 
                    p = {'0'} pb = {3}
                    variant = {'unstyled'} 
                    fontSize={'2xl'} fontWeight={'bold'} 
                    display={chatOpen?'block':'none'} 
                    onClick={() => setChatOpen(false)} 
                >
                    <MenuItem display = {chatOpen?'block':'none'} pos = {'relative'}>
                        <Stack direction = {'row'} alignItems={'center'}>
                            <Avatar size = {'sm'} name = {'test'} />
                            <Text>
                                TEST
                            </Text>
                        </Stack>
                        <form onSubmit={(e) => handleSendMessage(e) }>
                            <Flex
                                pos = {'fixed'} right = {2} bottom = {2} left = {2}
                                alignItems={'center'}
                            >
                                <InputGroup size = "md">
                                    <Input 
                                        type = {'text'} 
                                        placeholder = {'Type a message'} 
                                        onChange = {(e) => setSendChat(e.target.value)} 
                                        onBlur={ handleBlurMessage }
                                        value = { sendChat }
                                        ref = { inputRef }
                                        pr='4.5rem'
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button 
                                            bg = {'blue.400'}
                                            color = {'white'}
                                            _hover = {{ bg: 'blue.500' }}
                                            size='sm' 
                                            onClick={(e) => handleSendMessage(e)}
                                        >
                                            Send
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </Flex>
                        </form>
                    </MenuItem>
                </MenuGroup>
                <MenuGroup display={!chatOpen?'block':'none'} title = 'Chat' fontSize={'2xl'} fontWeight={'bold'} pb = {3}>
                    {Array(10).fill(0).map((_,index) =>{
                        return(
                            <MenuItem key = {index}
                                py = {4}
                                _hover = {{
                                    bg: "blue.100"
                                }}
                                borderTop={'1px solid #E8E8E8'}
                                onClick={() => setChatOpen(true)}
                                display={!chatOpen?'block':'none'}
                            >
                                <Stack direction = "row" alignItems={'center'}>
                                    <Avatar size = {'sm'} name = {index + 'test'} />
                                    <Text>
                                        TEST {index}
                                    </Text>
                                </Stack>
                            </MenuItem>
                        )
                    })}
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}