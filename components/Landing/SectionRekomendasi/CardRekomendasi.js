import { Box, Button, Card, CardBody, Flex, GridItem, Heading, Icon, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";
export default function CardRekomendasi({ name, jenis, jarak, rating, image, href }){
    return(
        <GridItem as = "a"
            href = {href}
            bg = {'white'}
            gridColumn={{
                base: 'span 12',
                sm: 'span 6',
                lg: 'span 3',
                xl: 'span 3'
            }}
            _hover={{
                lg: {
                    boxShadow: '0px 12.5694px 40.2222px rgba(133, 161, 193, 0.35)',
                    transition: '0.3s ease'
                },
            }}
            transition={'0.3s ease'}
        >
            <Card 
                minH = {{ xl: '490px'}}
                border = {{ md: '1px solid #E8E8E8' }} 
                borderBottom={{ base: "1px solid #E8E8E8", lg: "none" }}
                borderRadius={{ md: '20px' }} 
                p = {0} pb = {{ base: 10, lg: 0 }}
                boxShadow = {'none'}
            >
                <CardBody 
                    p = {{ md: 2 }}
                >
                    <Stack
                        direction = {{
                            lg: 'column'
                        }}
                        spacing = {{ md: 5 }}
                        alignItems={'start'}
                    >
                        <Box 
                            pos = {'relative'} 
                            maxW = {{ 
                                base: "100px",
                                lg:'full'
                            }}
                        >
                            <Image 
                                src = {`/img/landing/section-rekomendasi/${image}`}
                                rounded = {'xl'}
                                objectFit={'cover'}
                                w = {{ 
                                    base: "100px",
                                    lg:'full'
                                }}
                                maxW = {{
                                    base: "100px",
                                    lg: "full"
                                }}
                                h = {{ 
                                    xl: '300px'
                                }}
                                minH = {{
                                    base: '125px',
                                    xl: 'none'
                                }}
                                fallback={<Skeleton h = {'300px'} />}
                                alt = {name}
                            />
                            <Button
                                display = {{
                                    base: "none",
                                    lg: "flex"
                                }}
                                pos = {'absolute'}
                                bottom = {3} right = {3}
                                bg = {'white'}
                                rounded = {'full'}
                                alignItems={'center'}
                                gap = {2}px = {5}
                            >
                                <Icon as = {FaStar} color = {'yellow.500'} />
                                <Text fontWeight={'bold'}> { rating } </Text>
                            </Button>
                        </Box>
                        <Stack 
                            px = {'10px'}
                            pt = {{ md: 2 }} 
                            spacing={{
                                base: 2,
                                lg: 3
                            }}
                        >
                            <Heading 
                                size={{
                                    base: 'sm',
                                    lg: 'md'
                                }}
                            >
                                { name }
                            </Heading>
                            <Text 
                                fontSize={{
                                    base: 'sm',
                                    lg: 'md'
                                }}
                                color = "#494A4A"
                            >
                                { jenis }
                            </Text>
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Flex alignItems={'center'} gap = {1}>
                                    <Icon as = {BsGeoAltFill} 
                                        color = {'#E52535'}
                                        m="0"
                                        fontSize={{
                                            base: 'sm',
                                            lg: 'md'
                                        }}
                                        cursor = {'pointer'}
                                        _hover = {{
                                            color : "gray.600",
                                            transition: "0.3s ease-in"
                                        }} 
                                    />
                                    <Text 
                                        fontSize={{
                                            base: 'sm',
                                            lg: 'md'
                                        }}
                                        fontWeight={'semibold'} 
                                        color = {'#1C1D1D'}
                                    >
                                        { jarak }
                                    </Text>
                                </Flex>
                                <Button
                                    display = {{
                                        base: 'flex',
                                        lg: "none"
                                    }}
                                    alignItems={'center'}
                                    variant = {'unstyled'}
                                    pos = {"absolute"}
                                    right = {0}
                                    rounded = {'full'}
                                    gap = {2} px = {5}
                                >
                                    <Icon as = {FaStar} color = {'yellow.500'} />
                                    <Text fontWeight={'bold'}> { rating } </Text>
                                </Button>
                            </Flex>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
        </GridItem>
    )
}