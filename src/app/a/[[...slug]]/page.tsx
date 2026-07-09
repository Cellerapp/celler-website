"use client";
import dynamic from "next/dynamic";

const AppSella = dynamic(() => import("@/appsella"), { ssr: false });

export default function SellaPage() {
  return <AppSella />;
}
