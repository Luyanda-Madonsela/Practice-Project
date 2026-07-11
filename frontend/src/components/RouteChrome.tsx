"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

type RouteChromeProps = {
  children: ReactNode;
};

const HIDDEN_CHROME_ROUTES = ["/admindashboard", "/userdashboard"];

export default function RouteChrome({ children }: RouteChromeProps) {
  const pathname = usePathname();

  const hideChrome = HIDDEN_CHROME_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <>
      {!hideChrome && <Navigation />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
