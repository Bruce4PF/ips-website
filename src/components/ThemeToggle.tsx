import { IconButton, chakra, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const CustomBg = useColorModeValue('#FFFFFF', '#292D32');
  const CustomHoverBg = useColorModeValue('#e4e7eb', '#373b40');

  const innerShadow = useColorModeValue(
    '2px 2px 6px rgba(174, 174, 192, 0.40) inset, -2px -2px 6px #FFFFFF inset', // Light mode shadow
    '2px 2px 6px rgba(8, 8, 14, 0.40) inset, -2px -2px 6px #31373E inset'  // Dark mode shadow
  );

  const CustomIconButton = chakra(IconButton, {
    baseStyle: {
      boxShadow: 'transparent',
      _hover: {
        bg: 'transparent',
        bgOpacity: '0%',
      }
    }
  });

  return (
    <CustomIconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
      bg={'transparent'}
    />
  );
};

export default ThemeToggle;
