export const SITE_NAME = 'Ribbit';
export const SITE_DESCRIPTION = '税理士法人でエンジニアをしています。';

export const TWITTER_NAME = 'LbRibbit';
export const GITHUB_NAME = 'local-bias';
export const ZENN_NAME = 'ribbit';

type Link = {
  url: string;
  label: string;
  labelEn: string;
  memo?: string;
  icon: string;
};

export const LINKS: Link[] = [
  {
    url: 'https://ribbit.konomi.app',
    label: 'ブログ',
    labelEn: 'Blog',
    memo: 'powered by Next.js',
    icon: 'edit',
  },
  {
    url: 'https://plugin-store.konomi.app',
    label: '製品',
    labelEn: 'Products',
    memo: 'powered by Next.js',
    icon: 'star',
  },
  {
    url: 'https://icu.konomi.app',
    label: 'ポートフォリオ',
    labelEn: 'Portfolio',
    memo: 'powered by Next.js',
    icon: 'person',
  },
  {
    url: 'https://kokoroe.konomi.app',
    label: 'ドキュメントサイト',
    labelEn: 'Document Site',
    memo: 'powered by Docusaurus',
    icon: 'memo',
  },
  {
    url: 'https://kula.konomi.app',
    label: 'kintone連携サービス',
    labelEn: 'kintone related searvices',
    icon: 'zap',
  },
  { url: 'https://form.konomi.app', label: 'お問い合わせ', labelEn: 'inquiry', icon: 'help' },
];
