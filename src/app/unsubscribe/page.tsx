"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { API_URL } from "@/constants";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    fetch(`${API_URL}/api/v1/user/unsubscribe/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setStatus("done");
      })
      .catch(() => setStatus("error"));
  }, [searchParams]);

  if (status === "loading")
    return <p className="text-gray-200">Unsubscribing...</p>;
  if (status === "done")
    return (
      <p className="text-gray-200">
        You&apos;ve been unsubscribed successfully.
      </p>
    );
  if (status === "error")
    return (
      <p className="text-gray-200">This link is invalid or has expired.</p>
    );
  return null;
}

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-[#0C0D1D]">
      <Suspense fallback={<p className="text-gray-200">Unsubscribing...</p>}>
        <UnsubscribeContent />
      </Suspense>
      <Link
        href="/"
        className="mt-10 underline text-[16px] font-semibold text-gray-100 transition-colors duration-200 hover:text-[#5A86FF] hover:underline-offset-2"
      >
        Back To Website
      </Link>
    </div>
  );
}
