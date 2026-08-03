export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'InclusionEdge',
  domain: 'https://inclusionedge.co',
  tagline: 'Workplace Inclusion, Engineered to Hold',
  description:
    'Behaviour-first inclusion capability for intergenerational, neurodivergent-ready workforces in Singapore — discovery through measured impact.',
  locality: 'Singapore',
  email: 'hello@inclusionedge.co',
  linkedin: 'https://www.linkedin.com/company/inclusionedge',
  /** Replace with your key from web3forms.com — takes 30 seconds, no account needed. */
  web3formsKey: 'YOUR-WEB3FORMS-ACCESS-KEY',
} as const;

export const nav: NavItem[] = [
  { label: 'Approach', href: '/approach/' },
  { label: 'Programmes', href: '/programmes/' },
  { label: 'Showcase', href: '/showcase/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNav = {
  practice: [
    { label: 'Approach', href: '/approach/' },
    { label: 'Programmes', href: '/programmes/' },
  ],
  proof: [
    { label: 'Showcase', href: '/showcase/' },
    { label: 'Insights', href: '/insights/' },
  ],
  connect: [
    { label: 'Start a conversation', href: '/contact/' },
    { label: 'LinkedIn', href: site.linkedin },
  ],
} as const;
