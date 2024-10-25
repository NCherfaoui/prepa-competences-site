import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { navItems } from "./nav-items";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import NotFound from "./pages/NotFound";
import TechDetails from "./components/TechDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter basename="/prepa-competences-site">
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* A dynamically generated header component */}
            {/* <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black animate-gradient-x"></div>
              <div className="absolute inset-0 bg-[url('/background-grid.svg')] bg-center animate-pulse opacity-5"></div>
            </div>
            <div className="relative z-10 flex flex-col min-h-screen"> */}

            <Header />
            <main className="flex-grow">
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route key={to} path={to} element={page} />
                ))}
                <Route path="/tech-details" element={<TechDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4">
              <ThemeToggle />
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
