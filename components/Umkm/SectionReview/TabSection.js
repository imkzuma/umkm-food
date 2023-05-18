import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Avatar, Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import ShowReply from "./ShowReply";

export default function TabReview({ detail }){
    const [review, setReview] = useState([]);
    const [isLiked, setIsLiked] = useState([]);
    const [isDisliked, setIsDisliked] = useState([]);

    useLayoutEffect(() => {
        setReview(detail);
        const newLike = detail.map((item) => {
            return { id: item.id, like: item.like, liked: false }
        })
        setIsLiked(newLike);

        const newDislike = detail.map((item) => {
            return { id: item.id, dislike: item.dislike, disliked: false }
        })
        setIsDisliked(newDislike);

    }, [detail]);

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

    const PrintStar = (starCount) => {
        const yellowStars = Array(starCount).fill().map((_, id) => <Icon as={FaStar} key={`yellow-star-${id}`} color={'#F2C94C'} />);
        const greyStars = Array(5 - starCount).fill().map((_, id) => <Icon as={FaStar} key={`grey-star-${id}`} color={'#D9D9D9'} />);
        return [...yellowStars, ...greyStars];
    }

    if(!review || review.length === 0){
        return(
            <Flex 
                justifyContent={'center'} 
                alignItems={'center'} 
                minH = {'300px'} 
                w = {'full'}
            >
                <Text color = {'#909090'}>
                    Belum ada review
                </Text>
            </Flex>
        )
    }

    return(
        <Accordion 
            allowMultiple
            border={'transparent'}
            w = {'full'}
            py = {10} 
        >
            <Stack border={'transparent'} spacing = {5}>
                {review.map((item, index) => (
                    <AccordionItem key = {index}>
                        {({ isExpanded}) => (
                            <>
                                <Box  
                                    w = {'full'}
                                    border = {'1px solid #E8E8E8'}
                                    rounded = {'2xl'}
                                    p = {5}
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
                                                    <Flex gap = {1} alignItems={'center'}>
                                                        {PrintStar(item.star)}                     
                                                    </Flex>
                                                </Stack>
                                            </Stack>
                                        </Flex>
                                        <Text
                                            color = {'#909090'}
                                            lineHeight={1.8}
                                        >
                                            {item.review}
                                        </Text>
                                        <Stack 
                                            direction = {{ base: 'column', md: 'row' }} 
                                            justifyContent={{ base: 'start', md:'space-between' }} 
                                            alignItems={{ base: 'start', md:'center'}}
                                        >
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
                                                            like.id === item.id ? like.like : ''
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
                                                            dislike.id === item.id ? dislike.dislike : ''
                                                        ))}
                                                    </Text>
                                                </Flex>
                                            </Stack>
                                            <Stack direction={'row'} spacing = {-2} alignItems={'center'}>
                                                {item.replied !== null ? (
                                                    <AccordionButton>
                                                        <Box
                                                            border = {'1px solid #E52535'}
                                                            color = {'#E52535'} 
                                                            px = {7}
                                                            py = {2}
                                                            rounded={'full'}
                                                            transition={'all .3s ease'}
                                                            _hover = {{ bg: '#E52535', color: 'white' }}
                                                        >
                                                            {isExpanded ? 'Sembunyikan Balasan' : 'Lihat Balasan'}
                                                        </Box>
                                                    </AccordionButton>
                                                ):( null )}
                                                
                                                <Button 
                                                    bg={'#E52535'} 
                                                    color = {"white"} 
                                                    rounded = {'full'}
                                                    px = {7}
                                                    py = {2}
                                                    _hover = {{ bg: '#E52535' }}
                                                >
                                                    Balas
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <AccordionPanel px = {0}>
                                    <ShowReply data = {item.replied} />
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))}
            </Stack>
        </Accordion>
    )
}