export interface Recipe {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface RecipesProp {
  categories: Recipe[];
}

export interface Category {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export interface FeaturedCardProps {
  recipe: Recipe;
}

export interface CategoryName {
  categoryName: Category;
  meal: string;
}

export interface CategoryProp {
  meals: Category[];
}

interface Meal {
  idMeal?: string | null;
  strMeal?: string | null;
  strDrinkAlternate?: string | null;
  strCategory?: string | null;
  strArea?: string | null;
  strInstructions?: string | null;
  strMealThumb?: string | null;
  strTags?: string | null;
  strYoutube?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strIngredient16?: string | null;
  strIngredient17?: string | null;
  strIngredient18?: string | null;
  strIngredient19?: string | null;
  strIngredient20?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
  strMeasure16?: string | null;
  strMeasure17?: string | null;
  strMeasure18?: string | null;
  strMeasure19?: string | null;
  strMeasure20?: string | null;
  [key: string]: string | null | undefined;
  strSource?: string | null;
  strImageSource?: string | null;
  strCreativeCommonsConfirmed?: string | null;
  dateModified?: string | null;
}

export interface Meal_ID_Prop {
  meals: Meal[];
}

export interface MenuProps {
  count: number;
  data: {
    _id?: string;
    title?: string;
    rating?: number;
    category?: string;
    image?: string;
    description?: string;
    price?: number;
    details?: {
      fullDescription?: string;
      category?: string;
      tag?: string;
      weight?: string;
      dimension?: string;
      quantityInStock?: number;
      _id?: string;
    };
  }[];
}

export interface MenuDetailsProps {
  data: {
    _id?: string;
    title?: string;
    rating?: number;
    category?: string;
    image?: string;
    description?: string;
    price?: number;
    details?: {
      fullDescription?: string;
      category?: string;
      tag?: string;
      weight?: string;
      dimension?: string;
      quantityInStock?: number;
      _id?: string;
    };
  }[];
}

// Form Input Fields From IsError Utils
export interface SignUpFormData {
  username: string;
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ContactUsFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface SettingsFormData {
  username: string;
  email: string;
  address: string;
  phone_number: string;
  country: string;
  city: string;
}
export interface SignInFormData {
  email: string;
  password: string;
}

//cart
export interface CartItem {
  _id?: string;
  title?: string;
  rating?: number;
  image?: string;
  description?: string;
  price?: number;
  category?: string;
}

export interface CartState {
  existingCart: {
    itemId: string | undefined;
    isExisting: boolean;
  };
  cart: CartItem[];
}
