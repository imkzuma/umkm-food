import { useLayoutEffect, useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import axios from "axios";

import TabSection from "./SectionMenu/TabSection";
import TabReview from "./SectionReview/TabSection";

export default function SectionMenu({ slug, detail, review }){
    const [dataRecomended, setDataRecomended] = useState([]);
    const [dataMakanan, setDataMakanan] = useState([]);
    const [dataMinuman, setDataMinuman] = useState([]);
    const [dataOthers, setDataOthers] = useState(null);

    const [loading , setLoading] = useState(false);

    useLayoutEffect(() => {
        const GetData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/umkm/${slug}`);
                const data = response.data;
                
                setDataRecomended(data[1].recomended);
                setDataMakanan(data[2].makanan);
                setDataMinuman(data[3].minuman);
                data[4] ? setDataOthers(data[4].review) : null;

            } catch (error) {
                console.error(error);

            } finally {
                setLoading(false);
            }
        }

        if(slug){
            GetData();
        }

    }, [slug]);

    return(
        <Box
            w = {'full'}
            pos = {'relative'}
        >
            <Tabs variant = 'line'>
                <TabList>
                    <Tab
                        _selected={{
                            color: 'white',
                            roundedTop: '3xl',
                            bg: '#E52535',
                            px: 7
                        }}
                        me = {2} px = {7}
                        roundedTop = '3xl'
                    >
                        Menu
                    </Tab>
                    <Tab
                        _selected={{
                            color: 'white',
                            roundedTop: '3xl',
                            bg: '#E52535',
                            px: 7
                        }}
                        me = {2} px = {7}
                        roundedTop = '3xl'
                    >
                        Review
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel p = {0} minH = {'100vh'}>
                        {dataOthers !== null 
                            ? <TabSection
                                    title = {['Recommended', 'Makanan', 'Minuman', 'Lainnya']}
                                    data = {[dataRecomended, dataMakanan, dataMinuman, dataOthers]}
                                    detailUmkm = {detail}
                                    loading = {loading}
                                />
                            : <TabSection
                                    title = {['Recommended', 'Makanan', 'Minuman']}
                                    data = {[dataRecomended, dataMakanan, dataMinuman]}
                                    detailUmkm = {detail}
                                    loading = {loading}
                                />
                        }
                    </TabPanel>

                    <TabPanel p = {0} minH = {'100vh'}>
                        <TabReview detail = {review} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}