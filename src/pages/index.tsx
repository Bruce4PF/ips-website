import AboutUs from "@/components/AboutUs";
import AlumniPlacements from "@/components/AlumniPlacements";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import OurProductLine from "@/components/OurProductLine";
import OurTeam from "@/components/OurTeam";
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
      <Logo />
      <Container maxWidth='container.lg' centerContent pt={120} pb={20} gap={150}>
        <Hero />
        <AlumniPlacements />
        <AboutUs />
        <OurProductLine />
        <Events />
        <OurTeam />
      </Container>
      <Footer />
      <ParallaxImages />

    </ChakraProvider>
  );
}
