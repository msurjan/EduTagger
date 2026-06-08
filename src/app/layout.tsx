import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduTagger | Biblioteca Metalogénica de Graiph",
  description: "Aprende metalogénesis a través de testigos de sondaje reales utilizando el método inductivo y el ciclo de Kolb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
