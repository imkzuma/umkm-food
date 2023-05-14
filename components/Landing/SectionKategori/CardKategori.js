import { Avatar, GridItem, Stack, Text } from "@chakra-ui/react";

export default function CardKategori( { name, image } ){
    return(
        <GridItem
            minH = {"150px"} minW = {{ xl: '150px'}}
            border={'1px solid #E8E8E8'}
            borderRadius={'14px'}
            gridColumn={{
                base: 'span 3',
                sm: 'span 2',
                lg: 'span 1'
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            _hover={{
                boxShadow: '0px 12.5694px 40.2222px rgba(133, 161, 193, 0.35)',
                cursor: 'pointer',
                transition: '0.3s ease-in'
            }}
            transition={'0.3s ease-in'}
        >
            <Stack direction = {'column'} alignItems={'center'} gap = {'10px'}>
                <Avatar 
                    size = {'lg'}
                    name = {name}
                    src = {`/img/landing/section-kategori/${image}`}
                />
                <Text fontSize={'14px'} fontWeight={'600px'} color = {'#1C1D1D'}>
                    {name}
                </Text>
            </Stack>
        </GridItem>
    )
}