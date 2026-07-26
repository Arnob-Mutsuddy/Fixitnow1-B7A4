import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Application = express();

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "FixItNow API is running",
  });
});

// Routes will be mounted here later
// app.use("/api", router);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    errorDetails: {
      path: req.originalUrl,
      method: req.method,
    },
  });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
    errorDetails: err,
  });
});

export default app;