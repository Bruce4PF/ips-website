import FadeInUp from '@/animations/FadeInUp';
import { ButtonGroup, Container, IconButton, Stack, Text, Image, Flex, Spacer, Link, useColorMode } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {

    const instagramShareUrl = 'https://www.instagram.com/iveyproductsociety_/'
    const linkedinShareUrl =  'https://www.linkedin.com/company/ivey-product-society/'
    const facebookShareUrl = 'https://www.facebook.com/iveyproduct/'

    const { colorMode } = useColorMode();
    const IPSLogo = colorMode === "dark" ? "../IPS Full Logo Dark.png" : "../IPS Full Logo.png";

    return (
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }} maxWidth='container.md'>
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="flex-end">
                    <FadeInUp index={0}>
                        <Image
                            src={IPSLogo}
                            height="90"
                        />
                    </FadeInUp>
                    <FadeInUp index={1}>
                        <Flex alignItems='center' gap={3}>
                            <Text fontSize="sm" color="fg.subtle" fontWeight='medium'>
                                More of us:
                            </Text>
                            <ButtonGroup variant="tertiary">
                                <IconButton
                                    as="a"
                                    href={instagramShareUrl}
                                    target="_blank"
                                    aria-label='Instagram'
                                    icon={<FaInstagram fontSize="1.25rem" />}
                                />
                                <IconButton
                                    as="a"
                                    href={linkedinShareUrl}
                                    target="_blank"
                                    aria-label="LinkedIn"
                                    icon={<FaLinkedin fontSize="1.25rem" />}
                                />
                                <IconButton
                                    as="a"
                                    href={facebookShareUrl}
                                    target="_blank"
                                    aria-label="Facebook"
                                    icon={<FaFacebook fontSize="1.25rem" />}
                                />
                            </ButtonGroup>
                        </Flex>
                    </FadeInUp>
                </Stack>
                <Flex alignItems='end'>
                    <FadeInUp index={2}>
                        <Text fontSize="sm" color="fg.subtle">
                            &copy; {new Date().getFullYear()} — Ivey Product Society
                        </Text>
                    </FadeInUp>
                    <Spacer />
                    <FadeInUp index={3}>
                            <Text fontSize="sm" color="fg.subtle">
                                Made with ❤️ in Canada
                            </Text>
                    </FadeInUp>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Footer;
