import Head from 'expo-router/head';
import { ScrollView, View } from 'react-native';

import { About } from '@/components/landing/About';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { Testimonials } from '@/components/landing/Testimonials';
import { TrustBar } from '@/components/landing/TrustBar';
import { business, seo, site } from '@/constants/config';

const canonicalUrl = site.canonicalBaseUrl.replace(/\/$/, '') + '/';

export default function Index() {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={business.shortName} />
        {seo.ogImageUrl ? <meta property="og:image" content={seo.ogImageUrl} /> : null}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.ogImageUrl ? <meta name="twitter:image" content={seo.ogImageUrl} /> : null}
      </Head>
      <View className="min-h-full flex-1 bg-cream">
        <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
          <Hero />
          <TrustBar />
          <Testimonials />
          <About />
          <Faq />
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
