"use client";
import { useNavigate } from "react-router-dom";
import { Phone, Wifi, Zap, Tv, Dices } from "lucide-react";

const CATEGORIES = [
  { id: "airtime", label: "Airtime", icon: Phone, accent: "bg-indigo-500/10 text-indigo-500" },
  { id: "data", label: "Data", icon: Wifi, accent: "bg-violet-500/10 text-violet-500" },
  { id: "electricity", label: "Electricity", icon: Zap, accent: "bg-amber-500/10 text-amber-500" },
  { id: "tv", label: "TV Subscription", icon: Tv, accent: "bg-emerald-500/10 text-emerald-500" },
  { id: "betting", label: "Betting", icon: Dices, accent: "bg-red-500/10 text-red-500" },
];

export default function SellaBills() {
  const navigate = useNavigate();
  return (
    <div className="pt-4 pb-4">
      <h1 className="text-2xl font-bold mb-4">Pay Bills</h1>
      <p className="text-sm text-muted-foreground mb-6">Select a category to get started</p>
      <div className="space-y-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/a/bills/${cat.id}`)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/20 hover:bg-secondary/50 transition-colors"
          >
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${cat.accent}`}>
              <cat.icon size={22} />
            </div>
            <span className="text-sm font-semibold">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
