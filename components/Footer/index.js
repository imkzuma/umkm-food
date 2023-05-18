import { Box, Flex, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import { LogoOnlyWhite } from "../Logo";

export default function Footer(){
    return(
        <Box
            w = {'full'}
            bg = {'#E52535'}
            px = {{ lg: '138px', md: '25px', base: '5px' }}
            py = {10}
        >
            <Grid
                gridTemplateColumns={'repeat(12, 1fr)'}
                alignItems = {'center'}
            >
                <GridItem
                    colSpan={{
                        base: 12,
                        md: 8,
                        lg: 6
                    }}
                >
                    <Stack color = {'white'} spacing = {7} textAlign={{base: 'center', md: 'start'}}>
                        <Flex gap = {16} justifyContent={{base: 'center', md: 'start'}}>
                            <Text fontWeight={'700'} fontSize={'16px'}>
                                Privacy Policy
                            </Text>
                            <Text fontWeight={'700'} fontSize={'16px'}>
                                Terms of service
                            </Text>
                        </Flex>
                        <Text fontWeight={'300'} lineHeight={1.8}>
                            &copy;   2023 Food Ordering App | Terima kasih telah menggunakan Aplikasi Pemesanan Makanan. Hak cipta dan merek dagang kami dilindungi oleh undang-undang kekayaan intelektual dan terdaftar di lembaga terkait di Indonesia.
                        </Text>
                    </Stack>
                </GridItem>

                <GridItem 
                    colSpan={{
                        base: 12, 
                        md: 4,
                        lg: 6
                    }}
                >
                    <Flex justifyContent={{ base: 'center', md: 'end' }}>
                        <LogoOnlyWhite boxSize={'4rem'} />
                    </Flex>
                </GridItem>

            </Grid>
        </Box>
    )
}