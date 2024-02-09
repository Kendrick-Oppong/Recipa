import { Layout } from "@/components/layout";
import {
  AllBurgers,
  AllMenuLayout,
  AllMenus,
  CategoryMealDetail,
  CategoryPage,
  HomePage,
  RecipeCategory,
  RecipesPage,
  ShoppingPage,
} from "@/pages";

import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/:id" element={<RecipeCategory />} />
        <Route path="categories/:category" element={<CategoryPage />} />
        <Route
          path="categories/:category/:id"
          element={<CategoryMealDetail />}
        />
        <Route path="shop" element={<ShoppingPage />} />
        <Route path="all-menus" element={<AllMenuLayout />}>
          <Route element={<AllMenus />}>
            <Route index path="burgers" element={<AllBurgers />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
