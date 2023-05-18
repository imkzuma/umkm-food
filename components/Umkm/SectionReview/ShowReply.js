import { Avatar, Box, Button, Flex, Icon, SlideFade, Stack, Text } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

export default function ShowReply({ data }){
    const [repliedData, setRepliedData] = useState([]);
    const [isLiked, setIsLiked] = useState([]);
    const [isDisliked, setIsDisliked] = useState([]);

    useLayoutEffect(() => {
        !data || data.length === 0 ? null : setRepliedData(data)
        
        if(data!==null && data.length!==0){
            const newLike = data.map((item) => {
                return { id: item.id, like: item.like, liked: false }
            })
            setIsLiked(newLike);
    
            const newDislike = data.map((item) => {
                return { id: item.id, dislike: item.dislike, disliked: false }
            })
            setIsDisliked(newDislike);
        }
    }, [data]);

    const BtnLiked = (key) => {
        if(isDisliked[key - 1].disliked){
            setIsDisliked((prev) => prev.map((item) =>
                item.id === key ? {
                    ...item,
                    disliked: !item.disliked,
                    dislike: item.disliked ? item.dislike - 1 : item.dislike + 1
                } : item
            ));
        }
        setIsLiked((prev) => prev.map((item) =>
                item.id === key ? { 
                    ...item,
                    liked: !item.liked,
                    like: item.liked ? item.like - 1 : item.like + 1
                } : item
            )
        );
    }

    const BtnDisliked = (key) => {
        if(isLiked[key - 1].liked){
            setIsLiked((prev) => prev.map((item) =>
                item.id === key ? {
                    ...item,
                    liked: !item.liked,
                    like: item.liked ? item.like - 1 : item.like + 1
                } : item
            ));
        }
        setIsDisliked((prev) => prev.map((item) =>
            item.id === key ? {
                ...item,
                disliked: !item.disliked,
                dislike: item.disliked ? item.dislike - 1 : item.dislike + 1
            } : item
        ))
    }

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
                                    <Button variant={'unstyled'} p = {0} onClick = {() => BtnLiked(item.id)}>
                                        {isLiked.map((like) => (
                                            like.id === item.id 
                                                ? like.liked 
                                                    ? <Icon as={AiFillLike} fontSize={'20px'} key = {like.id} /> 
                                                    : <Icon as={AiOutlineLike} fontSize={'20px'} key = {like.id} /> 
                                                : ''
                                        ))}
                                    </Button>
                                    <Text fontSize={'14px'} color = {'#909090'}>
                                        {isLiked.map((like) => (
                                            like.id === item.id ? like.like > 0 ? like.like : '' : ''
                                        ))}
                                    </Text>
                                </Flex>
                                <Flex alignItems={'center'} gap = {0}>
                                    <Button variant={'unstyled'} p = {0} onClick = {() => BtnDisliked(item.id)}>
                                        {isDisliked.map((dislike) => (
                                            dislike.id === item.id
                                                ? dislike.disliked 
                                                    ? <Icon as={AiFillDislike} fontSize={'20px'} key = {dislike.id} />
                                                    : <Icon as={AiOutlineDislike} fontSize={'20px'} key = {dislike.id} />
                                                : ''
                                        ))}
                                    </Button>
                                    <Text fontSize={'14px'} color = {'#909090'}>
                                        {isDisliked.map((dislike) => (
                                            dislike.id === item.id ? dislike.dislike > 0 ? dislike.dislike : '' : ''
                                        ))}
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