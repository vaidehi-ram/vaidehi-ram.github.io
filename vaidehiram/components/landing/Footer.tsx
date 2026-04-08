import * as Linking from 'expo-linking';
import { Pressable, Text, View } from 'react-native';

import { business, contact, footer } from '@/constants/config';

export function Footer() {
  return (
    <View className="bg-ink-900 px-5 py-12 md:px-10">
      <View className="mx-auto w-full max-w-5xl">
        <Text className="font-display mb-2 text-center text-xl font-semibold text-white">{footer.contactHeading}</Text>
        <Text className="font-body mb-6 text-center text-rose-soft/90">{business.shortName} · {business.area}</Text>
        <View className="mb-8 flex-col items-center gap-3 md:flex-row md:justify-center md:gap-6">
          <Pressable
            onPress={() => Linking.openURL(`mailto:${contact.email}`)}
            accessibilityRole="link"
            className="active:opacity-80">
            <Text className="font-body text-sage text-base underline decoration-sage/50">{contact.email}</Text>
          </Pressable>
          <Pressable
            onPress={() => Linking.openURL(`tel:${contact.phone.replace(/\s/g, '')}`)}
            accessibilityRole="link"
            className="active:opacity-80">
            <Text className="font-body text-sage text-base underline decoration-sage/50">{contact.phone}</Text>
          </Pressable>
          {contact.whatsappUrl ? (
            <Pressable onPress={() => Linking.openURL(contact.whatsappUrl)} accessibilityRole="link">
              <Text className="font-body text-sage text-base underline decoration-sage/50">WhatsApp</Text>
            </Pressable>
          ) : null}
          {contact.instagramUrl ? (
            <Pressable onPress={() => Linking.openURL(contact.instagramUrl)} accessibilityRole="link">
              <Text className="font-body text-sage text-base underline decoration-sage/50">Instagram</Text>
            </Pressable>
          ) : null}
        </View>
        <Text className="font-body text-center text-xs text-white/55">{footer.note}</Text>
      </View>
    </View>
  );
}
