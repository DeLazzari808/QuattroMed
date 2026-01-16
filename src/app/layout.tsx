import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "QuatroMed Telemedicina Brasil | Acesso médico online sempre que você precisar",
  description: "Consultas médicas online a partir de valores acessíveis para todo o Brasil. Atendimento rápido, humano e 100% digital.",
  icons: {
    icon: "/ICONE-C.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

