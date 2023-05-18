import { LogoOnlyColored } from "@/components/Logo";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

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
                <Stack 
                    direction = {'column'} 
                    justifyContent={'center'}
                    alignItems={'center'} 
                    textAlign={'center'} 
                    maxW={{md:'600px'}}
                    spacing = {4}
                    px = {{
                        base: '15px',
                        md: 0
                    }}
                >
                    <LogoOnlyColored boxSize={'4rem'} />

                    <Heading 
                        fontWeight={'bold'} 
                        size={{ base: 'xl', md: '2xl' }} 
                        color = "white"
                    >
                        Lapar? Pesan Saja Disini
                    </Heading>

                    <Text 
                        fontSize={{ base: 'md', md: 'lg' }} 
                        fontWeight={'400'} 
                        color = "white"
                    >
                        Pesan makanan favorit Anda di sini. Pengiriman cepat. Resto yang tak terhitung jumlahnya untuk dicoba.
                        Nikmati makan dari rumah.
                    </Text>
                </Stack>
            </Flex>
        </Box>
    )
}