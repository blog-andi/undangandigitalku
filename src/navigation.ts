import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pages',
      links: [
        {
          text: 'Undangan Pernikahan',
          href: getPermalink('tema/undangan-pernikahan'),
        },
        {
          text: 'Undangan Ulang Tahun',
          href: getPermalink('tema/undangan-ulang-tahun'),
        },
        {
          text: 'Undangan Aqikah',
          href: getPermalink('/tema/undangan-aqikah'),
        },
        {
          text: 'Undangan Khitanan',
          href: getPermalink('/tema/undangan-khitanan'),
        },
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
      ],
    },
    {
      text: 'Menu',
      links: [
        {
          text: 'Pricing',
          href: getPermalink('/landing/pricing'),
        },
        {
          text: 'About',
          href: getPermalink('/landing/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/landing/contact'),
        },
        {
          text: 'Privacy',
          href: getPermalink('/landing/privacy'),
        },
        {
          text: 'Terms',
          href: getPermalink('/landing/terms'),
        },
      ],
    },
    {
      text: 'Artikel',
      links: [
        {
          text: 'Semua Artikel',
          href: getBlogPermalink(),
        },
        {
          text: 'Artikel Utama',
          href: getPermalink('undangan-digital-pekanbaru', 'post'),
        },
        {
          text: 'Kategori: Blog',
          href: getPermalink('blog', 'category'),
        },
        {
          text: 'Tag: Undangan Digital',
          href: getPermalink('undangan-digital', 'tag'),
        },
        {
          text: 'Tag: Pernikahan',
          href: getPermalink('pernikahan', 'tag'),
        },
        {
          text: 'Tag: Pekanbaru',
          href: getPermalink('pekanbaru', 'tag'),
        },
      ],
    },
    {
      text: 'Nanya2 Dulu',
      href: 'https://wa.me/6289519865963',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6289519865963' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://undangandigitalpekanbaru.web.id"> Undangan Digital Pekanbaru</a> · All rights reserved.
  `,
};
