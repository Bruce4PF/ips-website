import { useEffect, useRef } from "react";
import { Container, Image } from "@chakra-ui/react";

const AboutUsShapes: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const container = containerRef.current;
            const layer1 = document.querySelector('.parallax-layer-1') as HTMLElement;
            const layer2 = document.querySelector('.parallax-layer-2') as HTMLElement;
            const layer3 = document.querySelector('.parallax-layer-3') as HTMLElement;
            const layer4 = document.querySelector('.parallax-layer-4') as HTMLElement;
            const layer5 = document.querySelector('.parallax-layer-5') as HTMLElement;
            const layer6 = document.querySelector('.parallax-layer-6') as HTMLElement;

            if (container) {
                const containerTop = container.getBoundingClientRect().top + window.scrollY;
                const containerHeight = container.offsetHeight;
                const startScroll = containerTop - window.innerHeight / 0.9; // Start parallax when the container is halfway into view

                if (scrollPosition >= startScroll && scrollPosition <= containerTop + containerHeight) {
                    const relativeScroll = scrollPosition - startScroll;
                    // Adjust the multipliers to change the speed of the parallax effect
                    if (layer1) layer1.style.transform = `translateY(${relativeScroll * -0.1}px)`; // Speed for layer 1
                    if (layer2) layer2.style.transform = `translateX(${relativeScroll * 0.1}px)`; // Speed for layer 2
                    if (layer3) layer3.style.transform = `translateY(${relativeScroll * -0.1}px) translateX(${relativeScroll * 0.15}px)`; // Speed for layer 3
                    if (layer4) layer4.style.transform = `translateY(${relativeScroll * 0.15}px)`; // Speed for layer 4
                    if (layer5) layer5.style.transform = `translateY(${relativeScroll * 0.15}px) translateX(${relativeScroll * 0.15}px)`; // Speed for layer 5
                    if (layer6) layer6.style.transform = `translateX(${relativeScroll * -0.15}px)`; // Speed for layer 6
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container ref={containerRef} maxW='50%' position="relative">
            <Image src='/Round Cube Purple.png' alt='About Us' className="parallax parallax-layer-1" bottom={0} left={100} />
            <Image src='/Sphere Purple.png' alt='About Us' className="parallax parallax-layer-2" top={-100} right={0} height={150} />
            <Image src='/Cone Green.png' alt='About Us' className="parallax parallax-layer-3" bottom={0} right={100} />
            <Image src='/Round Cube Green.png' alt='About Us' className="parallax parallax-layer-4" top={-30} left={50} />
            <Image src='/Cone Purple.png' alt='About Us' className="parallax parallax-layer-5" top={-20} left={200} />
            <Image src='/Sphere Green.png' alt='About Us' className="parallax parallax-layer-6" top={-50} right={100} />
        </Container>
    );
}

export default AboutUsShapes;