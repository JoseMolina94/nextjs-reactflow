'use client';

import { CacheProvider } from '@emotion/react';
import { ReactNode } from 'react';
import createEmotionCache from '@/helpers/emotion/createEmotionCache';
import { useState } from 'react';

interface EmotionProviderProps {
  children: ReactNode;
}

export default function EmotionProvider({ children }: EmotionProviderProps) {
  const [cache] = useState(() => createEmotionCache());

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
