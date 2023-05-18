import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router"
import { useLayoutEffect, useState } from "react";
import { Box, Flex, Skeleton, Spinner } from "@chakra-ui/react";
import axios from "axios";

import MainLayout from "@/layout/MainLayout";
import SectionReview from "@/components/Umkm/SectionReview/TabSection";

const HeroUmkm = dynamic(() => import('@/components/Umkm/hero'), { loading: () => <Skeleton /> });
const SectionMenu = dynamic(() => import('@/components/Umkm'), { loading: () => <Skeleton /> });

export default function UmkmPage(){
    const router = useRouter();
    const { slug } = router.query;
    const [loading, setLoading] = useState(false);
    const [detailUmkm, setDetailUmkm] = useState([]);
    const [review, setReview] = useState([]);

    useLayoutEffect(() => {
        const GetData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/umkm/${slug}`);
                setDetailUmkm(response.data[0].detail_umkm);
                setReview(response.data[0].review);

            } catch (error) {
                router.push("/");
            } finally {
                setLoading(false);
            }
        }

        if(slug){
            GetData();
        }

    }, [slug, router]);

    return(
        <>
            <Head>
                <title>UMKM | {slug && slug.toUpperCase()} </title>
            </Head>
            <main>
                {
                    loading ? (
                        <Flex minH = {'100vh'} minW = {'full'} justifyContent={'center'} alignItems={'center'}>
                            <Spinner size={'xl'} />
                        </Flex>
                    )
                    : (
                        <MainLayout>
                            <Box px = {{ lg: '138px', md: '25px', base: '5px' }}>
                                <HeroUmkm detail = {detailUmkm} />
                                <SectionMenu slug = {slug} detail = {detailUmkm} review = {review} />
                            </Box>
                        </MainLayout>
                    )
                }
                
            </main>
        </>
    )
}
