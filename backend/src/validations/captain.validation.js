import { z } from "zod";

export const captainRegisterSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .trim()
      .email("Invalid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    driving_license: z
      .string()
      .trim()
      .min(5, "Driving license is required"),

    vehicleType: z.enum([
      "bike",
      "car",
      "auto",
      "truck"
    ]),

    vehicleNumber: z
      .string()
      .trim()
      .min(4, "Vehicle number is required"),

    vehicleRc: z
      .string()
      .trim()
      .min(5, "Vehicle RC is required"),

    vehicleValidity: z
      .string()
      .datetime("Invalid vehicle validity date")
  }).strict()
});
