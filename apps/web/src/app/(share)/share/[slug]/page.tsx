import { Metadata } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { APP_BASE_URL } from '@documenso/lib/constants/app';

type SharePageProps = {
  params: { slug: string };
};

export function generateMetadata({ params: { slug } }: SharePageProps) {
  return {
    metadataBase: new URL('https://sign.interflare.de'),
    title: 'Interflare Sign',
    description: 'Ich habe soeben ein Dokument mit Interflare unterzeichnet!',
    openGraph: {
      title: 'Interflare Sign',
      description: 'Unterschrieben mit Interflare!',
      type: 'website',
      images: [`${APP_BASE_URL}/share/${slug}/opengraph`],
    },
    twitter: {
      site: '@documenso',
      card: 'summary_large_image',
      images: [`${APP_BASE_URL}/share/${slug}/opengraph`],
      description: 'Unterschrieben mit Interflare!',
    },
  } satisfies Metadata;
}

export default function SharePage() {
  const userAgent = headers().get('User-Agent') ?? '';

  // https://stackoverflow.com/questions/47026171/how-to-detect-bots-for-open-graph-with-user-agent
  if (/bot|facebookexternalhit|WhatsApp|google|bing|duckduckbot|MetaInspector/i.test(userAgent)) {
    return null;
  }

  redirect(process.env.NEXT_PUBLIC_MARKETING_URL ?? 'http://localhost:3001');
}
