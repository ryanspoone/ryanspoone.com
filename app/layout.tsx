import type { Metadata } from "next";
import "./globals.css";
import "@/styles/App.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Ryan Spoone - CTO at Delivr.ai",
  description: "CTO at Delivr.ai, building deterministic identity resolution and person-level intent infrastructure. Hands-on with Rust, Go, TypeScript, and large-scale data engineering.",
  icons: {
    icon: [
      { url: '/images/logo.png' },
    ],
    apple: [
      { url: '/images/logo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
