import { Box, Button, Card, CardBody, Center, Flex, Grid, GridItem, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import CardRekomendasi from "./CardRekomendasi";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

export default function SectionRekomendasi(){
    const [DataRekomendasi, setDataRekomendasi] = useState([]);
    useLayoutEffect(() => {
        const GetData = async() => {
            try {
                const response = await axios.get('/api/food-rekomendasi');
                setDataRekomendasi(response.data);

            } catch (error) {
                console.error(error);
            }
        }

        GetData();
    }, [DataRekomendasi]);

    return(
        <Box
            pb = {{ base: '80px' }}
        >
            <Stack 
                justifyContent={{ base: 'start', md:'center' }} 
                alignItems={{ base: 'start', md:'center' }} 
                textAlign={{md: 'center'}} 
                spacing = {4}
            >
                <Heading 
                    size = {{ base: "lg", md: "xl" }}
                    fontWeight={"semibold"}
                >
                    Ingin Saran Makanan? Lihat ini
                </Heading>
                <Text 
                    w = {{ md: '600px', base: 'full' }} 
                    color = {'gray.500'}
                >
                    Yuk, cek koleksi makanan populer, favorit pecinta kuliner lokal, dan penawaran terbaik kami di lokasi Anda!
                </Text>
            </Stack>
            <Grid
                gridTemplateColumns={'repeat(12, 1fr)'}
                gap = {'24px'}
                py = {'40px'}
            >
                {DataRekomendasi.map((item) => {
                    return(
                        <CardRekomendasi key = {item.id}
                            name = {item.name}
                            jenis = {item.jenis}
                            jarak = {item.jarak}
                            image = {item.image}
                            rating = {item.rating}
                            href = {item.href}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}