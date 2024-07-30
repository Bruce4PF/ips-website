import Hover from "@/animations/Hover";
import TabFadeInUp from "@/animations/TabFadeInUp";
import { Box, Center, Grid, GridItem, Heading, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

const AlumniPlacements: React.FC = () => {
    const CustomBg = useColorModeValue('', '');
    const { colorMode } = useColorMode();
    const AmazonImage = colorMode === "dark" ? "/Company Logos/Amazon Logo Dark.png" : "/Company Logos/Amazon Logo.png";
    const MetaImage = colorMode === "dark" ? "/Company Logos/Meta Logo Dark.png" : "/Company Logos/Meta Logo.png";
    const UberLogo = colorMode === "dark" ? "/Company Logos/Uber Logo Dark.png" : "/Company Logos/Uber Logo.png";
    const McKinseyLogo = colorMode === "dark" ? "/Company Logos/McKinsey Logo Dark.png" : "/Company Logos/McKinsey Logo.png";
    const RobloxLogo = colorMode === "dark" ? "/Company Logos/Roblox Logo Dark.png" : "/Company Logos/Roblox Logo.png";
    const WealthsimpleLogo = colorMode === "dark" ? "/Company Logos/Wealthsimple Logo Dark.png" : "/Company Logos/Wealthsimple Logo.png";
    const MicrosoftLogo = colorMode === "dark" ? "/Company Logos/Microsoft Logo Dark.png" : "/Company Logos/Microsoft Logo.png";

    return (
        <Center flexDirection="column" maxWidth="100%" mt={350}>
            <Heading fontSize="5xl">
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
                                    src={MicrosoftLogo}
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
                                    src={AmazonImage}
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
                                    src={MetaImage}
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
                                    src={UberLogo}
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
                                    src={McKinseyLogo}
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
                                    src={RobloxLogo}
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
                                    src={WealthsimpleLogo}
                                    alt="Wealthsimple Logo"
                                    width="100%"
                                />
                            </Box>
                        </Hover>
                    </GridItem>
                </TabFadeInUp>
            </Grid>
        </Center>
    );
}

export default AlumniPlacements;