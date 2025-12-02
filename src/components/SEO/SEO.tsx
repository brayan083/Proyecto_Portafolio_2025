import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  lang: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, lang }) => {
  const canonicalUrl = 'https://bzorro.dev';

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

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
