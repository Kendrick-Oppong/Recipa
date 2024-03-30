import { z } from "zod";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters long" })
      .max(50, { message: "Username cannot exceed 50 characters" }),
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
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], // path of error
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

export const contactUsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  subject: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" })
    .max(50, { message: "Title cannot exceed 50 characters" }),
  message: z
    .string()
    .min(5, { message: "Your message must be at least 5 characters long" })
    .max(200, { message: "Message cannot exceed 200 characters" }),
});

export const settingsSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(50, { message: "Username cannot exceed 50 characters" }),
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(50, { message: "Phone number cannot exceed 50 characters" }),
  address: z
    .string()
    .min(5, { message: "Your address must be at least 5 characters long" })
    .max(200, { message: "Address cannot exceed 200 characters" }),
 
});

export const checkOutSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email format" })
    .min(1, { message: "Email is required" }),
  phone_number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(50, { message: "Phone number cannot exceed 50 characters" }),
  town: z
    .string()
    .min(2, { message: "City must be at least 10 characters long" })
    .max(50, { message: "City cannot exceed 50 characters" }),
  city: z
    .string()
    .min(2, { message: "City must be at least 10 characters long" })
    .max(50, { message: "City cannot exceed 50 characters" }),
  address: z
    .string()
    .min(5, { message: "Your address must be at least 5 characters long" })
    .max(200, { message: "Address cannot exceed 200 characters" }),
});
