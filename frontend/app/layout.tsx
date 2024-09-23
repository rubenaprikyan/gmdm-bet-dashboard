import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import ErrorContainer from '@/containers/ErrorContainer';
import ThemeContainer from '@/containers/ThemeContainer';
import QueryContainer from '@/containers/QueryContainer';
import AppLayout from '@/app/AppLayout';

import { Toaster } from '@/components/ui/sooner';

import './globals.css';

const inter = Poppins({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Sport Events',
  description: 'Sportsbook app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth' }}
    >
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no'
      />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='mobile-web-app-capable' content='yes' />
      <body className={inter.className}>
        <ErrorContainer>
          <ThemeContainer>
            <QueryContainer>
              <AppLayout>{children}</AppLayout>
            </QueryContainer>
          </ThemeContainer>
          <Toaster position={'top-right'} />
        </ErrorContainer>
      </body>
    </html>
  );
}
