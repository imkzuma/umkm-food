import { useRef, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Fade, Flex, Grid, GridItem, Icon, Input, InputGroup, InputLeftElement, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { SlGraph } from "react-icons/sl";

const HistorySearch = [
    { id: 1, name: 'Foods' },
    { id: 2, name: 'Washing' },
    { id: 3, name: 'Nasi Padang'},
    { id: 4, name: 'Nasi Kuning' },
    { id: 5, name: 'Ayam Geprek' },
    { id: 6, name: 'Ayam Kremes'}
];

const TrendingSearch = [
    { id: 1, name: 'Bakso' },
    { id: 2, name: 'Sate' },
    { id: 3, name: 'Soto'},
    { id: 4, name: 'Tempe' },
    { id: 5, name: 'Tahu' },
    { id: 6, name: 'Nasi Goreng'}
];

export default function HeroSearch({...props}){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const [dataHistory, setDataHistory] = useState(HistorySearch);
    
    const clearSearchHistory = () => {
        setDataHistory((prev) => {
            const newData = [...prev];
            newData.splice(0, newData.length);
            return newData;
        })
    };
    
    return(
        <Flex 
            pos = {'relative'} zIndex = {1}
            alignItems={'center'} justifyContent={'center'} 
            w={'full'} 
            ref = {searchRef}
            {...props}
        >
            <Box 
                minW={!isOpen ?{ base: '315px', md: '450px' }:{ base: '315px', md:'720px'}} 
                maxW={!isOpen ?{ base: '315px', md: '450px' }:{ base: '315px', md:'720px'}}
                minH={'120px'}
                bg={'white'}
                roundedTop={'13px'}
                boxShadow={'0px 12.5694px 40.2222px rgba(133, 161, 193, 0.25)'}
                px={'22px'}
                pos = {'relative'}
                transition = {'0.3s ease'}
            >
                <Stack direction = 'column' py = {'30px'}>
                    <InputGroup>
                        <InputLeftElement pointerEvents={'none'}>
                            <SearchIcon color = {'#E52535'} fontSize = {'xl'}/>
                        </InputLeftElement>
                        <Input 
                            borderRadius={'full'} 
                            border={'1px solid #BBBBBB'} 
                            type = "text" 
                            placeholder = "Search mouth-watering meals"
                            onClick={onOpen}
                            onBlur={(e) => {
                                if (searchRef.current && !searchRef.current.contains(e.relatedTarget)) {
                                    onClose();
                                }
                            }}
                        />
                    </InputGroup>
                    {!isOpen
                        ?   <Flex gap = {2}>
                                <Text fontSize={'14px'} fontWeight={'600'} color = {'#494A4A'}>
                                    Trending: 
                                </Text>
                                <Text fontSize={'14px'} fontWeight={'600'} color = {'#494A4A80'}>
                                    {TrendingSearch.map((item,index) => { 
                                        return (
                                            item.name + (index < TrendingSearch.length - 1 ? ', ' : '') 
                                        )
                                    })}
                                </Text>
                            </Flex>
                        :   <Flex alignItems={'center'} justifyContent={'space-between'} gap = {3}>
                                <Text fontWeight={'semibold'}>Recent Searches</Text>
                                <Button size={'sm'} onClick = {clearSearchHistory}>Clear</Button>
                            </Flex>
                    }
                </Stack>
                <Fade in = {isOpen}>
                    <Box
                        display={isOpen ? 'block' : 'none'}
                        minH={'10vh'} minW={'full'}
                        bg={'white'}
                        pos = {'absolute'}
                        top = '120px' left = '0'
                        roundedBottom = '13px'
                        px = {'22px'} pb = {5}
                        boxShadow={ '0px 12.5694px 40.2222px rgba(133, 161, 193, 0.25)'}
                    >
                        <Grid
                            gridTemplateColumns={'repeat(5, 1fr)'}
                            gap = {2}
                        >
                            {dataHistory === null || dataHistory.length === 0 
                                ? <Text align={'center'} color = 'gray.500'>No History</Text> 
                                : dataHistory.map((item,index) => (
                                    <GridItem key = { index } 
                                        gridColumn={{
                                            base: 'span 5',
                                            md: 'span 1'
                                        }}
                                    >
                                        <Button color = {'gray.500'} _hover = {{color:'gray.800'}} rounded = {'13px'} variant = {'outline'} w = {'full'}>
                                            {item.name}
                                        </Button>
                                    </GridItem>
                                ))
                            }
                        </Grid>

                        <Text fontWeight={'semibold'} pt = {7} pb ={4}>Trending Searches</Text>
                        <Grid
                            gridTemplateColumns={'repeat(5, 1fr)'}
                            gap = {2}
                        >
                            {TrendingSearch.map((item,index) => (
                                <GridItem key = { index } 
                                    gridColumn={{
                                        base: 'span 5',
                                        md: 'span 1'
                                    }}
                                >
                                    <Button gap = {4} color = {'gray.500'} _hover = {{color:'gray.800'}} rounded = {'13px'} variant = {'outline'} w = {'full'}>
                                        <Icon as = {SlGraph} />
                                        {item.name}
                                    </Button>
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Fade>
            </Box>
        </Flex>
    )
}