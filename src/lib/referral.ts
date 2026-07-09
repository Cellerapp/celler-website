export interface Referral {
  id: string;
  referredName: string;
  referredEmail: string;
  dateJoined: string;
  status: "pending" | "verified" | "completed";
  rewardUnlocked: boolean;
  rewardAmountNgn: number;
}

export interface WithdrawalRequest {
  id: string;
  amountNgn: number;
  dateRequested: string;
  status: "pending" | "approved" | "rejected";
}

interface ReferralConfig {
  rewardAmountNgn: number;
  weeklyWithdrawLimitNgn: number;
}

const DEFAULT_CONFIG: ReferralConfig = {
  rewardAmountNgn: 1000,
  weeklyWithdrawLimitNgn: 50000,
};

function getConfig(): ReferralConfig {
  return DEFAULT_CONFIG;
}

function getReferrals(): Referral[] {
  try {
    const stored = localStorage.getItem("sella_referrals");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [
    { id: "1", referredName: "Adaeze O.", referredEmail: "adaeze@example.com", dateJoined: "2026-01-10", status: "completed", rewardUnlocked: true, rewardAmountNgn: 1000 },
    { id: "2", referredName: "Chukwuemeka N.", referredEmail: "chukwuemeka@example.com", dateJoined: "2026-01-12", status: "verified", rewardUnlocked: false, rewardAmountNgn: 0 },
  ];
}

function getWithdrawals(): WithdrawalRequest[] {
  try {
    const stored = localStorage.getItem("sella_referral_withdrawals");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function getTotalEarned(): number {
  return getReferrals().filter((r) => r.rewardUnlocked).reduce((sum, r) => sum + r.rewardAmountNgn, 0);
}

function getAvailableBalance(): number {
  const earned = getTotalEarned();
  const withdrawn = getWithdrawals()
    .filter((w) => w.status === "approved" || w.status === "pending")
    .reduce((sum, w) => sum + w.amountNgn, 0);
  return Math.max(0, earned - withdrawn);
}

function getWithdrawnThisWeek(): number {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);
  return getWithdrawals()
    .filter((w) => w.status === "approved" && new Date(w.dateRequested) >= weekStart)
    .reduce((sum, w) => sum + w.amountNgn, 0);
}

function getWeeklyRemaining(): number {
  return Math.max(0, DEFAULT_CONFIG.weeklyWithdrawLimitNgn - getWithdrawnThisWeek());
}

function addWithdrawal(amountNgn: number) {
  const withdrawals = getWithdrawals();
  withdrawals.unshift({
    id: Date.now().toString(36),
    amountNgn,
    dateRequested: new Date().toISOString(),
    status: "pending",
  });
  localStorage.setItem("sella_referral_withdrawals", JSON.stringify(withdrawals));
}

export function statusLabel(status: string): string {
  const labels: Record<string, string> = { pending: "Pending", verified: "Verified", completed: "Completed" };
  return labels[status] || status;
}

export function statusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-500",
    verified: "bg-blue-500/20 text-blue-500",
    completed: "bg-green-500/20 text-green-500",
  };
  return colors[status] || "bg-secondary text-muted-foreground";
}

export function withdrawalStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: "bg-yellow-500/20 text-yellow-500",
    approved: "bg-green-500/20 text-green-500",
    rejected: "bg-red-500/20 text-red-500",
  };
  return colors[status] || "bg-secondary text-muted-foreground";
}

export const referralStore = {
  getConfig,
  getReferrals,
  getWithdrawals,
  getTotalEarned,
  getAvailableBalance,
  getWithdrawnThisWeek,
  getWeeklyRemaining,
  addWithdrawal,
};
