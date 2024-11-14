import Hover from "@/animations/Hover";
import { Box, Center, Heading, Grid, Text, Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import TeamMemberBox from "./TeamMemberBox";

const teamMembers = [
    { name: "Zohaib Adnan", position: "Co-President", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Scott Hopton", position: "Co-President", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Bruce Liu", position: "VP Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Sophia Ma", position: "VP Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Shubh Patel", position: "Director Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Jasmine Chan", position: "Director Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Isabelle Gan", position: "Director Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Edison Qu", position: "Director Education", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Zeba Rizvi", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Justin Yan", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Kelly Guo", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Usher Li", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Dennis Zhang", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg" },
    { name: "Jessica Ou", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg" },
];

const Team2024: React.FC = () => {
    return (
        <Box>
            <Center>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {teamMembers.slice(0, 2).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(2, 8).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(8, 14).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
        </Box>
    );
};

export default Team2024;