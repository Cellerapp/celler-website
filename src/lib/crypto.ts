export type CoinId = "BTC" | "ETH" | "USDT" | "BNB" | "SOL" | "NGN";
export type TxType = "buy" | "sell" | "swap" | "withdraw" | "deposit" | "receive" | "bill" | "giftcard" | "send";

export interface Transaction {
  id: string;
  type: TxType;
  coin?: CoinId;
  fromCoin?: CoinId;
  toCoin?: CoinId;
  quantity: number;
  toQuantity?: number;
  usdValue: number;
  ngnValue: number;
  date: string;
  status: "completed" | "pending" | "failed";
  fee?: number;
  address?: string;
  hash?: string;
  network?: string;
  description?: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  isDefault: boolean;
}

interface Wallet {
  [key: string]: number;
}

const COIN_PRICES_USD: Record<string, number> = {
  BTC: 65000,
  ETH: 3500,
  USDT: 1,
  BNB: 580,
  SOL: 150,
  NGN: 0.00065,
};

const NGN_USD_RATE = 1410;

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getCoin(id: CoinId) {
  return {
    id,
    name: id === "NGN" ? "Naira" : id,
    symbol: id,
    marketPriceUsd: COIN_PRICES_USD[id] || 0,
    color: id === "BTC" ? "#f7931a" : id === "ETH" ? "#627eea" : id === "USDT" ? "#26a17b" : id === "BNB" ? "#f3ba2f" : id === "SOL" ? "#9945ff" : "#6366f1",
  };
}

function coinToUsd(coinId: CoinId, qty: number): number {
  return qty * (COIN_PRICES_USD[coinId] || 0);
}

function usdToNgn(usd: number): number {
  return usd * NGN_USD_RATE;
}

function ngnToUsd(ngn: number): number {
  return ngn / NGN_USD_RATE;
}

function formatCoin(qty: number, decimals = 6): string {
  return qty.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: decimals });
}

function formatNgn(amount: number): string {
  return "₦" + amount.toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatUsd(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getTxLabel(tx: Transaction): string {
  const labels: Record<string, string> = {
    buy: "Bought",
    sell: "Sold",
    swap: "Swapped",
    withdraw: "Withdrawal",
    deposit: "Deposit",
    receive: "Received",
    bill: "Bill Payment",
    giftcard: "Gift Card",
  };
  return labels[tx.type] || tx.type;
}

function getWallet(): Wallet {
  try {
    const stored = localStorage.getItem("sella_wallet");
    if (stored) return JSON.parse(stored);
  } catch {}
  return { NGN: 50000, BTC: 0.01, ETH: 0.5, USDT: 100 };
}

function saveWallet(wallet: Wallet) {
  localStorage.setItem("sella_wallet", JSON.stringify(wallet));
}

function updateWalletCoin(coinId: CoinId, delta: number) {
  const wallet = getWallet();
  wallet[coinId] = (wallet[coinId] || 0) + delta;
  if (wallet[coinId] < 0) wallet[coinId] = 0;
  saveWallet(wallet);
}

function getTransactions(): Transaction[] {
  try {
    const stored = localStorage.getItem("sella_transactions");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function addTransaction(tx: Transaction) {
  const txs = getTransactions();
  txs.unshift(tx);
  localStorage.setItem("sella_transactions", JSON.stringify(txs));
}

function getBanks(): BankAccount[] {
  try {
    const stored = localStorage.getItem("sella_banks");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function addBank(bank: BankAccount) {
  const banks = getBanks();
  banks.push(bank);
  localStorage.setItem("sella_banks", JSON.stringify(banks));
}

function removeBank(id: string) {
  const banks = getBanks().filter((b) => b.id !== id);
  localStorage.setItem("sella_banks", JSON.stringify(banks));
}

function getUser() {
  try {
    const stored = localStorage.getItem("sella_auth_user");
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function setUser(user: unknown) {
  localStorage.setItem("sella_auth_user", JSON.stringify(user));
}

export const store = {
  getWallet,
  updateWalletCoin,
  getTransactions,
  addTransaction,
  getBanks,
  addBank,
  removeBank,
  getUser,
  setUser,
};

export { getCoin, coinToUsd, usdToNgn, ngnToUsd, formatCoin, formatNgn, formatUsd, genId, getTxLabel };
