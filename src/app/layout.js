import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600", "700"], // add normal, medium, semibold, bold
  variable: "--font-poppins",
});

export const metadata = {
  title: "Calico",
  description: "Official Calico Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Global Navbar */}
        <Header />

        {/* Page Content */}
        <main className="pt-[100px]">{children}</main>
      </body>
    </html>
  );
}
