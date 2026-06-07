import { ZodError } from "zod";

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      req.validated = parsed; // <-- Add this

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('Validation Error : ',error.issues);
        return res.status(400).json({
          success: false,
          message: "Validation Failed",
          errors: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      next(error);
    }
  };
};