import HireMe from "./components/HireMe";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Portafolio Andres!",
  description: "Con un poquito de Next, Tailwind y mucho amor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} font-mont bg-light w-full min-h-screen `}
      >
        <Navbar />
        {children}
        <Footer />
        <HireMe />
      </body>
    </html>
  );
}
