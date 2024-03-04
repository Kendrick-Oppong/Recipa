import { Layout } from "@/components/layout";
import {
  AllBeverages,
  AllBurgers,
  AllBurritos,
  AllFries,
  AllMenuLayout,
  AllMenus,
  AllPizzas,
  AllSalads,
  AllSushis,
  BurgerMenuDetails as MenuDetails,
  CategoryMealDetail,
  CategoryPage,
  HomePage,
  PageNotFound,
  RecipeCategory,
  RecipesPage,
  ShoppingPage,
  SignUp,
  SignIn,
  Cart,
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
            <Route path="pizzas" element={<AllPizzas />} />
            <Route path="sushis" element={<AllSushis />} />
            <Route path="salads" element={<AllSalads />} />
            <Route path="burritos" element={<AllBurritos />} />
            <Route path="beverages" element={<AllBeverages />} />
            <Route path="fries" element={<AllFries />} />
          </Route>
          <Route path=":category/:title/:id" element={<MenuDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
