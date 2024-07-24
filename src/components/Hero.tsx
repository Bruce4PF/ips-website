import FadeInUp from "@/animations/FadeInUp";
import { Heading, chakra, Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY, currentTarget } = event;
        const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;
        const centerX = offsetWidth / 2;
        const centerY = offsetHeight / 2;

        const offsetX = (centerX - clientX) / 40;
        const offsetY = (centerY - clientY) / 40;

        setOffset({ x: offsetX, y: offsetY });
    };

    return (
        <Box position="relative" overflow="visible">
            <FadeInUp index={0}>
                <Heading
                    textAlign="center"
                    size="3xl"
                    fontWeight="medium"
                    lineHeight="normal"
                    onMouseMove={handleMouseMove}
                    style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    Building the <br />
                    <chakra.span
                        fontWeight="bold"
                        fontSize="8xl"
                        bgGradient="linear(to-l, #9453FF, #43B87E)"
                        bgClip="text"
                        css={{
                            textShadow: '4px 4px 15px rgba(220, 192, 255, 0.25)',
                          }}                    
                    >
                        Product Management
                    </chakra.span>
                    <br />
                    Community at Ivey.
                </Heading>
            </FadeInUp>

        </Box>
    );
};

export default Hero;
