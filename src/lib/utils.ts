import {
  ContactUsFormData,
  SettingsFormData,
  SignInFormData,
  SignUpFormData,
  CheckOutFormData,
} from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { FieldError, FieldErrors, UseFormReturn } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type FormDataTypes =
  | SignUpFormData
  | SignInFormData
  | ContactUsFormData
  | SettingsFormData
  | CheckOutFormData;

export const isError = <T extends FormDataTypes>(
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
      dismissible: true,
      duration: 3000,
      style: {
        background: "red",
      },
    });
  }
};

export const handlePostErrorToast = (msg: string) => {
  return toast.error(msg, {
    dismissible: true,
    duration: 3000,
    style: {
      background: "red",
    },
  });
};

export const handleInfoToast = (message: string) => {
  return toast.info(message, {
    dismissible: true,
    duration: 3000,
    style: {
      background: "rgb(133 215 81)",
      color: "black",
    },
  });
};

export const handleFetchErrorToast = (message?: string) => {
  return toast.error(message ?? "Error fetching recipe", {
    dismissible: true,
    style: {
      backgroundColor: "red",
      color: "white",
    },
  });
};
