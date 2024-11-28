'use client';

import { RevealFx, Scroller, SmartImage } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface Image {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: Image[];
    indicator?: 'line' | 'thumbnail';
    aspectRatio?: string;
    sizes?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
    images = [],
    indicator = 'line',
    aspectRatio = '16 / 9',
    sizes,
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const lineBackgroundColor = useColorModeValue('#0000004d', '#FFFFFF4d');
    const lineColor = useColorModeValue('#151515', '#FFFFFF');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if (images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);
        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 500);
        }
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <Flex gap={6} direction="column">
            <Flex onClick={handleImageClick}>
                <RevealFx
                    style={{ width: '100%' }}
                    trigger={isTransitioning}
                    translateY="16"
                    speed="fast">
                    <SmartImage
                        sizes={sizes}
                        priority
                        tabIndex={0}
                        radius="l"
                        alt={images[activeIndex]?.alt}
                        aspectRatio={aspectRatio}
                        src={images[activeIndex]?.src}
                        style={{
                            borderRadius: '20px',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}
                    />
                </RevealFx>
            </Flex>

            {/* Indicator Line */}
            <Flex
                style={{ height: '2px', background: lineBackgroundColor, borderRadius: '2px', overflow: 'hidden', marginLeft: '2%', marginRight: '2%' }}
            >
                <div
                    style={{
                        width: `${100 / images.length}%`,
                        transform: `translateX(${activeIndex * 100}%)`,
                        height: '100%',
                        background: lineColor,
                        transition: 'transform 0.3s ease',
                    }}
                />
            </Flex>
        </Flex>
    );
};
