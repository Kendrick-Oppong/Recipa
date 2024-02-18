import { z } from "zod";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "username must be at least 2 characters long" })
    .max(50, { message: "username cannot exceed 50 characters" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .regex(strongPasswordRegex, {
      message:
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    })
    .min(6, { message: "Password is required" }),
  confirm_password: z
    .string()
    .regex(strongPasswordRegex, {
      message:
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    })
    .min(6, { message: "Password is required" }),
});

export const signInSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .regex(strongPasswordRegex, {
      message:
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    })
    .min(6, { message: "Password must be at least 6 characters long" }),
});
