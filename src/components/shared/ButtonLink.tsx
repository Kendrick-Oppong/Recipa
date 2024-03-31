import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
  children: React.ReactNode;
  className?: string;
  disable?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonLink = ({
  children,
  className,
  type,
  onClick,
  disable = false,
}: ButtonLinkProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`${className} text-lg text-green-600 hover:bg-green-500 hover:text-white border-green600 shadow-md`}
    >
      {children}
    </Button>
  );
};
