import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TopBanner from "./components/zetta/TopBanner";
import RouteTracker from "./components/RouteTracker";
import ScrollToHash from "./components/ScrollToHash";
import Index from "./pages/Index";
import HowItWorksPage from "./pages/HowItWorksPage";
import Technology from "./pages/Technology";
import TrueHybrid from "./pages/TrueHybrid";
import WhoItsFor from "./pages/WhoItsFor";
import Pricing from "./pages/Pricing";
import Waitlist from "./pages/Waitlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <ScrollToHash />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/true-hybrid" element={<TrueHybrid />} />
          <Route path="/who-its-for" element={<WhoItsFor />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
