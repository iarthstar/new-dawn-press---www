import { ORG_NAME, WEBSITE_URL } from "@/content";

export const ORG_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: `${ORG_NAME} Services Pvt. Ltd.`,
    alternateName: `${ORG_NAME}`,
    url: WEBSITE_URL,
    logo: "",
    sameAs: WEBSITE_URL,
  };
  
  export const WEBSITE_JSON_LD = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: `${ORG_NAME} Services`,
    url: WEBSITE_URL,
  };