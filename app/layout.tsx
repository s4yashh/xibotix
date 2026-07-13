import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xibotix — Intelligence in Motion",
  description: "Humanoid robotics and rehabilitation technology for a more capable world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
