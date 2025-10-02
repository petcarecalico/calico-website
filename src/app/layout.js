import "./globals.css";
import Header from "@/components/Header";
import { DownloadPopupProvider } from "../context/DownloadPopupContext";
import DownloadPopupRoot from "../components/DownloadPopupRoot";
import { Poppins, Prata, Inter } from "next/font/google";
import AOSProvider from "@/components/AOSprovider";
import "aos/dist/aos.css";


// Poppins (general UI font)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Prata (serif display font for headings)
const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
});

// Inter (modern sans for body text, optional)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Calico",
  description: "Official Calico Website",
  icons: {
    icon: [
      { url: "/icons/favNewCropped.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favNewCropped.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/favNewCropped.png", // Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        <DownloadPopupProvider>
          {/* Global Navbar */}
          <Header />
          {/* Download Popup Root */}
          <DownloadPopupRoot />
          <AOSProvider/>
          {/* Page Content */}
          <main className="pt-[100px] ">{children}</main>
        </DownloadPopupProvider>
      </body>
    </html>
  );
}
