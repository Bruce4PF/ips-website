import AlumniPlacements from "@/components/AlumniPlacements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ParallaxImages from "@/components/ParallaxImages";
import theme from "@/styles/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";

export default function Home(): JSX.Element {

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Ivey Product Society</title>
        <link rel='icon' href='/IPS Favicon.ico' />
        <meta name='description' content="The Home Page of the Ivey Product Society." />
      </Head>

      <Header />

      <Container maxWidth='container.lg' centerContent pt={300} pb={1000} gap={500}>
        <Hero />
        <AlumniPlacements />

      </Container>

      <Footer />
      <ParallaxImages />

    </ChakraProvider>
  );
}
