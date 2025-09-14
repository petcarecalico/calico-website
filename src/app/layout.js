import "./globals.css";
import Header from "@/components/Header";
import { Poppins, Prata, Inter } from "next/font/google";

// Poppins (general UI font)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
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
  weight: ["400","500","600","700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Calico",
  description: "Official Calico Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body
    className="min-h-screen overflow-x-hidden"
      >
        {/* Global Navbar */}
        <Header />
        {/* Page Content */}
        <main className="pt-[100px] ">{children}</main>
      </body>
    </html>
  );
}
