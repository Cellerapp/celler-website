"use client";
import { getCoin, type CoinId } from "@/lib/crypto";

const COLORS: Record<string, string> = {
  BTC: "#f7931a",
  ETH: "#627eea",
  USDT: "#26a17b",
  BNB: "#f3ba2f",
  SOL: "#9945ff",
  NGN: "#6366f1",
};

const SYMBOLS: Record<string, string> = {
  BTC: "₿",
  ETH: "Ξ",
  USDT: "$",
  BNB: "◆",
  SOL: "◎",
  NGN: "₦",
};

export default function CoinIcon({ coinId, size = 40 }: { coinId: CoinId | string; size?: number }) {
  const color = COLORS[coinId] || "#6366f1";
  const symbol = SYMBOLS[coinId] || coinId[0];
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold text-white shrink-0"
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.4 }}
    >
      {symbol}
    </div>
  );
}
