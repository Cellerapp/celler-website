import { Phone, Wifi, Zap, Tv, Dices } from "lucide-react";

export type BillCategory = "airtime" | "data" | "electricity" | "tv" | "betting";

export interface BillCategoryConfig {
  id: BillCategory;
  label: string;
  icon: typeof Phone;
  accent: string;
}

export interface BillProvider {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface BillPlan {
  id: string;
  name: string;
  amountNgn: number;
}

export const BILL_CATEGORIES: BillCategoryConfig[] = [
  { id: "airtime", label: "Airtime", icon: Phone, accent: "bg-indigo-500/10 text-indigo-500" },
  { id: "data", label: "Data", icon: Wifi, accent: "bg-violet-500/10 text-violet-500" },
  { id: "electricity", label: "Electricity", icon: Zap, accent: "bg-amber-500/10 text-amber-500" },
  { id: "tv", label: "TV Subscription", icon: Tv, accent: "bg-emerald-500/10 text-emerald-500" },
  { id: "betting", label: "Betting", icon: Dices, accent: "bg-red-500/10 text-red-500" },
];

export const PROVIDERS: Record<BillCategory, BillProvider[]> = {
  airtime: [
    { id: "mtn", name: "MTN", initials: "MTN", color: "bg-yellow-500" },
    { id: "airtel", name: "Airtel", initials: "AIR", color: "bg-red-500" },
    { id: "glo", name: "Glo", initials: "GLO", color: "bg-green-500" },
    { id: "9mobile", name: "9mobile", initials: "9M", color: "bg-emerald-600" },
  ],
  data: [
    { id: "mtn", name: "MTN", initials: "MTN", color: "bg-yellow-500" },
    { id: "airtel", name: "Airtel", initials: "AIR", color: "bg-red-500" },
    { id: "glo", name: "Glo", initials: "GLO", color: "bg-green-500" },
    { id: "9mobile", name: "9mobile", initials: "9M", color: "bg-emerald-600" },
  ],
  electricity: [
    { id: "ikedc", name: "Ikeja Electric", initials: "IE", color: "bg-amber-500" },
    { id: "ekedc", name: "Eko Electric", initials: "EK", color: "bg-amber-600" },
    { id: "ibedc", name: "Ibadan Electric", initials: "IB", color: "bg-amber-700" },
    { id: "phedc", name: "Port Harcourt Electric", initials: "PH", color: "bg-amber-800" },
  ],
  tv: [
    { id: "dstv", name: "DStv", initials: "DST", color: "bg-blue-600" },
    { id: "gotv", name: "GOtv", initials: "GOT", color: "bg-blue-500" },
    { id: "startimes", name: "Startimes", initials: "ST", color: "bg-blue-400" },
  ],
  betting: [
    { id: "bet9ja", name: "Bet9ja", initials: "B9", color: "bg-green-600" },
    { id: "sportybet", name: "SportyBet", initials: "SB", color: "bg-green-500" },
    { id: "1xbet", name: "1xBet", initials: "1X", color: "bg-blue-600" },
  ],
};

export const DATA_PLANS: Record<string, BillPlan[]> = {
  mtn: [
    { id: "mtn_100mb", name: "100MB - 30 days", amountNgn: 200 },
    { id: "mtn_1gb", name: "1GB - 30 days", amountNgn: 1500 },
    { id: "mtn_2gb", name: "2GB - 30 days", amountNgn: 2500 },
    { id: "mtn_5gb", name: "5GB - 30 days", amountNgn: 5000 },
  ],
  airtel: [
    { id: "airtel_100mb", name: "100MB - 30 days", amountNgn: 200 },
    { id: "airtel_1gb", name: "1GB - 30 days", amountNgn: 1400 },
    { id: "airtel_3gb", name: "3GB - 30 days", amountNgn: 3500 },
  ],
  glo: [
    { id: "glo_1gb", name: "1GB - 30 days", amountNgn: 1000 },
    { id: "glo_2gb", name: "2GB - 30 days", amountNgn: 2000 },
    { id: "glo_5gb", name: "5GB - 30 days", amountNgn: 4500 },
  ],
  "9mobile": [
    { id: "9m_500mb", name: "500MB - 30 days", amountNgn: 500 },
    { id: "9m_1gb", name: "1GB - 30 days", amountNgn: 1200 },
  ],
};

export const TV_PACKAGES: Record<string, BillPlan[]> = {
  dstv: [
    { id: "dstv_lite", name: "DStv Lite - ₦4,200/mo", amountNgn: 4200 },
    { id: "dstv_compact", name: "DStv Compact - ₦6,800/mo", amountNgn: 6800 },
    { id: "dstv_premium", name: "DStv Premium - ₦21,000/mo", amountNgn: 21000 },
  ],
  gotv: [
    { id: "gotv_lite", name: "GOtv Lite - ₦2,100/mo", amountNgn: 2100 },
    { id: "gotv_max", name: "GOtv Max - ₦4,850/mo", amountNgn: 4850 },
  ],
  startimes: [
    { id: "st_basic", name: "Basic - ₦2,500/mo", amountNgn: 2500 },
    { id: "st_standard", name: "Standard - ₦4,500/mo", amountNgn: 4500 },
  ],
};
