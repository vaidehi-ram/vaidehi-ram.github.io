import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

import { testimonialsSection } from '@/constants/config';
import testimonialsData from '@/testimonials.json';

type Testimonial = (typeof testimonialsData)[number];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <View className="bg-white border-ink-900/8 w-full shrink-0 rounded-2xl border p-6 shadow-sm shadow-ink-900/5 md:flex-1 md:min-w-0">
      <Text className="font-body text-ink-900 mb-4 text-base leading-relaxed">&ldquo;{item.quote}&rdquo;</Text>
      <Text className="font-display text-ink-900 text-sm font-semibold">{item.author}</Text>
      <Text className="font-body text-ink-500 text-sm">{item.relation}</Text>
    </View>
  );
}

export function Testimonials() {
  const { width } = useWindowDimensions();
  const isNarrow = width < 768;

  if (!isNarrow) {
    return (
      <View className="bg-white px-5 py-14 md:px-10">
        <View className="mx-auto w-full max-w-5xl">
          <Text className="font-display text-ink-900 mb-2 text-center text-2xl font-semibold md:text-3xl">
            {testimonialsSection.title}
          </Text>
          <Text className="font-body text-ink-500 mx-auto mb-10 max-w-2xl text-center">
            {testimonialsSection.noteDesktop}
          </Text>
          <View className="flex-col gap-6 md:flex-row md:flex-wrap">
            {testimonialsData.map((item) => (
              <View key={item.id} className="md:w-[31%] md:flex-grow">
                <TestimonialCard item={item} />
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }

  const cardWidth = Math.min(width - 48, 340);

  return (
    <View className="bg-white px-5 py-14">
      <View className="mx-auto w-full max-w-5xl">
        <Text className="font-display text-ink-900 mb-2 text-center text-2xl font-semibold">
          {testimonialsSection.title}
        </Text>
        <Text className="font-body text-ink-500 mx-auto mb-8 max-w-xl text-center text-sm">
          {testimonialsSection.noteMobile}
        </Text>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToAlignment="center"
          contentContainerStyle={{ gap: 16, paddingHorizontal: 8 }}>
          {testimonialsData.map((item) => (
            <View key={item.id} style={{ width: cardWidth }}>
              <TestimonialCard item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
