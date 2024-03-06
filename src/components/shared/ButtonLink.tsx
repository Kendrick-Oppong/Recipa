import { Button } from "@/components/ui/button";
export const ButtonLink = ({
  children,
  className,
  type,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> ;
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={onClick}
      type={type}
      className={`${className} text-lg text-green-600 hover:bg-green-500 hover:text-white border-green-600 shadow-md`}
    >
      {children}
    </Button>
  );
};
