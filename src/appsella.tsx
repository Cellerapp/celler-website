import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import SellaLayout from "@/components/sella/SellaLayout";

import SellaLanding from "@/app/sella/Landing";
import SellaSplash from "@/app/sella/SellaSplash";
import SellaWelcome from "@/app/sella/SellaWelcome";
import SellaSignIn from "@/app/sella/SellaSignIn";
import SellaSignUp from "@/app/sella/SellaSignUp";
import SellaTwoFactor from "@/app/sella/SellaTwoFactor";
import SellaHome from "@/app/sella/SellaHome";
import SellaBills from "@/app/sella/SellaBills";
import SellaBillPay from "@/app/sella/SellaBillPay";
import SellaHistory from "@/app/sella/SellaHistory";
import SellaReferral from "@/app/sella/SellaReferral";
import SellaProfile from "@/app/sella/SellaProfile";
import SellaNotifications from "@/app/sella/SellaNotifications";
import SellaWithdraw from "@/app/sella/SellaWithdraw";
import SellaReceive from "@/app/sella/SellaReceive";
import SellaTransactionDetail from "@/app/sella/SellaTransactionDetail";
import SellaReceipt from "@/app/sella/SellaReceipt";
import SellaBankDetails from "@/app/sella/SellaBankDetails";
import SellaKYC from "@/app/sella/SellaKYC";
import SellaUpdatePin from "@/app/sella/SellaUpdatePin";
import SellaUpdatePassword from "@/app/sella/SellaUpdatePassword";
import SellaAppearance from "@/app/sella/SellaAppearance";
import SellaSupport from "@/app/sella/SellaSupport";
import SellaEditProfile from "@/app/sella/SellaEditProfile";

const queryClient = new QueryClient();

const AppSella = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<SellaLanding />} />
              <Route path="/a" element={<SellaSplash />} />
              <Route path="/a/welcome" element={<SellaWelcome />} />
              <Route path="/a/signin" element={<SellaSignIn />} />
              <Route path="/a/signup" element={<SellaSignUp />} />
              <Route path="/a/two-factor" element={<SellaTwoFactor />} />

              <Route element={<SellaLayout />}>
                <Route path="/a/home" element={<SellaHome />} />
                <Route path="/a/bills" element={<SellaBills />} />
                <Route path="/a/bills/:category" element={<SellaBillPay />} />
                <Route path="/a/history" element={<SellaHistory />} />
                <Route path="/a/referral" element={<SellaReferral />} />
                <Route path="/a/profile" element={<SellaProfile />} />
                <Route path="/a/notifications" element={<SellaNotifications />} />
                <Route path="/a/withdraw/:coinId" element={<SellaWithdraw />} />
                <Route path="/a/receive/:coinId" element={<SellaReceive />} />
                <Route path="/a/transaction/:txId" element={<SellaTransactionDetail />} />
                <Route path="/a/receipt/:txId" element={<SellaReceipt />} />
                <Route path="/a/bank-details" element={<SellaBankDetails />} />
                <Route path="/a/kyc" element={<SellaKYC />} />
                <Route path="/a/update-pin" element={<SellaUpdatePin />} />
                <Route path="/a/update-password" element={<SellaUpdatePassword />} />
                <Route path="/a/appearance" element={<SellaAppearance />} />
                <Route path="/a/support" element={<SellaSupport />} />
                <Route path="/a/edit-profile" element={<SellaEditProfile />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppSella;
