// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider'; // Check that this path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shan Sihogia Portfolio',
  description: 'Full-stack developer building AI-powered tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}