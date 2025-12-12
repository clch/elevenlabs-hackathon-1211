import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Interactive Alarm Clock",
  description: "An interactive alarm clock that switches agents after 30 seconds"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


