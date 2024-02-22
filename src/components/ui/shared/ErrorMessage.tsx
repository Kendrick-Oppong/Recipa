import { AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { XCircle } from "lucide-react";

export const ErrorMessage = ({ message }: { message: string }) => {
  if (message)
    toast("Error fetching recipe, Retrying...", {
      position: "top-center",
      duration: 3000,
      dismissible: true,
      important: true,
      icon: <XCircle />,
      className: "gap-6 mt-5",
      style: {
        padding: "1rem",
        backgroundColor: "red",
        fontSize: "16px",
        color: "white",
      },
    });

  return (
    <div className="flex justify-center items-center text-lg gap-3 text-red-600">
      <AlertTriangle />
      <h1 className="text-center">Oops! {message}</h1>
    </div>
  );
};


