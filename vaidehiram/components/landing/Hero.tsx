import * as Linking from 'expo-linking';
import { Pressable, Text, View } from 'react-native';

import { business, hero, contact } from '@/constants/config';

export function Hero() {
  const onContact = () => {
    Linking.openURL(`mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry — ${business.shortName}`)}`);
  };

  return (
    <View className="bg-rose-soft px-5 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
      <View className="mx-auto w-full max-w-5xl">
        <Text className="font-body text-rose-deep mb-2 text-sm font-semibold uppercase tracking-wide">
          {business.shortName}
        </Text>
        <Text className="font-body text-ink-500 mb-6 text-base italic md:text-lg">&ldquo;{business.tagline}&rdquo;</Text>
        <Text
          className="font-display text-ink-900 mb-3 text-3xl font-semibold leading-tight md:text-5xl md:leading-tight"
          accessibilityRole="header">
          {hero.headline}
        </Text>
        <Text className="font-body text-ink-700 mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
          {hero.subline}
        </Text>
        <Pressable
          onPress={onContact}
          accessibilityRole="button"
          className="bg-rose-deep active:opacity-90 self-start rounded-full px-8 py-3.5 shadow-md shadow-rose-900/20">
          <Text className="font-display text-center text-base font-semibold text-white">{hero.primaryCtaLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}
