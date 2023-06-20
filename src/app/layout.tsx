import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmad Bilal",
  description: "hackathon-project by ahmadbilal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:max-w-6xl md:mx-auto px-5 md:px-0`}>
        <main className="">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
