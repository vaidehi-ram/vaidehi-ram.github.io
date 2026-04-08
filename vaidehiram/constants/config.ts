/**
 * Edit this file to update all marketing copy, compliance statuses, and contact details.
 * Status values drive badge colours on the trust bar (Pending vs Completed).
 */

export type TrustStatus = 'Pending' | 'Completed' | 'N/A' | 'If applicable';

export const business = {
  /** Shown in footer and hero accent */
  shortName: 'Little Oak Childminding',
  /** Formal or full business name if different */
  legalName: 'Little Oak Childminding',
  tagline: 'Warm, reliable care in a home-from-home setting',
  /** General area (no full address required on public site) */
  area: 'Dublin area',
} as const;

export const contact = {
  email: 'hello@example.com',
  phone: '+353 00 000 0000',
  /** Optional WhatsApp link (https://wa.me/353...) — leave empty string to hide */
  whatsappUrl: '',
  /** Instagram profile URL — leave empty to hide */
  instagramUrl: '',
} as const;

/**
 * Replace with your live URL after deploy (used for Open Graph).
 * For GitHub Project Pages this is often https://<user>.github.io/<repo>/
 */
export const site = {
  canonicalBaseUrl: 'https://yourusername.github.io/vaidehiram',
} as const;

export const seo = {
  title: `${business.shortName} | Registered childminder in ${business.area}`,
  description: `${business.shortName}: nurturing childminding with clear routines, outdoor play, and open communication. ${business.area}.`,
  /** Optional absolute image URL for social previews */
  ogImageUrl: '',
} as const;

export const hero = {
  headline: 'Calm, joyful days for little learners',
  subline:
    'Home-based childminding with gentle structure, outdoor play, and partnership with families. Spaces limited—say hello to check availability.',
  primaryCtaLabel: 'Contact me',
} as const;

export const trustBadges: {
  id: string;
  label: string;
  status: TrustStatus;
  detail?: string;
}[] = [
  {
    id: 'garda',
    label: 'Garda Vetting',
    status: 'Pending',
    detail: 'Application in progress',
  },
  {
    id: 'first-aid',
    label: 'Paediatric First Aid',
    status: 'Pending',
    detail: 'Course scheduled',
  },
  {
    id: 'tusla',
    label: 'Tusla Registered',
    status: 'If applicable',
    detail: 'Status per current registration',
  },
];

export const about = {
  sectionTitle: 'Why I love childminding',
  paragraphs: [
    'Children remind us to notice the small wonders—a robin in the garden, the first successful pour from a jug, a new friendship over shared blocks. Supporting those moments in a calm, predictable environment is what drew me to childminding.',
    'I plan gentle rhythms for the day: time outdoors, shared meals, stories, and plenty of space for unstructured play. You will get honest updates and practical tips so we stay aligned on sleep, meals, and developmental leaps.',
    'Families trust me because I communicate early, listen well, and treat every child as an individual. I would love to meet you and learn how we can support your little one.',
  ],
} as const;

export const trustSection = {
  title: 'Peace of mind',
  subtitle: 'Clear, honest status on the qualifications families ask about first.',
} as const;

export const testimonialsSection = {
  title: 'Kind words from families',
  noteDesktop: 'Reviews are anonymised; replace with real testimonials when you are ready.',
  noteMobile: 'Swipe sideways to read more. Replace copy in `testimonials.json` anytime.',
} as const;

export const faqSection = {
  title: 'Questions parents ask',
} as const;

export const faq = [
  {
    question: 'What ages do you take?',
    answer:
      'Typically early years; enquiries welcome so we can confirm fit based on current ratios and registration.',
  },
  {
    question: 'What are your hours?',
    answer:
      'Core hours are agreed per family—share your schedule when you get in touch and we can see if it works.',
  },
  {
    question: 'Do you offer part-time places?',
    answer:
      'Yes, when available. Part-time contracts depend on how sessions align with other families.',
  },
  {
    question: 'How do you handle settling in?',
    answer:
      'Gradual settling with short visits where possible, clear handover notes, and open communication so your child feels secure.',
  },
] as const;

export const footer = {
  note: `© ${new Date().getFullYear()} ${business.legalName}. All rights reserved.`,
  contactHeading: 'Get in touch',
} as const;
