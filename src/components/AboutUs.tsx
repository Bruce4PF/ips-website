import TabFadeInUp from "@/animations/TabFadeInUp";
import { Center, chakra, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AboutUsShapes from "./AboutUsShapes";

const AboutUs: React.FC = () => {
    const highlight = useColorModeValue('#21A179', '#7B69E5');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Center flexDirection="column" gap={20}>
            <Heading fontSize="5xl">
                About Us
            </Heading>
            <Flex flexDirection='row' justifyContent='center' alignItems='center' gap={20}>
                <AboutUsShapes />
                <Stack spacing={4} maxWidth='50%'>
                    <TabFadeInUp index={0}>
                        <Heading
                            as='h1'
                            size='lg'
                            fontWeight='bold'
                            lineHeight='8'
                            maxWidth='80%'
                        >
                            Building the next generation of <br />
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
                            We run an annual product fellowship, host workshops throughout the year,
                            and provide career resources for students looking to break into product management!
                        </Text>
                    </TabFadeInUp>
                    <TabFadeInUp index={1}>
                        <Text color={textColor}>
                            Bleeh blaah blooh blarghh I can't think of anything else to write so I'll wait for other people's opinions to fill out this section. Can't do it lmao
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
                            We also do some cool stuff like the digital product management course, please give us money!
                        </Text>
                    </TabFadeInUp>
                </Stack>
            </Flex>
        </Center>
    )
}

export default AboutUs;
