export const metadata = {
  title: "Download Calico App | Calico Pet Care",
  description:
    "Download the Calico app for pet parents and businesses. Book appointments, track health records, and manage your pet care — all in one place.",
};

export default function DownloadPageLayout({ children }) {
  return (
    <>
      <style>{`
        /* Hide the global fixed header on this page only */
        nav.fixed {
          display: none !important;
        }
        /* Remove the top padding added by the root layout's <main> for this page */
        main {
          padding-top: 0 !important;
        }
      `}</style>
      {children}
    </>
  );
}
