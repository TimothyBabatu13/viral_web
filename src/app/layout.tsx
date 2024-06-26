import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   // title: "Viral",
//   description: "Hair stylist",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#171717] py-[20px] text-[#FAFAFA]`}>
      <main className="w-[90%] mx-auto h-[90vh] flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </main>
      </body>
    </html>
  );
}
