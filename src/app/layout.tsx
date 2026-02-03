import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SaiyoniX | Engineering Transformative Evolution",
  description:
    "SaiyoniX is a technology-driven collective inspired by the Manipuri word Saiyon, focused on transformative evolution and disruptive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
