import React from "react";
import InstagramEmbed from "./Instagram";
import { Box, Heading, Center } from "@chakra-ui/react";

const Events = () => {
    return (
        <>
            <Box flexDirection="column" width="100%">
                <Heading fontSize="5xl">
                    Events
                </Heading>
                <Center>
                    <Box mt={10} width="70%" justifySelf="center">
                        <InstagramEmbed />
                    </Box>
                </Center>
            </Box >
        </>
    );
};

export default Events;