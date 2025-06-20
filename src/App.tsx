import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
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
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/index" element={<Index />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/topics/new" element={<NewTopicPage />} />
              <Route path="/topics/edit/:id" element={<EditTopicPage />} />
              <Route path="/topics/:id" element={<TopicDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
