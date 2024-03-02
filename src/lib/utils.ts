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
      style: {
        background: "red",
      },
    });
  }
};

export const handleInfoToast = (message: string) => {
  return toast.info(message, {
    duration: 3000,
    style: {
      background: "rgb(253 185 61)",
      color: "black",
    },
  });
};
