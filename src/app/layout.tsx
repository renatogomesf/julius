import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space_grotesk',
});

export const metadata: Metadata = {
  title: {
    template: 'julius | %s',
    default: 'julius',
  },
  description: 'Plataforma de controle financeiro pessoal.',
  icons: {
    icon: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${space_grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
