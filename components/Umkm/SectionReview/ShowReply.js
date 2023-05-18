import { Avatar, Box, Button, Flex, Icon, SlideFade, Stack, Text } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

export default function ShowReply({ data }){
    const [repliedData, setRepliedData] = useState([])

    useLayoutEffect(() => {
        !data || data.length === 0 ? null : setRepliedData(data)

    }, [data])

    if (!data || data.length === 0) {
        return(
            <Flex justifyContent={'end'}>
                <Box
                    w = {{ base: "full", lg: '95%' }}
                    border = {'1px solid #E8E8E8'}
                    rounded = {'2xl'}
                    p = {5}
                    mt = {5}
                >
                    <Text
                        color = {'#909090'}
                        lineHeight={1.8}
                    >
                        Tidak ada balasan
                    </Text>
                </Box>
            </Flex>
        )
    }
    
    return(
        <>
            {repliedData.map((item, index) => (
                <Flex justifyContent={'end'} key = {index}>
                    <Box
                        w = {{ base: "full", lg: '95%' }}
                        border = {'1px solid #E8E8E8'}
                        rounded = {'2xl'}
                        p = {5}
                        mt = {5}
                    >
                        <Stack spacing = {5}>
                            <Flex alignItems={'center'} justifyContent={'space-between'} >
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing = {5}>
                                    <Avatar name = {item.name} h = {'71px'} w = {'71px'} />
                                    <Stack spacing = {1}>
                                        <Text color = {"#909090"} fontSize={'14px'}>
                                            {item.date_review}
                                        </Text>
                                        <Text fontWeight={'600'}>
                                            {item.name}
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Flex>
                            <Text
                                color = {'#909090'}
                                lineHeight={1.8}
                            >
                                {item.reply}
                            </Text>
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Stack direction={'row'} spacing = {5}>
                                    <Flex alignItems={'center'} gap = {0}>
                                        <Button variant={'unstyled'} p = {0}>
                                            <Icon as={AiOutlineLike} fontSize={'20px'}  />
                                        </Button>
                                        <Text fontSize={'14px'} color = {'#909090'}>
                                            {item.like}
                                        </Text>
                                    </Flex>
                                    <Flex alignItems={'center'} gap = {0}>
                                        <Button variant={'unstyled'} p = {0}>
                                            <Icon as={AiOutlineDislike} fontSize={'20px'}  />
                                        </Button>
                                        <Text fontSize={'14px'} color = {'#909090'}>
                                            {item.dislike}
                                        </Text>
                                    </Flex>
                                </Stack>
                                <Stack direction={'row'} spacing = {5}>
                                    <Button 
                                        bg={'#E52535'} 
                                        color = {"white"} 
                                        rounded = {'full'}
                                        _hover = {{ bg: '#E52535' }}
                                    >
                                        Balas
                                    </Button>
                                </Stack>
                            </Flex>
                        </Stack>
                    </Box>
                </Flex>
            ))}
        </>       
    )
}