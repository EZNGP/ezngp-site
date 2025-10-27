// app/layout.tsx
export const metadata = {
  title: "EZN Global Properties Ltd",
  description: "Luxury Real Estate, Shortlets, and Global Investment Opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#fff",
          color: "#111",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}

