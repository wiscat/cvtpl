import Head from 'next/head';

type SeoProps = {
  description?: string,
  title?: string,
  keywords?: string,
};

export default function Seo({ description: propDescription, title: propTitle, keywords: propKeywords }: SeoProps) {
  const title = propTitle ? `${propTitle}` : 'Vladislav Shishporenok';
  const description = propDescription || 'CV by Vladislav Shishporenok';
  const keywords = propKeywords || 'Vladislav,Shishporenok';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="worldcitizen.web.app" />
    </Head>
  );
}
