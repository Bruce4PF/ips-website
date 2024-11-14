import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const OurProductLine: React.FC = () => {
    const highlight = useColorModeValue('#21A179', '#7B69E5');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box flexDirection="column" gap={20} alignSelf="flex-start">
            <Heading fontSize="5xl">
                Our Product Line
            </Heading>
        </Box>
    )
}

export default OurProductLine;
