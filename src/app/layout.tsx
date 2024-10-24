import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { QueryProvider } from "@/components/query-provider";
import "./globals.css";

const rethinksans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-rethink-sans',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinksans.variable} font-sans antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
