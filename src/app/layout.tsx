import './globals.css';
import { getDefaultMetadata } from '@/utils/getDefaultMetadata';
import { Montserrat } from 'next/font/google';
import Header from '@/components/shared/header/Header';
import dynamic from 'next/dynamic';
import SplashGate from '@/components/shared/splashScreen/SplashGate';
import { Manrope } from 'next/font/google';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const Footer = dynamic(() => import('@/components/shared/footer/Footer'), {
  ssr: true,
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  preload: true,
});

export const revalidate = 60;

export async function generateMetadata() {
  return {
    ...getDefaultMetadata(),
    icons: {
      apple: '/apple-touch-icon.png',
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <style>{`
          #pre-splash {
            position: fixed;
            inset: 0;
            background: #ffffff;
            z-index: 999;
            opacity: 1;
            transition: opacity 0.3s ease;
          }
          #pre-splash.hidden {
            opacity: 0;
            pointer-events: none;
          }
        `}</style>

        {/* Inline script runs before React hydrates but doesn't alter DOM structure */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (sessionStorage.getItem('splashPlayed')) {
                    const el = document.getElementById('pre-splash');
                    if (el) el.classList.add('hidden');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${manrope.variable} ${raleway.variable} flex min-h-dvh flex-col antialiased text-[14px] font-normal leading-[120%]`}
      >
        <div id="pre-splash"></div>
        <div id="root">
          <SplashGate>
            <Header />
            <main className="flex-1 pt-[86px] lg:pt-0">{children}</main>
            <Footer />
          </SplashGate>
        </div>
      </body>
    </html>
  );
}
