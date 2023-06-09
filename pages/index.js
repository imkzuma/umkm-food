import Head from 'next/head'
import { Box, Skeleton } from '@chakra-ui/react'

import MainLayout from '@/layout/MainLayout'
import dynamic from 'next/dynamic';

const LandingHero = dynamic(() => import('@/components/Landing/Hero'), { loading: () => <Skeleton /> });
const SectionKategori = dynamic(() => import('@/components/Landing/SectionKategori'), { loading: () => <Skeleton /> });
const SectionRekomendasi = dynamic(() => import('@/components/Landing/SectionRekomendasi'), { loading: () => <Skeleton /> });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lomba FEWDC | Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainLayout>
          <LandingHero />
          <Box px = {{ lg: '138px', md: '25px', base: '5px' }}>
            <SectionKategori />
            <SectionRekomendasi />
          </Box>
        </MainLayout>
      </main>
    </>
  )
}
