import { Box, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function Footer(){
    return(
        <Box
            w = {'full'}
            bg = {'#E52535'}
            px = {{ md: '138px', base: '5px' }}
            py = {10}
        >
            <Grid
                gridTemplateColumns={'repeat(12, 1fr)'}
            >
                <GridItem
                    colSpan={{
                        base: 12,
                        lg: 6
                    }}
                >
                    <Stack color = {'white'} spacing = {7}>
                        <Flex gap = {16}>
                            <Text fontWeight={'700'} fontSize={'16px'}>
                                Privacy Policy
                            </Text>
                            <Text fontWeight={'700'} fontSize={'16px'}>
                                Terms of service
                            </Text>
                        </Flex>
                        <Text fontWeight={'300'} lineHeight={1.8}>
                            &copy;   2023 Food Ordering App | Thanks for using Food Ordering App. Our copyrights and trademarks 
                            are protected by intellectual property laws and registered in relevant institutions in Indonesia. 
                        </Text>
                    </Stack>
                </GridItem>

            </Grid>
        </Box>
    )
}