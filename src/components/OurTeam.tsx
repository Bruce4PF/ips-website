import Hover from "@/animations/Hover";
import { Center, chakra, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import TheClub from "./TheClub";
import TheNetwork from "./TheNetwork";

const OurTeam: React.FC = () => {

const CustomBg = useColorModeValue('gray.200', 'gray.700');
const CustomColor = useColorModeValue('black', 'white');

const CustomTab = chakra(Tab, {
    baseStyle: {
        _selected: {
            color: CustomColor,
            bg: CustomBg
        },
        _hover: {
            color: CustomColor,
            bg: CustomBg
        }
    },
})

    return (
        <Center flexDirection="column" maxWidth="100%" gap={20}>
            <Heading fontSize="5xl">
                Our Team
            </Heading>
            <Tabs variant='soft-rounded'>
                <Center>
                    <TabList gap={5}>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                2024
                            </CustomTab>
                        </Hover>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                2023
                            </CustomTab>
                        </Hover>
                    </TabList>
                </Center>

                <TabPanels mt='3rem'>
                    <TabPanel>
                        <TheClub />
                    </TabPanel>
                    <TabPanel>
                        <TheNetwork />
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Center>
    );
}

export default OurTeam;