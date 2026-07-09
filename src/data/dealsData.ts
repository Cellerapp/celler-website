export interface Deal {
  id: string;
  category: string;
  provider: string;
  value: string;
  originalPrice: number;
  dealPrice: number;
  prefillAmount?: number;
  prefillPlanId?: string;
}

export const DEALS: Deal[] = [
  { id: "1", category: "airtime", provider: "mtn", value: "₦500 Airtime", originalPrice: 500, dealPrice: 450, prefillAmount: 500 },
  { id: "2", category: "data", provider: "mtn", value: "1GB Data", originalPrice: 1500, dealPrice: 1200, prefillPlanId: "mtn_1gb" },
  { id: "3", category: "electricity", provider: "ikedc", value: "₦5,000 Power", originalPrice: 5000, dealPrice: 4800, prefillAmount: 5000 },
  { id: "4", category: "tv", provider: "dstv", value: "DStv Premium", originalPrice: 21000, dealPrice: 19500, prefillPlanId: "dstv_premium" },
  { id: "5", category: "airtime", provider: "airtel", value: "₦200 Airtime", originalPrice: 200, dealPrice: 180, prefillAmount: 200 },
];
