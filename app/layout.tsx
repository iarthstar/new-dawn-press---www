import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ORG_JSON_LD, WEBSITE_JSON_LD } from "@/content/seo";
import { Footer, Header } from "@/lib/ui";
import { PageContainer } from "@/lib/ui/utils";
import StructuredData from "@/lib/utils/structured-data";
// import StructuredData from '@/utils/structured-data'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Dawn Press",
  description: "Voice of Indian Mango Man",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <StructuredData jsonLd={ORG_JSON_LD} />
      )}
      {process.env.NODE_ENV === "production" && (
        <StructuredData jsonLd={WEBSITE_JSON_LD} />
      )}

      <body className={inter.className}>
        <PageContainer>
          {/* HEADER */}
          <Header />

          {/* MAIN */}
          {children}

          {/* FOOTER */}
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}
