import Hover from "@/animations/Hover";
import TabFadeInUp from "@/animations/TabFadeInUp";
import { Box, Container, Grid, GridItem, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const AlumniPlacements: React.FC = () => {
    const CustomBg = useColorModeValue('', '');

    return (
        <Container maxWidth="100%" mt={500}>
            <Heading>
                Alumni Placements
            </Heading>
            <Grid templateColumns='repeat(5, 1fr)' gap={4} pt={10}>
                <TabFadeInUp index={0}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Google Logo.png"
                                    alt="Google Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={0}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Microsoft Logo.png"
                                    alt="Microsoft Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={1}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Amazon Logo.png"
                                    alt="Amazon Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={2}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Meta Logo.png"
                                    alt="Meta Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={3}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Tesla Logo.png"
                                    alt="Tesla Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={0}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Uber Logo.png"
                                    alt="Uber Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={1}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/McKinsey Logo.png"
                                    alt="McKinsey Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={2}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/BCG Logo.png"
                                    alt="BCG Logo"
                                    height="100%"
                                    marginLeft="auto"
                                    marginRight="auto"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={3}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Bain Logo.png"
                                    alt="Bain Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={4}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Lyft Logo.png"
                                    alt="Lyft Logo"
                                    height="100%"
                                    marginLeft="auto"
                                    marginRight="auto"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={1}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Coinbase Logo.png"
                                    alt="Coinbase Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={2}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Adobe Logo.png"
                                    alt="Adobe Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={3}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Salesforce Logo.png"
                                    alt="Salesforce Logo"
                                    height="100%"
                                    marginLeft="auto"
                                    marginRight="auto"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={4}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Roblox Logo Black.png"
                                    alt="Roblox Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
                <TabFadeInUp index={4}>
                    <GridItem>
                        <Hover>
                            <Box
                                bg={CustomBg}
                                padding={2}
                                borderRadius='lg'
                                height="5rem"
                                alignContent="center"
                            >
                                <Image
                                    src="/Company Logos/Wealthsimple Logo.png"
                                    alt="Wealthsimple Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
            </Grid>
        </Container>
    );
}

export default AlumniPlacements;