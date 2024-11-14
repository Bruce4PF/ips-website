import Hover from "@/animations/Hover";
import FadeInUp from "@/animations/FadeInUp";
import { Box, Center, Heading, Grid } from "@chakra-ui/react";
import TeamMemberBox from "./TeamMemberBox";
import TabFadeInUp from "@/animations/TabFadeInUp";

const teamMembers = [
    { name: "Bruce Liu", position: "Co-President", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/bliu445/" },
    { name: "Sophia Ma", position: "Co-President", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/ma-sophia/" },
    { name: "Yilin Wang", position: "VP Communications", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/yilinwanguwo/" },
    { name: "Trinity Ung", position: "Director Communications", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/trinity-ung-66270b257/" },
    { name: "Advaith Thakur", position: "Director Communications", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/advaith-thakur/" },
    { name: "Shubh Patel", position: "VP Education", image: "/Headshots/Shubh Patel.jpeg", linkedin: "https://www.linkedin.com/in/-shubhpatel/" },
    { name: "Jasmine Chan", position: "VP Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/jasminemchan/" },
    { name: "Avan Chan", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/avan-c-00bb4224a/" },
    { name: "Shaun Ahuja", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/shaun-ahuja/" },
    { name: "Cynthia Li", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/cynthia-li-9577a1252/" },
    { name: "Coco Lu", position: "Director Education", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/cocolu05/" },
    { name: "Rachel Zhu", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/rachzhu/" },
    { name: "Jasmine Gu", position: "VP Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/jasmine-gu-b2aa65201/" },
    { name: "Rachel Chen", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/rachel-jiayi-chen/" },
    { name: "Claire Zhang", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/clairezhangg/" },
    { name: "Luther Yuen", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/lutheryuen/" },
    { name: "Collin Sobowale", position: "Director Fellowship", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/collinsbwle/" },
    { name: "Grace Zhou", position: "VP Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/grace-zhou-6364b717b/" },
    { name: "Dennis Zhang", position: "VP Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/dennis-zhang99/" },
    { name: "Sarina Cheng", position: "Director Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/sarinacheng/" },
    { name: "Laurel Dong", position: "Director Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/laurel-dong/" },
    { name: "Sarah Huang", position: "Director Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/sarahpeihuang/" },
    { name: "Ryanna Luo", position: "Director Careers", image: "/Headshots/Bruce Liu.jpg", linkedin: "https://www.linkedin.com/in/ryannaluo/" },
];

const Team2024: React.FC = () => {
    return (
        <Box>
            <Center>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {teamMembers.slice(0, 5).map((member, index) => (
                        <TabFadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </TabFadeInUp>
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(5, 11).map((member, index) => (
                        <TabFadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </TabFadeInUp>
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(11, 17).map((member, index) => (
                        <TabFadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </TabFadeInUp>
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(6, 1fr)" gap={6}>
                    {teamMembers.slice(17, 23).map((member, index) => (
                        <TabFadeInUp key={index} index={index}>
                            <Hover>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <TeamMemberBox member={member} />
                                </a>
                            </Hover>
                        </TabFadeInUp>
                    ))}
                </Grid>
            </Center>
        </Box>
    );
};

export default Team2024;