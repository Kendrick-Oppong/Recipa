import notfound from "@/assets/404.svg";
import { ButtonLink } from "@/components/shared";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <main className="my-10 text-lg text-center">
      <h1 className="text-3xl font-bold ">Uh-oh!</h1>
      <img src={notfound} className="mx-auto my-6" alt="404" />
      <p className="mb-6">We can't find that page</p>
      <Link to={"/"}>
        <ButtonLink>Go Back</ButtonLink>
      </Link>
    </main>
  );
};
