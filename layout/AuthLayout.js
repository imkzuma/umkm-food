import { Box, Flex, Text } from "@chakra-ui/react";

export default function AuthLayout({ children }){
    return(
        <Flex
            minH = {'100vh'}
            minW = {'full'}
            justifyContent={'center'}
            alignItems={{md: 'center'}}
        >
            <Box
                pos = {'absolute'}
                top = {{base: 0, md: '30px'}}
            >
                <Text>Logo</Text>
            </Box>
            
            <Box
                w = {"full"}
                px = {{ md: '138px', base: '10px' }}
                py = {{ md: '0px', base: '50px' }}
            >
                {children}
            </Box>

            <Box
                pos = {'absolute'}
                bottom = {{base: 1, md: '30px'}}
            >
                <Text color = {"#6D7588"} fontWeight={'500'}>
                    &copy; 2023 • <Text as = {'span'} color = {"#E52535"}>All Right Reserved</Text>
                </Text>
            </Box>

        </Flex>
    )
}