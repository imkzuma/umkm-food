import { Box, Center, Grid, Heading, Text } from "@chakra-ui/react";
import CardKategori from "./CardKategori";

const KategoriData = [
    { id: 1, name: 'Near', image: 'near.png', filter: 'near' },
    { id: 2, name: 'Top Resto', image: 'top-resto.png', filter: 'top' },
    { id: 3, name: 'Vegetarian', image: 'vegetarian.png', filter: 'vegetarian' },
    { id: 4, name: 'Glutten Free', image: 'glutten-free.png', filter: 'free-gluteen' },
    { id: 5, name: 'Allergy Friendly', image: 'allergy-friendly.png', filter: 'friendly allergy' },
    { id: 6, name: 'Halal', image: 'halal.png', filter: 'halal' },
];

export default function SectionKategori(){
    return(
        <Box py = {{  base: '80px' }} transition={'0.3s ease'}>
            <Center>
                <Heading 
                    size = {{ base: 'lg', md: 'xl' }}
                    fontWeight={'semibold'}
                >
                    Mencari Inspirasi makanan? Lihat disini
                </Heading>
            </Center>
            <Grid
                gridTemplateColumns={'repeat(6, 1fr)'}
                gap = {{
                    base: '10px',
                    xl: '24px'
                }}
                py = {'40px'}
                transition = {'0.3s ease'}
            >
                {KategoriData.map((item) => {
                    return(
                        <CardKategori key = {item.id} 
                            name = {item.name}
                            image = {item.image}
                        />
                    )
                })}

            </Grid>
        </Box>
    )
}