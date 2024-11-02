import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simmer",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
