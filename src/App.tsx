import { useLocation } from "react-router-dom";
import { AllRoutes } from "./routes/Routes";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return <AllRoutes />;
}

export default App;
