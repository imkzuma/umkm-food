import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export default function HeroComponent(){
    return(
        <Box p = {'5px'}>
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                w = {'full'}
                h = {'50vh'}
                borderRadius={'20px'}
                bgImage={
                    'url(/img/landing/hero/bg.png)'
                }
                bgSize={'cover'}
                bgPosition={'center center'}
            >
                <Stack direction = {'column'} textAlign={'center'} maxW={'500px'}>
                    <Text fontSize={'5xl'}>
                        LOGO
                    </Text>
                    <Text fontSize = {'40px'} color = "white" fontWeight={'600'}>
                        Hungry? Just Order it
                    </Text>
                    <Text fontSize={'17px'} fontWeight={'400'} color = "white">
                        Order your favorite meals here, on our web. Same fast delivery. Countless restos to try. 
                        Enjoy dining from home.
                    </Text>
                </Stack>
            </Flex>
        </Box>
    )
}