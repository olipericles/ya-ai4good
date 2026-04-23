import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LandingOriginal from "./pages/Legacy/LandingOriginal";
import Index from "./pages/Legacy/Index";
import IndexV2 from "./pages/Legacy/IndexV2";
import IndexV3 from "./pages/Legacy/IndexV3";
import IndexBC2026V4Training from "./pages/Legacy/IndexBC2026V4Training";
import IndexBC2026V4Script from "./pages/Legacy/IndexBC2026V4Script";
import PresentationBC2026V4 from "./components/presentation/PresentationBC2026V4";
import IndexBC2026V4OnePage from "./pages/Legacy/IndexBC2026V4OnePage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import TrindAIPage from "./pages/TrindAIPage";
import BaIAPage from "./pages/BaIAPage";
import RBAPage from "./pages/RBAPage";
import SeloPage from "./pages/SeloPage";
import CommunityPage from "./pages/CommunityPage";
import LinksPage from "./pages/LinksPage";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/original" element={<LandingOriginal />} />
          <Route path="/v1" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/vBC2026" element={<PresentationBC2026V4 />} />
          <Route path="/vBC2026t" element={<IndexBC2026V4Training />} />
          <Route path="/vBC2026op" element={<IndexBC2026V4OnePage />} />
          <Route path="/vBC2026s" element={<IndexBC2026V4Script />} />
          <Route path="/trindai" element={<TrindAIPage />} />
          <Route path="/baia" element={<BaIAPage />} />
          <Route path="/rba" element={<RBAPage />} />
          <Route path="/selo" element={<SeloPage />} />
          <Route path="/comunidades" element={<CommunityPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:phone" element={<Dashboard />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </LanguageProvider>
);

export default App;
