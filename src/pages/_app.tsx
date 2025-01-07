import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import DeviceCheck from '@/components/DeviceCheck';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DeviceCheck>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </DeviceCheck>
  );
}