import { Inter, Montserrat, EB_Garamond, Arimo} from "next/font/google";
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

const arimo = Arimo({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap', 
  variable: "--font-arimo"
});

const ebGaramond = EB_Garamond({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap', 
  variable: "--font-ebgaramond"
});

export const metadata = {
  title: "Diamond Atelier Website",
  description: "Wide range of Diamond collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-playwrite ${inter.variable} ${montserrat.variable} ${ebGaramond.variable} ${arimo.variable} antialiased font-oldstandard font-migra`}
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
