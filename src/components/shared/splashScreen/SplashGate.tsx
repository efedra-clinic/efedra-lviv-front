'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const LottieSplashScreen = dynamic(() => import('./LottieSplashScreen'), {
  ssr: false,
});

const MIN_DURATION = 2500;

export default function SplashGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false); // page/assets loaded
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const preSplash = document.getElementById('pre-splash');
    const alreadyPlayed = sessionStorage.getItem('splashPlayed');

    // If splash already played, hide pre-splash immediately and skip splash
    if (alreadyPlayed) {
      preSplash?.classList.add('hidden');
      setShowSplash(false);
      setIsLoaded(true);
      return;
    }

    // If not played, wait for fonts and window load
    const startTime = Date.now();
    const fontsPromise = document.fonts
      ? document.fonts.ready
      : Promise.resolve();
    const windowLoadPromise = new Promise<void>(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve());
    });

    Promise.any([fontsPromise, windowLoadPromise]).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => {
        // Hide pre-splash and mark splash as played
        preSplash?.classList.add('hidden');
        sessionStorage.setItem('splashPlayed', 'true');
        setIsLoaded(true);
        // Hide splash to trigger exit animation (0.6s duration)
        setShowSplash(false);
      }, remaining);
    });
  }, []);

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div className="relative z-0">{children}</div>

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-primary text-white"
          >
            <LottieSplashScreen visible />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
