import React from 'react';
import { VStack, Image, Text } from '@chakra-ui/react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
}

interface TeamMemberBoxProps {
    member: TeamMember;
}

const TeamMemberBox: React.FC<TeamMemberBoxProps> = ({ member }) => {
    return (
        <VStack spacing={2} minWidth="150px" maxWidth="150px">
            <Image
                src={member.image}
                alt={member.name}
                borderRadius="full"
                boxSize="120px"
                objectFit="cover"
            />
            <Text fontWeight="bold" textAlign="center">{member.name}</Text>
            <Text textAlign="center">{member.position}</Text>
        </VStack>
    );
};

export default TeamMemberBox;