import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="/logo.svg"
          alt="logo"
          width={100}
          height={20}
          className="dark:invert"
        />
      </Link>
    </div>
  );
};
