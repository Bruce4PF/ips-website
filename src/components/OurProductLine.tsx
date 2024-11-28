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
                    { src: "/Headshots/Shubh Patel.jpeg", alt: "Product Line 2" },
                    { src: "/Headshots/Bruce Liu.jpg", alt: "Product Line 3" },
                    { src: "/Headshots/Shubh Patel.jpeg", alt: "Product Line 4" },
                    { src: "/Headshots/Bruce Liu.jpg", alt: "Product Line 5" },
                    { src: "/Headshots/Shubh Patel.jpeg", alt: "Product Line 6" }
                ]}
            />

            {/* Digital Product Management Course, Product Fellowship Bootcamp, Educationals, Career Events, 
            Competitions, Mentorship, Resources, Networking */}
        </Box >
    )
}

export default OurProductLine;
