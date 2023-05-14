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
                boxShadow:'0px 12.5694px 40.2222px rgba(133, 161, 193, 0.35)',
                transition: '0.3s ease'
            }}
            transition={'0.3s ease'}
        >
            <Card 
                minH = {{ xl: '490px'}}
                border = {'1px solid #E8E8E8'} 
                borderRadius={'20px'} 
                p = {0} pb = {{ base: 10, lg: 0 }}
                boxShadow = {'none'}
            >
                <CardBody p = {2}>
                    <Box pos = {'relative'}>
                        <Image 
                            src = {`/img/landing/section-rekomendasi/${image}`}
                            rounded = {'xl'}
                            objectFit={'cover'}
                            w = {'full'}
                            h = {{ 
                                xl: '300px'
                            }}
                            fallback={<Skeleton h = {'300px'} />}
                            alt = {name}
                        />
                        <Button
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
                    <Stack mt='6' px = {'10px'} spacing='3'>
                        <Heading size='md'>
                            { name }
                        </Heading>
                        <Text color = "#494A4A">
                            { jenis }
                        </Text>
                        <Flex alignItems={'center'} gap = {1}>
                            <Icon as = {BsGeoAltFill} 
                                color = {'#E52535'}
                                m="0"
                                fontSize = "xl"
                                cursor = {'pointer'}
                                _hover = {{
                                    color : "gray.600",
                                    transition: "0.3s ease-in"
                                }} 
                            />
                            <Text fontWeight={'semibold'} color = {'#1C1D1D'}>
                                { jarak }
                            </Text>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </GridItem>
    )
}