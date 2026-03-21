import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  lang: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, lang }) => {
  const canonicalUrl = import.meta.env.VITE_CANONICAL_URL || 'https://bzorro.dev';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brayan Zorro",
    "url": canonicalUrl,
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://linkedin.com/in/brayan-zorro-b56ba427a",
      "https://github.com/brayan083"
    ]
  };

  const ogImage = `${canonicalUrl}/og-image.png`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content="Brayan Zorro" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
