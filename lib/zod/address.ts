import { z } from "zod";

export const AddressSchema = z.object({
  street: z
    .string()
    .min(2, { message: "Street must be at least 2 characters" })
    .max(120, { message: "Street must be at most 120 characters" }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters" })
    .max(80, { message: "City must be at most 80 characters" }),
  zip: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "ZIP must be 5 digits (or ZIP+4)" }),
});

export type Address = z.infer<typeof AddressSchema>;

