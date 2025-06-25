
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Landing from "./pages/Landing";
import Consult from "./pages/Consult";
import Framework from "./pages/Framework";
import Workshop from "./pages/Workshop";
import Pricing from "./pages/Pricing";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import NotFound from "./pages/NotFound";
import TopicsPage from "./pages/topics/index";
import NewTopicPage from "./pages/topics/new";
import EditTopicPage from "./pages/topics/edit/[id]";
import TopicDetailPage from "./pages/topics/[id]";

const App = () => {
  // Create QueryClient inside the component to ensure proper React context
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  }), []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/consult" element={<Consult />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/topics/new" element={<NewTopicPage />} />
              <Route path="/topics/edit/:id" element={<EditTopicPage />} />
              <Route path="/topics/:id" element={<TopicDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
