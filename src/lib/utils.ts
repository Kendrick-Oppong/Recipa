import { SignInFormData, SignUpFormData } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { FieldError, FieldErrors, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



export const isError = <T extends SignUpFormData | SignInFormData>(
  fieldName: string,
  errors: FieldErrors<T>,
  form: UseFormReturn<T, unknown, T>
) => {
  const error = errors[
    fieldName as keyof typeof form.formState.defaultValues
  ] as FieldError | undefined;
  return error?.message;
};

export const handleErrorToast = (isValid: boolean) => {
  if (!isValid) {
    return toast.error("Please fill all fields", {
      duration: 3000,
      dismissible: true,
      important: true,
      className: "gap-5",
      style: {
        padding: "1rem",
        fontSize: "16px",
        background: "red",
      },
    });
  }
};
