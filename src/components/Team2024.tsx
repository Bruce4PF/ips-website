import Hover from "@/animations/Hover";
import { Box, Center, Heading, Grid, Text, Flex, Avatar, useColorModeValue } from "@chakra-ui/react";
import TeamMemberBox from "./TeamMemberBox";

const teamMembers = [
    { name: "Bruce Liu", position: "Co-President", image: "https://media.licdn.com/dms/image/D5603AQF5u2MaRBwKfw/profile-displayphoto-shrink_800_800/0/1679635669888?e=1727913600&v=beta&t=Jgd5jvNjB4HKVHyOhTsD-TB_mFdZrBid94hohvAWZ_U" },
    { name: "Sophia Ma", position: "Co-President", image: "https://media.licdn.com/dms/image/D5603AQHDlml0GxrBaw/profile-displayphoto-shrink_800_800/0/1665427506678?e=1727913600&v=beta&t=mgjNl7Q36531pNVTdV5Mt7G-iBMkKgZV_9nZt4ErFc0" },
    { name: "Yilin Wang", position: "VP Communications", image: "https://media.licdn.com/dms/image/D5603AQGb-zVJcLGjsg/profile-displayphoto-shrink_800_800/0/1678911512198?e=1727913600&v=beta&t=CaTdfHJXpnrmNrZOYYx0SXW8lePRNHyZ3lGWhSzHA5k" },
    { name: "Shubh Patel", position: "VP Education", image: "https://media.licdn.com/dms/image/D4D03AQGDhvLgNFuKKw/profile-displayphoto-shrink_800_800/0/1695702129468?e=1727913600&v=beta&t=C0f8Qo7in0wb8k25fcj8yrgP24vDrpUv0l4jRx1Xwfs" },
    { name: "Jasmine Chan", position: "VP Education", image: "https://media.licdn.com/dms/image/D4E03AQEplXzuf0CIRw/profile-displayphoto-shrink_800_800/0/1718894172906?e=1727913600&v=beta&t=aAVpN3mwFYHt0exeE_CsDPhyhU08bxwZicJKdK2EqQk" },
    { name: "Grace Zhou", position: "VP Careers", image: "https://media.licdn.com/dms/image/C5603AQFIAPG2vh46-w/profile-displayphoto-shrink_800_800/0/1636410299103?e=1727913600&v=beta&t=zBmm03EDGlfMV2F2XPLK2Jp34LjriO4TPA04__dtakA" },
    { name: "Dennis Zhang", position: "VP Careers", image: "https://media.licdn.com/dms/image/D4E03AQEmdiOVr1PVmg/profile-displayphoto-shrink_800_800/0/1712089333143?e=1727913600&v=beta&t=YxnpoZtyqIpN67Rsp4WpM5nOCwLHt9YYbElOc7l9mWo" },
    { name: "Rachel Zhu", position: "VP Fellowship", image: "https://media.licdn.com/dms/image/D4E03AQEeoNKwV-ii3A/profile-displayphoto-shrink_800_800/0/1702924610430?e=1727913600&v=beta&t=QyqfMky_ap4T3UKANGPyf8z4d3DleBtyLCvTkpqQSNk" },
    { name: "Jasmine Gu", position: "VP Fellowship", image: "https://media.licdn.com/dms/image/C5603AQFMJlItP9bDTg/profile-displayphoto-shrink_800_800/0/1654400784483?e=1727913600&v=beta&t=Rrfv9we8YM8ZKbPo-EzNyy6Q5rIHC0DhHAR7a46uvNM" }
];

const Team2024: React.FC = () => {

    return (
        <Box>
            <Center>
                <Heading>Meet the Team</Heading>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {teamMembers.slice(0, 2).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    {teamMembers.slice(2, 5).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
            <Center mt={4}>
                <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                    {teamMembers.slice(5, 9).map((member, index) => (
                        <TeamMemberBox key={index} member={member} />
                    ))}
                </Grid>
            </Center>
        </Box>
    );
};

export default Team2024;