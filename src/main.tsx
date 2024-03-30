import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/context/theme/themeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";

const queryClient = new QueryClient();

const BACKEND_URL = "http://localhost:5000";

axios.interceptors.request.use(
  (config) => {
    if (config?.url?.startsWith(BACKEND_URL)) {
      config.withCredentials = true;
    } else {
      config.withCredentials = false; // Explicitly set to false for other requests
    }
    return config;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Provider store={store}>
            <App />
            <Toaster
              position="top-center"
              expand={false}
              gap={5}
              toastOptions={{
                duration: 3000,
                style: { border: "none", fontSize: "medium" },
              }}
            />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  </React.StrictMode>
);
