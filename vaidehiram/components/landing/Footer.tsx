import { Text, View } from 'react-native';

import { business, footer } from '@/constants/config';

export function Footer() {
  return (
    <View nativeID="contact" className="from-ink-950 to-ink-900 bg-gradient-to-b px-5 pb-14 pt-0 md:px-10">
      <View className="mb-8 w-full flex-row">
        <View className="bg-sunshine h-1.5 flex-1" />
        <View className="bg-crayonCoral h-1.5 flex-1" />
        <View className="bg-babySky h-1.5 flex-1" />
        <View className="bg-crayonLilac h-1.5 flex-1" />
        <View className="bg-crayonGrass h-1.5 flex-1" />
        <View className="bg-crayonPink h-1.5 flex-1" />
      </View>
      <View className="mx-auto w-full max-w-6xl">
        <Text className="mb-2 text-center text-3xl">🧸</Text>
        <Text className="font-body text-ink-400 mb-10 text-center text-base">
          {business.shortName} · {business.area}
        </Text>
        <Text className="font-body text-center text-xs text-white/45">{footer.note}</Text>
      </View>
    </View>
  );
}
