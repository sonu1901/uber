import { z } from 'zod'

export const registerUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .max(50),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Invalid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase and number"
      ),

    role: z
      .enum(["user", "captain"])
      .optional()
  }).strict()
});
