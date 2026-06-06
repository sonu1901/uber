import { z } from "zod";

export const vehicleSchema = z.object({
  body: z.object({
    vehicleOwner: z
      .string()
      .regex(
        /^[0-9a-fA-F]{24}$/,
        "Invalid MongoDB ObjectId"
      ),

    drivingLicense: z
      .string()
      .trim()
      .min(5),

    vehicleType: z.enum([
      "bike",
      "car",
      "auto",
      "truck"
    ]),

    vehicleNumber: z
      .string()
      .trim()
      .min(4)
      .max(20),

    vehicleRc: z
      .string()
      .trim()
      .min(5),

    vehicleValidity: z
      .string()
      .datetime()
      .optional()
  }).strict()
});

export const objectId = z.string().regex(
  /^[0-9a-fA-F]{24}$/,
  "Invalid ObjectId"
);
