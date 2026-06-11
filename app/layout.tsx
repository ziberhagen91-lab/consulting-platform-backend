import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Consulting Platform",
  description: "Consulting Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-black text-white">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}