import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingOriginal from "./pages/LandingOriginal";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import IndexV3 from "./pages/IndexV3";
import IndexBC2026V4Training from "./pages/IndexBC2026V4Training";
import IndexBC2026V4Script from "./pages/IndexBC2026V4Script";
import PresentationBC2026V4 from "./components/presentation/PresentationBC2026V4";
import IndexBC2026V4OnePage from "./pages/IndexBC2026V4OnePage";
import LandingV5 from "./pages/LandingV5";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import PageTrindAI from "./pages/PageTrindAI";
import PageBaIA from "./pages/PageBaIA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingV5 />} />
          <Route path="/original" element={<LandingOriginal />} />
          <Route path="/v1" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/vBC2026" element={<PresentationBC2026V4 />} />
          <Route path="/vBC2026t" element={<IndexBC2026V4Training />} />
          <Route path="/vBC2026op" element={<IndexBC2026V4OnePage />} />
          <Route path="/vBC2026s" element={<IndexBC2026V4Script />} />
          <Route path="/trindai" element={<PageTrindAI />} />
          <Route path="/baia" element={<PageBaIA />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:phone" element={<Dashboard />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
