import Hover from "@/animations/Hover";
import { Box, Center, Grid } from "@chakra-ui/react";
import TeamMemberBox from "./TeamMemberBox";
import FadeInUp from "@/animations/FadeInUp";

const teamMembers = [
    { name: "Zohaib Adnan", position: "Co-President", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/zohaib12/" },
    { name: "Scott Hopton", position: "Co-President", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/scotthopton/" },
    { name: "Bruce Liu", position: "VP Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/bliu445/" },
    { name: "Sophia Ma", position: "VP Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/ma-sophia/" },
    { name: "Shubh Patel", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/-shubhpatel/" },
    { name: "Jasmine Chan", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/jasminemchan/" },
    { name: "Isabelle Gan", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/isabellegan/" },
    { name: "Edison Qu", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/edisonqu/" },
    { name: "Zeba Rizvi", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/zebarizvi/" },
    { name: "Justin Yan", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg" , linkedin: "https://www.linkedin.com/in/justinyan13/"},
    { name: "Kelly Guo", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/kellyjguo/" },
    { name: "Usher Li", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/jinse-usher-li/" },
    { name: "Dennis Zhang", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/dennis-zhang99/" },
    { name: "Jessica Ou", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/jessica-ou1/" },
];

const Team2024: React.FC = () => {
    return (
        <Box>
            <Center>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {teamMembers.slice(0, 2).map((member, index) => (
                        <FadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </FadeInUp>                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(2, 8).map((member, index) => (
                        <FadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </FadeInUp>                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(8, 14).map((member, index) => (
                        <FadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </FadeInUp>                    ))}
                </Grid>
            </Center>
        </Box>
    );
};

export default Team2024;