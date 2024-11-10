import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import TanstackProvider from "@/providers/tanstackQuery";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Herbs of the world",
  description: "Healthy human, Healthy pets, healthy Horses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <title>Herbs of the world</title>
      <meta name="description" content={metadata.description || ''} />
    </head>
    <body className={inter.className}>
      <TanstackProvider>
        <UserProvider>
          {children}
          <Toaster />
        </UserProvider>
      </TanstackProvider>
    </body>
  </html>
  );
}
