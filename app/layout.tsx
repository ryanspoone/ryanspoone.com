import type { Metadata } from "next";
import "./globals.css";
import "@/styles/App.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Ryan Spoone - Director of Engineering & Founder",
  description: "Director of Engineering turned Founder, specializing in scaling engineering teams, distributed systems, and data engineering. Currently building AI-powered developer tools at Ouroborai.",
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
