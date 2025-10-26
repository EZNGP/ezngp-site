// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'EZN Global Properties',
  description: 'Luxury Real Estate · Shortlets · Travel · EZN Global Properties Ltd'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
