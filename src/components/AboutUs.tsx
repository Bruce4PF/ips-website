import TabFadeInUp from "@/animations/TabFadeInUp";
import { Box, Center, chakra, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AboutUsShapes from "./AboutUsShapes";

const AboutUs: React.FC = () => {
    const highlight = useColorModeValue('#21A179', '#7B69E5');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box flexDirection="column" gap={20}>
            <Heading fontSize="5xl">
                About Us
            </Heading>
            <Flex flexDirection='row' justifyContent='center' alignItems='center' gap={20} mt={10}>
                <Stack spacing={4} maxWidth='50%'>
                    <TabFadeInUp index={0}>
                        <Heading
                            as='h1'
                            size='lg'
                            fontWeight='bold'
                            lineHeight='8'
                            maxWidth='80%'
                        >
                            Building the next generation of{' '}
                            <chakra.span
                                bgGradient="linear(to-l, #9453FF, #43B87E)"
                                bgClip="text"
                                css={{
                                    textShadow: '4px 4px 15px rgba(220, 192, 255, 0.25)',
                                }}
                            >
                                product managers
                            </chakra.span>
                        </Heading>
                    </TabFadeInUp>
                    <TabFadeInUp index={1}>
                        <Text color={textColor}>
                            Led by Ivey alumni working in product, we're a team of students with the mission to transform
                            Western University and Ivey Business School into Canada's leading target school for careers in product management.
                        </Text>
                    </TabFadeInUp>
                    <TabFadeInUp index={1}>
                        <Text color={textColor}>
                            We run an HBA2 course, annual product fellowship bootcamp, host events throughout the year,
                            and provide career resources for students looking to break into product management!
                        </Text>
                    </TabFadeInUp>
                    <TabFadeInUp index={1}>
                        <Text color={textColor}>
                            We welcome students from all backgrounds and levels of experience, and are always looking for new members to join our team!
                        </Text>
                    </TabFadeInUp>
                    <TabFadeInUp index={2}>
                        <Text 
                        fontWeight='medium'
                        bgGradient="linear(to-l, #9453FF, #43B87E)"
                        bgClip="text"
                        css={{
                            textShadow: '1px 1px 10px rgba(220, 192, 255, 0.25)',
                          }} 
                        >
                            If you're interested in learning about product management, building products, or breaking into the tech industry, we'd love to meet you!
                        </Text>
                    </TabFadeInUp>
                </Stack>
                <AboutUsShapes />
            </Flex>
        </Box>
    )
}

export default AboutUs;
