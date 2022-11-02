/* eslint-disable @next/next/no-head-element */

import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <title>Home App</title>
        <link rel="preload" href="/fonts/Futura-Bold.ttf" as="font" />
        <link rel="preload" href="/fonts/Souvenir.ttf" as="font" />
      </Head>

      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-black-1 font-souvenir text-gray-200 ">
        <div className={"flex h-full flex-1 flex-col text-3xl"}>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
