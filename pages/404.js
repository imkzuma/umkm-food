import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function PageNotFound(){
    return(
        <>
            <Head>
                <title>404 | Page Not Found</title>
            </Head>
            <main>
                <Flex
                    minH = {'100vh'}
                    minW = {'full'}
                    justifyContent = {'center'}
                    alignItems = {'center'}
                >
                    <Stack alignItems={'center'} color = {'#353642'}>
                        <Image
                            src = "/img/404.png"
                            alt = "Page Not Found"
                        />
                        <Heading 
                            fontSize = {'92px'}
                            fontWeight={'700'}
                        >
                            404
                        </Heading>
                        <Text 
                            fontSize = {'28px'} 
                            fontWeight={'300'}
                        >
                            Page Not Found
                        </Text>
                        <Button
                            as = "a"
                            href = "/"
                            w = {'fit-content'}
                            bg = {'#E52535'}
                            color = {"white"}
                            _hover = {{
                                bg: '#E52535'
                            }}
                        >
                            Back to Home
                        </Button>
                    </Stack>
                </Flex>
            </main>
        </>
    )
}