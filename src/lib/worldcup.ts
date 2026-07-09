function getCards(): number {
  try {
    return parseInt(localStorage.getItem("sella_worldcup_cards") || "0", 10);
  } catch {
    return 0;
  }
}

function awardBonus(category: string) {
  const current = getCards();
  const bonus = category === "crypto" ? 2 : 1;
  localStorage.setItem("sella_worldcup_cards", String(current + bonus));
}

export const worldcup = { getCards, awardBonus };
