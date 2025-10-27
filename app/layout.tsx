// app/layout.tsx

import { Inter } from 'next/font/google';

// We import the Tailwind CSS file here. This is the CORRECT way.
// Ensure you still have the `globals.css` file in /app that only contains 
// the Tailwind imports, like: @tailwind base; @tailwind components; @tailwind utilities;
import './globals.css'; 

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The inter.className applies the font to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
