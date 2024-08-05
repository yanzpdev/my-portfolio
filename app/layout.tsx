import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/provider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata:Metadata = {
  title: "yanzpdev",
  description: "Portfolio website."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body> 
    </html>
  );
}
