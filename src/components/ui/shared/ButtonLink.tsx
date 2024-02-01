import { Button } from "@/components/ui/button";
export const ButtonLink = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className={`${className} text-lg text-green-600 hover:bg-green-500 hover:text-white border-green-600 shadow-md`}
    >
      {children}
    </Button>
  );
};
