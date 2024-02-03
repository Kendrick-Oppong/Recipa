import { Layout } from "@/components/layout";
import {
  CategoryMealDetail,
  CategoryPage,
  HomePage,
  RecipesPage,
  ShoppingPage,
} from "@/pages";

import { RecipeCategory } from "@/pages/recipes";

import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeCategory />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route
          path="/categories/:category/:id"
          element={<CategoryMealDetail />}
        />
        <Route path="/shop" element={<ShoppingPage/> } />
      </Route>
    </Routes>
  );
};
