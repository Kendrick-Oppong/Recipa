import { Layout } from "@/components/layout";
import { Categories, HomePage } from "@/pages";

import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};
