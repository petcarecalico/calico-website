import "./globals.css";
import Header from "@/components/Header";
import { DownloadPopupProvider } from "../context/DownloadPopupContext";
import DownloadPopupRoot from "../components/DownloadPopupRoot";
import AOSProvider from "@/components/AOSprovider";
import "aos/dist/aos.css";

export const metadata = {
  title: "Book Pet Clinic Appointments Online in Bangalore | Calico",
  description: "Official Calico Website",
  icons: {
    icon: [
      { url: "/icons/favicon-new.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-new.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/favicon-new.png", // Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&family=Prata&display=swap"
          rel="stylesheet"
        />
      </head>
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
