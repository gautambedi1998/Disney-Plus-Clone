"use client";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import Header from "./components/header";
import "./globals.css";
import store from "./features/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Provider store={store}>
            <Header />
            {children}
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
