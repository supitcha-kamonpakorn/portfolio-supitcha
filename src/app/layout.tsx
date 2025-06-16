import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Supitcha Kamonpakorn | Data Analyst',
  description:
    'Data Analyst with expertise in Excel, SQL, Python, R, Power BI, and more. Passionate about data visualization and insights.',
  keywords: ['Data Analyst', 'Portfolio', 'Supitcha', 'Excel', 'SQL', 'Python', 'Power BI', 'Data Visualization'],
  authors: [{ name: 'Supitcha Kamonpakorn' }],
  openGraph: {
    title: 'Portfolio - Supitcha Kamonpakorn',
    description: 'Data Analyst Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
