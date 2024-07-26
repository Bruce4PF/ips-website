import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ParallaxImages: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Image
                src="/Cone Purple.png"
                alt="Image 1"
                position="absolute"
                top="5%"
                left="65%"
                transform={`translateY(${scrollY * 0.6}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
            <Image
                src="/Round Cube Purple.png"
                alt="Image 2"
                position="absolute"
                top="15%"
                right="12%"
                transform={`translateY(${scrollY * 0.55}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
            <Image
                src="/Sphere Purple.png"
                alt="Image 3"
                position="absolute"
                top="25%"
                left="65%"
                transform={`translateY(${scrollY * 0.06}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
            <Image
                src="/Round Cube Green.png"
                alt="Image 3"
                position="absolute"
                top="25%"
                left="30%"
                transform={`translateY(${scrollY * 0.15}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
            <Image
                src="/Sphere Green.png"
                alt="Image 5"
                position="absolute"
                top="6%"
                left="25%"
                transform={`translateY(${scrollY * 0.70}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
            <Image
                src="/Cone Green.png"
                alt="Image 6"
                position="absolute"
                top="15%"
                left="10%"
                transform={`translateY(${scrollY * 0.40}px)`}
                transition="transform 0.1s ease-out"
                zIndex={-9999}
            />
        </>
    );
}

export default ParallaxImages;