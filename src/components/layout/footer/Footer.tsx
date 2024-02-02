import { Link } from "react-router-dom";
import { Logo } from "../navbar";

export const Footer = () => {
  return (
    <footer className="dark:on-dark-shadow sm:grid sm:grid-cols-2 lg:grid-cols-3 p-10 mt-28 text-lg  shadow-2xl !bg-[#aeafb42b] dark:!bg-[#030c22c9]">
      <div>
        <Logo />
        <p className="mt-3">
          Explore a world of delicious recipes with Recipy! From mouth-watering
          mains to delightful desserts, discover a variety of culinary delights
        </p>
      </div>
      <div className="justify-self-center mt-8 sm:mt-0">
        <h3>Navigation</h3>
        <Link to="/">
          <li className="list-none mb-2 hover:text-green-600"> Home</li>
        </Link>
        <Link to="/recipes" className="list-none hover:text-green-700">
          <li> Recipes</li>
        </Link>
      </div>
      <div className="justify-self-center mt-8 sm:mt-0">
        <h3>Categories</h3>
        <ul className="space-y-4 text-base ">
          {/* {categories.map((category) => (
              <Link
                to={`/categories/${category.name}`}
                legacyBehavior
                passTo
                key={category.id}
              >
                <li
                  className={`text-base gap-2 hover:text-green-700 cursor-pointer`}
                >
                  <img
                    src={category.icon}
                    alt={category.icon}
                    width={30}
                    height={30}
                    className="inline-flex mr-2"
                  />
                  {category.name}
                </li>
              </Link>
            ))} */}
        </ul>
      </div>
      <p className="text-center pb-4  ">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};
