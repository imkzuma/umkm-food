import { Box, Button, Divider, Flex, Grid, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import SideHeroAuth from "../SideHero";

import { FcGoogle } from "react-icons/fc";

import FormLogin from "../Login/FormLogin";
import FormRegister from "./FormRegister";

export default function RegisterComponents(){
    return(
        <Grid 
            templateColumns = {{ lg: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }}  
            alignItems={{ base: 'start', lg: 'center' }}
            gap = {'8rem'}
        >
            <Flex justifyContent={'end'} display = {{ base: "none", lg: "flex" }}>
                <SideHeroAuth
                    title = "Satisfy Your Hunger with Us"
                    paragraph = "Register now and enjoy the convenience of ordering food from the restaurant of your choice."
                    image = "/img/register.png"
                />
            </Flex>

            <Flex justifyContent={{lg:'start', md: 'center'}}>
                <Stack 
                    w = {{base: "full", md: '450px'}} 
                    spacing = {7} 
                    border={'1px solid #F0F3F7'} 
                    px={{
                        base: 3, md: 10
                    }} 
                    py = {8} 
                    rounded={'md'}
                >
                    <Stack textAlign={'center'}>
                        <Text color = {"#40444E"} fontSize={'25px'} fontWeight={'700'}>
                            Register
                        </Text>
                        <Text color = {"#40444E"} fontWeight={'500'}>
                            Alredy have an account? <Link href = {'/auth/login'} color = {"#E42535"}>Login</Link>
                        </Text>
                    </Stack>

                    <Button
                            variant={'outline'}
                            pos = {'relative'}
                            borderColor={"#BFC9D9"}
                            py = {6}
                            rounded = {'xl'}
                        >
                        <Icon 
                            as = {FcGoogle}
                            pos = {'absolute'}
                            left = {'2rem'}
                            fontSize = {'25px'}
                        />
                        <Text color = {'#525867'}>
                            Google
                        </Text>
                    </Button>

                    <HStack>
                        <Divider bg = {'#0000001F'} h = {'1px'} />
                        <Text color = {'#AAB4C8'} whiteSpace="nowrap" px = {2}>
                            or register with
                        </Text>
                        <Divider bg = {'#0000001F'} h = {'1px'} />
                    </HStack>
                    
                    <FormRegister />
                </Stack>
            </Flex>
        </Grid>
    )
}