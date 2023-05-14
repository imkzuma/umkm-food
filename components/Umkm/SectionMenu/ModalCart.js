import { formatRupiah } from "@/utils/TextFormat";
import { Button, Divider, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

export default function ModalCart({ isOpen, onClose, cart, total, detailUmkm }){
    const [dataCart, setDataCart] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);

    useLayoutEffect(() => {
        setDataCart(cart);
        setTotalHarga(total);
    }, [cart, total]);

    const handleClearAllCart = () => {
        setDataCart([]);
        setTotalHarga(0);
        window.location.reload();
    }
    
    return(
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', lg: 'xl' }}>
            <ModalOverlay />
            <ModalContent bg = {'#eaeaea'} >
                <ModalHeader>
                    <ModalCloseButton />
                    {detailUmkm.map(item => { return item.name })}
                </ModalHeader>
                <ModalBody>
                    <Stack gap = {3} pb = {3}>
                        <Stack
                            bg = {'white'}
                            spacing = {5}
                            border={'1px solid #E8E8E8'}
                            p = {5}
                            rounded = {'lg'}
                        >
                            <Text fontWeight={'semibold'} fontSize={'18px'}>
                                Lokasi Pengiriman
                            </Text>
                            <Divider />
                            <Input type="text" placeholder="Masukkan alamat pengiriman" />
                        </Stack>

                        <Stack 
                            bg = {'white'}
                            spacing = {5}
                            border={'1px solid #E8E8E8'}
                            p = {5}
                            rounded = {'lg'}
                        >
                            <Flex alignItems={'start'} justifyContent={'space-between'}>
                                <Text fontWeight={'semibold'} fontSize={'18px'}>
                                    Detail Pesanan
                                </Text>
                                <Button onClick={handleClearAllCart}>
                                    Clear
                                </Button>
                            </Flex>
                            <Divider />

                            {dataCart.map((item, index) => {
                                return(
                                    <Flex key = {index} justifyContent={'space-between'} alignItems={'center'}>
                                        <Flex alignItems={'center'}>
                                            <Image src = {`/img/umkm/${item.image}`} w = {'50px'} h = {'50px'} alt = {item.name} mr = {5} />    
                                            <Stack spacing = {0}>
                                                <Text fontSize={'16px'} fontWeight={'semibold'}>
                                                    {item.name}
                                                </Text>
                                                <Text fontSize={'14px'} color = {'#494A4A'}>
                                                    Jumlah: {item.qty}
                                                </Text>
                                            </Stack>
                                        </Flex>
                                        <Text color = {'#494A4A'}>
                                            {formatRupiah(item.price)}
                                        </Text>

                                    </Flex>
                                )
                            })}
                        </Stack>
                        <Stack
                            bg = {'white'}
                            spacing = {5}
                            border={'1px solid #E8E8E8'}
                            p = {5}
                            rounded = {'lg'}
                        >
                            <Text fontWeight={'semibold'} fontSize={'18px'}>
                                Payment Summary
                            </Text>
                            <Divider />
                            <Stack>
                                <Flex justifyContent={'space-between'} alignItems={'center'}>
                                    <Text>Price </Text>
                                    <Text color = {'#494A4A'}>
                                        {formatRupiah(totalHarga)}
                                    </Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} alignItems={'center'}>
                                    <Text>Tax </Text>
                                    <Text color = {'#494A4A'}>
                                        {formatRupiah(0)}
                                    </Text>
                                </Flex>
                            </Stack>
                            <Divider />
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Text fontWeight={'semibold'}>Total Payment </Text>
                                <Text fontWeight={'semibold'}>
                                    {formatRupiah(totalHarga)}
                                </Text>
                            </Flex>
                        </Stack>
                        <Button
                            rounded={'full'}
                            bg = {'#01A913'} color = {"white"}
                            _hover = {{
                                bg: '#01A913'
                            }}
                        >
                            Checkout
                        </Button>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}