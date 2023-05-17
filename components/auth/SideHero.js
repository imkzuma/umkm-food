import { Image, Stack, Text } from "@chakra-ui/react";

export default function SideHeroAuth({ title, paragraph, image }){
    return(
        <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            maxW = {'500px'}
        >
            <Image 
                src = {image} 
                alt = {title} 
                w = {{ md: '500px', base: '300px' }}
                h = {{ md: '430px', base: '300px' }}
                objectFit = {'cover'}
            />

            <Text fontSize={'32px'} color = {"#353642"} fontWeight={'700'}>
                { title }
            </Text>
            
            <Text fontSize={'16px'} px = {5}>
                { paragraph }
            </Text>

        </Stack>
    )
}