export const API_URL = process.env.NEXT_PUBLIC_API_URL;
 const BASE_URL = API_URL?.includes("staging") ? "https://staging.app.cryptpay.co" : "https://app.cryptpay.co";

export const LOGIN_URL = `${BASE_URL}/login`;
export const SIGNUP_URL = `${BASE_URL}/sign-up`;