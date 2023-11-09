import { Helmet } from 'react-helmet';

export const StructuredData = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://www.noo.cash",
    "name": "noo.cash",
    "description": "Your trusted online payment platform for secure and hassle-free digital transactions. Join the cashless revolution with Noo.Cash.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.noo.cash/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default StructuredData;
