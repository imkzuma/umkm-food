import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { isUmkmOpen } from "@/utils/BoolFunc";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function HeroUmkm({ detail }){
    return(
        <Flex
            w = {'full'} py = {{ xl: 20 }}
            alignItems={'center'} justifyContent={'center'}
            pos = {'relative'}
        >
            <Button
                as = "a"
                href = "/"
                pos = {'absolute'}
                top = {{base: 1, lg: 3}}
                px = {{base: 2, lg: 0}}
                left = {{ base: 1, lg: 0 }}
                variant = {'unstyled'}
                display={'flex'}
                alignItems={'center'}
                bg = {{
                    base: 'white',
                    lg: 'transparent'
                }}
            >
                <ChevronLeftIcon color = {'#E52535'} fontSize={'35px'} p = {0} />
                <Text color = {{base: 'black', lg: 'gray.600'}}>
                    Kembali
                </Text>
            </Button>
            <Box w = {'full'}>
                {detail.map((item, index) => (
                    <Grid key = {index}
                        gridTemplateColumns={'repeat(12, 1fr)'}
                        alignItems={'start'}
                    >
                        <GridItem 
                            colSpan={{
                                base: '12',
                                lg: '8'
                            }}
                        >
                            <Image 
                                src = {`/img/umkm/${item.image}`}
                                alt = {item.name}
                                rounded = {'lg'}
                                w = {'full'} h = {'25vh'}
                                objectFit={'cover'}
                                display = {{
                                    base: 'block',
                                    lg: 'none'
                                }}
                            />
                            
                            <Stack spacing = {8} py = {{ base: 6, lg: "inherit"}}>
                                <Stack>
                                    <Heading
                                        fontSize={{
                                            base: '24px',
                                            md: '36px'
                                        }}
                                    > 
                                        {item.name} 
                                    </Heading>

                                    <Text 
                                        color = {'#494A4A'} 
                                        fontSize={{
                                            base: '15px',
                                            md: '18px'
                                        }}
                                    > 
                                        {item.type} 
                                    </Text>

                                    <Text 
                                        fontSize = {{
                                            base: '15px',
                                            md: '18px'
                                        }} 
                                        fontWeight={'bold'} 
                                        color = {'#494A4A'}
                                    > 
                                        {item.address} 
                                    </Text>

                                    <Flex alignItems={'center'} gap = {4}>
                                        <Button 
                                            w = {'fit-content'}
                                            h = {'fit-content'}
                                            bg = { isUmkmOpen(item.work_hour) ? '#01A913' : '#E52535'}
                                            variant={'unstyled'}
                                            color = {'white'}
                                            py = {2} px = {6}
                                            rounded = {"full"}
                                            cursor={'default'}
                                        >
                                            {isUmkmOpen(item.work_hour)? "Open" : "Closed"}
                                        </Button>
                                        <Text color = {'gray.600'}>
                                            {item.work_hour}
                                        </Text>
                                    </Flex>
                                </Stack>

                                <Flex
                                    alignItems={'center'}
                                    overflow={{ base: 'auto', lg: 'hidden' }}
                                >
                                    <Flex
                                        px = {7}
                                        minW = {{base: '10rem', lg: 'auto'}}
                                        borderLeft = {{lg:'2px solid #E8E8E8'}}
                                    >
                                        <Stack justifyContent={'center'} alignItems={'center'}>
                                            <Flex alignItems={'center'} gap = {2}>
                                                <Image src = "/img/umkm/icon-star.png" alt = "star" />
                                                <Text fontWeight={'semibold'}> {item.rating[0].star} </Text>
                                            </Flex>
                                            <Text color = {'#727272'}>
                                                {item.rating[0].review}+ Ratings
                                            </Text>
                                        </Stack>
                                    </Flex>

                                    <Flex
                                        px = {7}
                                        minW = {{base: '12rem', lg: 'auto'}}
                                        borderLeft = {{lg:'2px solid #E8E8E8'}}
                                    >
                                        <Stack justifyContent={'center'} alignItems={'center'}>
                                            <Flex alignItems={'center'} gap = {2}>
                                                <Image src = "/img/umkm/icon-location.png" alt = "star" />
                                                <Text fontWeight={'semibold'}> 0.2 km </Text>
                                            </Flex>
                                            <Text color = {'#727272'}>
                                                Distance
                                            </Text>
                                        </Stack>
                                    </Flex>
                                    <Flex
                                        px = {7}
                                        minW = {{base: '12rem', lg: 'auto'}}
                                        borderLeft = {{lg:'2px solid #E8E8E8'}}
                                    >
                                        <Stack justifyContent={'center'} alignItems={'center'}>
                                            <Flex alignItems={'center'} gap = {2}>
                                                <Image src = "/img/umkm/icon-bag.png" alt = "star" />
                                                <Text fontWeight={'semibold'}> {item.price} </Text>
                                            </Flex>
                                            <Text color = {'#727272'}>
                                                Price Range
                                            </Text>
                                        </Stack>
                                    </Flex>
                                    <Flex
                                        px = {7}
                                        minW = {{base: '12rem', lg: 'auto'}}
                                        borderLeft = {{lg:'2px solid #E8E8E8'}}
                                    >
                                        <Stack justifyContent={'center'} alignItems={'center'}>
                                            <Flex alignItems={'center'} gap = {2}>
                                                <Image src = "/img/umkm/icon-shield.png" alt = "star" />
                                                <Text fontWeight={'semibold'}> {item.hygienic[0].rating}+ ratings </Text>
                                            </Flex>
                                            <Text color = {'#727272'}>
                                                Hygienic
                                            </Text>
                                        </Stack>
                                    </Flex>
                                    <Flex
                                        px = {7}
                                        minW = {{base: '12rem', lg: 'auto'}}
                                        borderLeft = {{lg:'2px solid #E8E8E8'}}
                                    >
                                        <Stack justifyContent={'center'} alignItems={'center'}>
                                            <Flex alignItems={'center'} gap = {2}>
                                                <Image src = "/img/umkm/icon-halal.png" alt = "star" />
                                                <Text fontWeight={'semibold'}> 
                                                    {item.is_halal ? "Halal" : "Non Halal"}
                                                </Text>
                                            </Flex>
                                            <Text color = {'#727272'}>
                                                Certified
                                            </Text>
                                        </Stack>
                                    </Flex>
                                </Flex>
                            </Stack>
                        </GridItem>

                        <GridItem
                            colSpan={{
                                lg: '4'
                            }}
                            display={{
                                base: 'none',
                                lg: 'block'
                            }}
                            pos = {'relative'}
                            justifyContent={'end'}
                        >
                            <Image 
                                src = {`/img/umkm/${item.image}`}
                                alt = {item.name}
                                right={0}
                                w = {'50%'}
                                objectFit={'cover'}
                                pos = {'absolute'}
                                filter = { !isUmkmOpen(item.work_hour) ? 'saturate(0)' : ''}
                            />
                        </GridItem>

                    </Grid>
                ))}
            </Box>
        </Flex>
    )
}