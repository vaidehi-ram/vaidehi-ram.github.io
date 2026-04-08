import { Text, View } from 'react-native';

import { about } from '@/constants/config';

export function About() {
  return (
    <View className="bg-sage-soft/60 px-5 py-14 md:px-10">
      <View className="mx-auto w-full max-w-3xl">
        <Text className="font-display text-ink-900 mb-8 text-center text-2xl font-semibold md:text-3xl">
          {about.sectionTitle}
        </Text>
        {about.paragraphs.map((p, i) => (
          <Text
            key={i}
            className="font-body text-ink-700 mb-5 text-base leading-relaxed last:mb-0 md:text-lg">
            {p}
          </Text>
        ))}
      </View>
    </View>
  );
}
