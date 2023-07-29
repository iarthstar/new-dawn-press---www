"use client";

const StructuredData = ({ jsonLd }: { jsonLd: any }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />
);

export default StructuredData;
