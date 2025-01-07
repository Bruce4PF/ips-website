import { Carousel } from "@/once-ui/components";
import { Box, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import InstagramEmbed from "./Instagram";

const OurProductLine: React.FC = () => {
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box flexDirection="column" alignSelf="flex-start" width="100%">
            <Heading fontSize="5xl" mb={10}>
                Our Product Line
            </Heading>

            <Carousel
                aspectRatio="16 / 9"
                indicator="line"
                images={[
                    { src: "/HBA2 Digital Product Management.png", alt: "HBA2 Course Digital Product Management" },
                    { src: "/Product Fellowship Bootcamp.png", alt: "Product Fellowship Bootcamp" },
                    { src: "/Events and Workshops.png", alt: "Events and Workshops" },
                ]}
            />

            {/* Digital Product Management Course, Product Fellowship Bootcamp, Educationals, Career Events, 
            Competitions, Mentorship, Resources, Networking */}
        </Box >
    )
}

export default OurProductLine;
