import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingOriginal from "./pages/LandingOriginal";
import IndexBC2026OnePage from "./pages/IndexBC2026OnePage";
import Index from "./pages/Index";
import IndexV2 from "./pages/IndexV2";
import IndexV3 from "./pages/IndexV3";
import IndexBC2026 from "./pages/IndexBC2026";
import IndexBC2026Training from "./pages/IndexBC2026Training";
import IndexBC2026V2 from "./pages/IndexBC2026V2";
import IndexBC2026V2Training from "./pages/IndexBC2026V2Training";
import IndexBC2026V2OnePage from "./pages/IndexBC2026V2OnePage";
import IndexBC2026Script from "./pages/IndexBC2026Script";
import IndexBC2026V2Script from "./pages/IndexBC2026V2Script";
import IndexBC2026V3Training from "./pages/IndexBC2026V3Training";
import IndexBC2026V4Training from "./pages/IndexBC2026V4Training";
import IndexBC2026V3Script from "./pages/IndexBC2026V3Script";
import IndexBC2026V4Script from "./pages/IndexBC2026V4Script";
import PresentationBC2026V3 from "./components/presentation/PresentationBC2026V3";
import PresentationBC2026V4 from "./components/presentation/PresentationBC2026V4";
import LandingV5 from "./pages/LandingV5";
import NotFound from "./pages/NotFound";

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
          <Route path="/vBC2026" element={<IndexBC2026 />} />
          <Route path="/vBC2026t" element={<IndexBC2026Training />} />
          <Route path="/vBC2026op" element={<IndexBC2026OnePage />} />
          <Route path="/v2BC2026" element={<IndexBC2026V2 />} />
          <Route path="/v2BC2026t" element={<IndexBC2026V2Training />} />
          <Route path="/v2BC2026op" element={<IndexBC2026V2OnePage />} />
          <Route path="/vBC2026s" element={<IndexBC2026Script />} />
          <Route path="/v2BC2026s" element={<IndexBC2026V2Script />} />
          <Route path="/v3BC2026" element={<PresentationBC2026V3 />} />
          <Route path="/v3BC2026t" element={<IndexBC2026V3Training />} />
          <Route path="/v3BC2026s" element={<IndexBC2026V3Script />} />
          <Route path="/v4BC2026" element={<PresentationBC2026V4 />} />
          <Route path="/v4BC2026t" element={<IndexBC2026V4Training />} />
          <Route path="/v4BC2026s" element={<IndexBC2026V4Script />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
