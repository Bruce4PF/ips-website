import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode('#FFFFFF', '#151515')(props),
      backgroundImage: mode(
        'radial-gradient(rgba(0, 0, 0, 0.6) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.6) 0.5px, transparent 1px)',
        'radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.6) 0.5px, transparent 1px)'
      )(props),
      backgroundSize: '100px 100px, 100px 100px',
      backgroundPosition: '0 0, 50px 50px',
    },
  }),
};

const fonts = {
  heading: `'SF Pro Display', sans-serif`,
  body: `'SF Pro Display', sans-serif`,
}

const components = {
  // Style components here but idk why it doesn't work for me
};

const theme = extendTheme({
  fonts,
  config,
  styles,
});

export default theme;