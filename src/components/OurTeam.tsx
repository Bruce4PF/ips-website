import Hover from "@/animations/Hover";
import { Box, Center, chakra, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import Team2023 from "./Team2023";
import Team2024 from "./Team2024";

const OurTeam: React.FC = () => {

    const CustomBg = useColorModeValue('#FFFFFF', '#292D32');
    const CustomColor = useColorModeValue('#000000', '#FFFFFF');
    const inactiveColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
    const innerShadow = useColorModeValue(
        '2px 2px 6px rgba(174, 174, 192, 0.40) inset, -2px -2px 6px #FFFFFF inset', // Light mode shadow
        '2px 2px 6px rgba(8, 8, 14, 0.40) inset, -2px -2px 6px #31373E inset'  // Dark mode shadow
    );

    const CustomTab = chakra(Tab, {
        baseStyle: {
            _selected: {
                color: CustomColor,
                bg: CustomBg,
                boxShadow: innerShadow,
                borderRadius: '12px'
            },
            _hover: {
                color: CustomColor,
                bg: CustomBg,
                boxShadow: innerShadow,
                borderRadius: '12px'
            },
            color: inactiveColor,
            borderRadius: '12px'
        }
    })

    return (
        <Box flexDirection="column" maxWidth="100%">

            <Tabs variant='soft-rounded' mt={10}>
                <Flex flexDirection='row' justifyContent="space-between">
                    <Heading fontSize="5xl">
                        Our Team
                    </Heading>
                    <Center>
                        <TabList gap={5}>
                            <Hover>
                                <CustomTab fontWeight='bold'>
                                    2024
                                </CustomTab>
                            </Hover>
                            <Hover>
                                <CustomTab fontWeight='bold' >
                                    2023
                                </CustomTab>
                            </Hover>
                        </TabList>
                    </Center>
                </Flex>

                <TabPanels mt='3rem'>
                    <TabPanel>
                        <Team2024 />
                    </TabPanel>
                    <TabPanel>
                        <Team2023 />
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Box>
    );
}

export default OurTeam;