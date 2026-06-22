import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Balasaani — AI Automation Consultant & Freelancer",
  description:
    "Helping businesses save time through AI automations, AI agents, and modern websites. Book a free consultation to streamline your workflows and generate leads.",
  keywords: [
    "AI Automation",
    "AI Agents",
    "Business Websites",
    "Lead Generation",
    "Freelancer",
    "Vishal Balasaani",
    "n8n Automation",
    "Workflow Automation",
  ],
  authors: [{ name: "Vishal Balasaani" }],
  creator: "Vishal Balasaani",
  openGraph: {
    title: "Vishal Balasaani — AI Automation Consultant & Freelancer",
    description:
      "Helping businesses save time through AI automations, AI agents, and modern websites.",
    url: "https://vishalbalasaani.com",
    siteName: "Vishal Balasaani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Balasaani — AI Automation Consultant",
    description:
      "AI automations, AI agents, and business websites that help companies reduce manual work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vishal Balasaani",
              description:
                "AI Automation Consultant helping businesses save time through AI automations, AI agents, and modern websites.",
              url: "https://vishalbalasaani.com",
              telephone: "8520936604",
              email: "vishalbalasaani04@gmail.com",
              serviceType: [
                "AI Automation",
                "AI Agents",
                "Web Development",
                "Lead Generation",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
