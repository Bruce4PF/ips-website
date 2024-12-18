import { Container, Image, useColorMode } from "@chakra-ui/react";

const Logo: React.FC = () => {

    const { colorMode } = useColorMode();
    const logoSrc = colorMode === "dark" ? "../IPS Full Logo Dark.png" : "../IPS Full Logo.png";

    return (
        <Container maxWidth='container.lg' pt={3}>
            <Image
                src={logoSrc}
                height="100"
            />
        </Container>
    );
};

export default Logo;