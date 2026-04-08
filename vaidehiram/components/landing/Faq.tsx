import { Text, View } from 'react-native';

import { faq, faqSection } from '@/constants/config';

export function Faq() {
  return (
    <View className="bg-cream px-5 py-14 md:px-10">
      <View className="mx-auto w-full max-w-3xl">
        <Text className="font-display text-ink-900 mb-10 text-center text-2xl font-semibold md:text-3xl">
          {faqSection.title}
        </Text>
        <View className="flex-col gap-6">
          {faq.map((item, i) => (
            <View
              key={i}
              className="bg-white border-ink-900/8 rounded-2xl border p-5 shadow-sm shadow-ink-900/5 md:p-6">
              <Text className="font-display text-ink-900 mb-2 text-lg font-semibold">{item.question}</Text>
              <Text className="font-body text-ink-700 text-base leading-relaxed">{item.answer}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
