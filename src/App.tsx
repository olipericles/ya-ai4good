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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingOriginal />} />
          <Route path="/v1" element={<Index />} />
          <Route path="/v2" element={<IndexV2 />} />
          <Route path="/v3" element={<IndexV3 />} />
          <Route path="/vBC2026" element={<IndexBC2026 />} />
          <Route path="/vBC2026t" element={<IndexBC2026Training />} />
          <Route path="/vBC2026op" element={<IndexBC2026OnePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
