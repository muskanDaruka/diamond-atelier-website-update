import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import AppLayout from "@/layout/app/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});


export const metadata = {
  title: "Diamond Atelier Website",
  description: "Wide range of Diamond collections",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`font-playwrite ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <AppLayout>
        {children}
        </AppLayout>
      </body>
    </html>
  );
}
