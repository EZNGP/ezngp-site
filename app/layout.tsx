import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EZN Global Properties Ltd',
  description: 'Luxury Real Estate, Shortlets, and Global Investment Opportunities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

