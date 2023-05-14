import { useEffect, useState } from "react"
import { Box, Button, Card, CardBody, Grid, GridItem, Image, Skeleton, Stack, Text, useDisclosure } from "@chakra-ui/react";

import CartButton from "./CartButton";
import { formatRupiah } from "@/utils/TextFormat";
import { isUmkmOpen } from "@/utils/BoolFunc";

export default function TabSection({ title, data, loading, detailUmkm }){
    const { isOpen, onOpen } = useDisclosure();
    const [cart, setCart] = useState([]);

    const handleBtnClick = (item) => {
        onOpen();
        
        const isItemExist = cart.find((cartItem) => {
            if (cartItem.name === item.name && cartItem.price === item.price) {
                return true;
            }
            return false;
        });  
        
        if (isItemExist) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.name === item.name && cartItem.price === item.price) {
                    return {...cartItem, qty: cartItem.qty + 1 };
                }
                return cartItem;
            });
            setCart(newCart);
        } else {
            setCart([...cart, {...item, qty: 1, }]);
        }
    }
    
    return(
        <Box
            w = {'full'}
            py = {9}
        >
            {title.map((item, id) => {
                return(
                    <Box key = {id}
                        py={10}
                        borderBottom={ id === title.length - 1 ? 'none' : '1px solid #E8E8E8' }
                    >
                        <Text 
                            fontSize={'24px'} 
                            fontWeight={'bold'} 
                            pb = {5}
                            px = {{
                                base: 5,
                                md: 0
                            }}
                        >
                            { item }
                        </Text>
                        <Grid
                            gridTemplateColumns={'repeat(12, 1fr)'}
                            gap = {7}
                        >
                            {data[id].map((item, index) => {
                                return(
                                    <GridItem key = {index}
                                        colSpan = {{
                                            base: 12,
                                            md: 6,
                                            lg : 3
                                        }}
                                    >
                                        <Skeleton isLoaded = {!loading}>
                                            <Card 
                                                border = {'1px solid #E8E8E8'} 
                                                borderRadius={'20px'} 
                                                p = {0}
                                                boxShadow = {'none'}
                                            >
                                                <CardBody p = {3}>
                                                    <Image 
                                                        src = {`/img/umkm/${item.image}`}
                                                        rounded = {'2xl'}
                                                        objectFit={'cover'}
                                                        w = {'full'}
                                                        h = {{ 
                                                            xl: '300px'
                                                        }}
                                                        alt = {item.name}
                                                        filter = {
                                                            item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? 'saturate(0)' : 'inherit'
                                                        }
                                                        fallback={<Skeleton />}
                                                    />
                                                    <Stack py = {5} px = {2} spacing = {item.stock === 0 ? 2 : 10}>
                                                        <Stack>
                                                            <Text fontSize={'18px'} fontWeight={'semibold'}>
                                                                {item.name} 
                                                            </Text>
                                                            <Text fontSize={'16px'} color = {'#494A4A'}>
                                                                {formatRupiah(item.price)}
                                                            </Text>
                                                        </Stack>
                                                        <Stack>
                                                            { item.stock === 0 &&
                                                                <Text textAlign={'end'} color = {'red'} fontWeight={'semibold'}>
                                                                    Out of Stock
                                                                </Text>
                                                            }
                                                            <Button 
                                                                variant={'outline'}
                                                                rounded={'full'}
                                                                borderColor = {item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? 'red':'#01A913'}
                                                                bg = {item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? 'red': ''}
                                                                color = {item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? 'white':'#01A913'}
                                                                _hover={{
                                                                    bg : item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? 'red':'#01A913',
                                                                    color: 'white'
                                                                }}
                                                                filter={item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ?'saturate(0)' : ''}
                                                                isDisabled = {item.stock === 0 || !isUmkmOpen(detailUmkm[0].work_hour) ? true : false}
                                                                onClick={() => handleBtnClick(item)}
                                                            >
                                                                Add
                                                            </Button>
                                                        </Stack>
                                                    </Stack>
                                                </CardBody>
                                            </Card>
                                        </Skeleton>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Box>
                )
            })}
            <Box 
                w = {'full'} 
                pos = {'sticky'} 
                px = {{ base: 2, lg: 0 }}
                bottom = {2}
            >
                <CartButton isOpen = {isOpen} cart = {cart} detailUmkm = {detailUmkm} />
            </Box>
        </Box>
    )
}