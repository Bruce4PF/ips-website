import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const DeviceCheck = ({ children }: { children: JSX.Element }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android|iPad|iPhone|iPod/.test(userAgent)) {
            setIsMobile(true);
        }
    }, []);

    if (isMobile) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                textAlign="center"
                p={5}
                bg="red.500"
                color="white"
            >
                <Heading
                    textAlign="center"
                    size="3xl"
                    fontWeight="medium"
                    lineHeight="normal"
                >
                    Sorry, this website is not optimized for mobile devices.
                </Heading>
            </Box>
        );
    }

    return children;
};

export default DeviceCheck;