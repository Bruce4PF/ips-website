import Hover from "@/animations/Hover";
import { Box, Flex, Avatar, Text, useColorModeValue } from "@chakra-ui/react";

const TeamMemberBox: React.FC<{ member: { name: string, position: string, image: string } }> = ({ member }) => {
    const boxShadow = useColorModeValue(
        '2px 2px 6px rgba(174, 174, 192, 0.40)', // Light mode shadow
        '2px 2px 6px rgba(8, 8, 14, 0.40)'  // Dark mode shadow
    );

    return (
        <Hover>
            <Box p={4} borderRadius="lg" width="200px" height="auto" boxShadow={boxShadow}>
                <Flex direction="column" align="center" justify="center" height="100%">
                    <Avatar size={"3xl"} name={member.name} src={member.image} mb={4} />
                    <Text fontWeight="bold">{member.name}</Text>
                    <Text>{member.position}</Text>
                </Flex>
            </Box>
        </Hover>
    );
};

export default TeamMemberBox;