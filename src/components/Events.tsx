import React from "react";
import InstagramEmbed from "./Instagram";
import { Box, Heading } from "@chakra-ui/react";

const Events = () => {
    return (
        <>
            <Box flexDirection="column" alignSelf="flex-start" width="100%">
                <Heading fontSize="5xl">
                    Events
                </Heading>
                <Box mt={20} width="70%" justifySelf="center">
                    <InstagramEmbed />
                </Box>
            </Box >
        </>
    );
};

export default Events;