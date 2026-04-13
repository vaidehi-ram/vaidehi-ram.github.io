import { Text, View } from 'react-native';

import { SectionHeading } from '@/components/landing/SectionHeading';
import { testimonialsSection } from '@/constants/config';
import testimonialsData from '@/testimonials.json';

type Testimonial = (typeof testimonialsData)[number];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <View className="border-babySky/50 from-white/98 to-babySky/10 shadow-card relative w-full overflow-hidden rounded-3xl border-2 bg-gradient-to-b p-6 shadow-lift backdrop-blur-sm web:transition-all web:duration-300 web:hover:-translate-y-1 web:hover:shadow-card">
      <Text
        className="font-display text-blush-200 pointer-events-none absolute -left-1 -top-2 text-7xl font-bold leading-none">
        &ldquo;
      </Text>
      <View className="relative">
        <Text className="mb-3 text-sm tracking-wide text-crayonCoral">★★★★★</Text>
        <Text className="font-body text-ink-800 relative z-10 mb-5 text-base leading-relaxed md:text-[17px]">
          {item.quote}
        </Text>
        <View className="border-ink-900/8 border-t border-dotted pt-4">
          <Text className="font-display text-ink-900 text-sm font-bold">{item.author}</Text>
          <Text className="font-body text-ink-500 mt-0.5 text-sm">{item.relation}</Text>
        </View>
      </View>
    </View>
  );
}

export function Testimonials() {
  return (
    <View className="from-sunshine/20 via-cream to-crayonLilac/20 bg-gradient-to-b px-5 py-16 md:px-10 md:py-20">
      <View className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          subtitle={testimonialsSection.noteDesktop}
        />
        {/* Always vertical on mobile; side-by-side on desktop */}
        <View className="flex-col gap-6 md:flex-row md:flex-wrap md:justify-center" style={{ flexDirection: 'column' }}>
          {testimonialsData.map((item) => (
            <View key={item.id} className="w-full md:w-[31%] md:flex-grow" style={{ width: '100%', alignSelf: 'stretch' }}>
              <TestimonialCard item={item} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
