import Hover from "@/animations/Hover";
import { Center, chakra, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import TheClub from "./TheClub";
import TheNetwork from "./TheNetwork";

const AboutUs: React.FC = () => {

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
                About Us
            </Heading>
            <Tabs variant='soft-rounded'>
                <Center>
                    <TabList gap={5}>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                The Game
                            </CustomTab>
                        </Hover>
                        <Hover>
                            <CustomTab fontWeight='bold'>
                                The Developers
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

export default AboutUs;