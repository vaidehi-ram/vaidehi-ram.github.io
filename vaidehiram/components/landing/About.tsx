import { Text, View } from 'react-native';


import { about } from '@/constants/config';

export function About() {


  return (
    <View className="from-mint/50 to-crayonLilac/15 bg-gradient-to-b px-5 py-16 md:px-10 md:py-24">
      {/* ── Philosophy card — Why quality childminding matters ── */}
      <View className="relative mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
        {/* Mint/teal gradient — visually distinct from the warm pull-quote above */}
        <View className="from-crayonGrass/40 via-mint/50 to-babySky/35 absolute inset-0 bg-gradient-to-br" />
        <View className="bg-crayonGrass/30 pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full blur-3xl" />
        <View className="bg-babySky/40 pointer-events-none absolute -bottom-8 right-0 h-36 w-36 rounded-full blur-3xl" />

        <View className="relative px-8 py-10 md:px-14 md:py-12">
          {/* Heading row */}
          <View className="mb-7 flex-row items-center gap-3">
            <Text className="text-3xl">{about.philosophyCard.emoji}</Text>
            <Text className="font-display text-ink-900 text-xl font-bold md:text-2xl">
              {about.philosophyCard.heading}
            </Text>
          </View>

          {/* Four pillars */}
          <View className="mb-7 flex-row flex-wrap gap-4">
            {about.philosophyCard.pillars.map((pillar) => (
              <View
                key={pillar.label}
                className="bg-white/70 min-w-[140px] flex-1 rounded-2xl px-4 py-4 backdrop-blur-sm">
                <Text className="mb-1 text-2xl">{pillar.icon}</Text>
                <Text className="font-display text-ink-900 mb-1 text-sm font-bold">{pillar.label}</Text>
                <Text className="font-body text-ink-700 text-xs leading-snug">{pillar.detail}</Text>
              </View>
            ))}
          </View>

          {/* Closing sentence */}
          <View className="border-white/60 rounded-xl border bg-white/40 px-5 py-4 backdrop-blur-sm">
            <Text className="font-body text-ink-800 text-sm leading-relaxed md:text-base md:leading-8">
              {about.philosophyCard.closing}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
