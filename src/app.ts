import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./middleware/notFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { authRoutes } from "./module/auth/auth.route";
import { categoryRoutes } from "./module/category/category.route";
import { technicianRoutes } from "./module/technician/technician.route";
import { serviceRoutes } from "./module/service/service.route";

const app: Application = express();

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

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);


app.use("/api/technicians", technicianRoutes);
app.use("/api/services", serviceRoutes);
app.use(notFound);
app.use(globalErrorHandler);
// 404 handler
// app.use((req: Request, res: Response) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//     errorDetails: {
//       path: req.originalUrl,
//       method: req.method,
//     },
//   });
// });

// // Global error handler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   res.status(err.statusCode || 500).json({
//     success: false,
//     message: err.message || "Something went wrong",
//     errorDetails: err,
//   });
// });

export default app;