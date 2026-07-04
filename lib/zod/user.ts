import { z } from "zod";

export const UserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email must be a valid email address" }),
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(80, { message: "Name must be at most 80 characters" }),
});

export type User = z.infer<typeof UserSchema>;

