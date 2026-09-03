import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import GetCallbackModal from "./components/GetCallbackModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ScrollProgress />
        <GetCallbackModal />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
