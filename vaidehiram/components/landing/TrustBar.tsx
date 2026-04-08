import { Text, View } from 'react-native';

import { trustBadges, trustSection, type TrustStatus } from '@/constants/config';

function statusClasses(status: TrustStatus): string {
  switch (status) {
    case 'Completed':
      return 'bg-sage-soft text-sage-deep border-sage/30';
    case 'Pending':
      return 'bg-amber-50 text-amber-900 border-amber-200';
    default:
      return 'bg-ink-900/5 text-ink-700 border-ink-900/10';
  }
}

export function TrustBar() {
  return (
    <View className="bg-cream border-ink-900/8 border-b border-t px-5 py-12 md:px-10">
      <View className="mx-auto w-full max-w-5xl">
        <Text className="font-display text-ink-900 mb-2 text-center text-2xl font-semibold md:text-3xl">
          {trustSection.title}
        </Text>
        <Text className="font-body text-ink-500 mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed">
          {trustSection.subtitle}
        </Text>
        <View className="flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
          {trustBadges.map((badge) => (
            <View
              key={badge.id}
              className={`flex-1 rounded-2xl border p-5 md:min-w-[240px] md:max-w-[280px] ${statusClasses(badge.status)}`}>
              <Text className="font-display text-ink-900 mb-1 text-lg font-semibold">{badge.label}</Text>
              <Text className="font-body mb-1 text-sm font-medium opacity-90">Status: {badge.status}</Text>
              {badge.detail ? (
                <Text className="font-body text-sm leading-relaxed opacity-80">{badge.detail}</Text>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
