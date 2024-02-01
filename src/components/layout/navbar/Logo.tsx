import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="/logo.svg"
          alt="logo"
          width={125}
          height={40}
          className="dark:invert"
        />
      </Link>
    </div>
  );
};
