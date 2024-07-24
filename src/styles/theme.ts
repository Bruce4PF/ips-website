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
      bg: mode('#FFFFFF', '#292D32')(props),
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