import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required")
});

export const signUpSchema = z.object({
    name: z.string().trim().min(3, "Minimum 3 characters required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum 8 characters Required")
});