import { Button, Fade, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import ModalCart from "./ModalCart";
import { useLayoutEffect, useState } from "react";
import { formatRupiah } from "@/utils/TextFormat";

import { TiShoppingCart } from 'react-icons/ti';

export default function CartButton({ isOpen, cart, detailUmkm }){
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [open, setOpen] = useState(false);

    useLayoutEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
        setTotal(newTotal);

        setTotalItems(cart.reduce((acc, item) => acc + item.qty, 0));

    }, [cart]);

    return(
        <>
            <ModalCart 
                isOpen={open} 
                onClose={() => setOpen(false)} 
                cart = {cart} 
                total = {total} 
                detailUmkm = {detailUmkm}
            />

            <Fade in = {isOpen}>
                <Button
                    w = {{
                        base: '80%',
                        md: 'fit-content',
                        lg: '30%'
                    }} 
                    _hover={{
                        bg: '#01A913'
                    }}
                    h = {"fit-content"}
                    bg = {'#01A913'} color = {"white"}
                    rounded={'full'}
                    py = {3} px = {10}
                    textAlign={'start'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    onClick = {() => setOpen(true)}
                    display = {!isOpen ? 'none' : ''}
                >
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Stack>
                            <Text>
                                {totalItems} items
                            </Text>
                            <Text>
                                Total {formatRupiah(total)}
                            </Text>
                        </Stack>
                        <Icon as={TiShoppingCart} fontSize={{base: '30px' ,lg:'40px'}} />
                    </Flex>
                </Button>
            </Fade>
        </>
    )
}