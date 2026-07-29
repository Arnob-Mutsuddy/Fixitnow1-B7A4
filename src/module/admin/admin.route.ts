import { Router } from "express";
import { adminController } from "./admin.controller.js";

import { auth } from "../../middleware/auth.js";
import { Role } from "../../../prisma/generated/prisma/enums.js";
import { categoryController } from "../category/category.controller.js";

const router = Router();

router.get("/users", auth(Role.ADMIN), adminController.getAllUsers);
router.patch("/users/:id", auth(Role.ADMIN), adminController.updateUserStatus);
router.get("/bookings", auth(Role.ADMIN), adminController.getAllBookings);

router.get("/categories", auth(Role.ADMIN), categoryController.getAllCategories);
router.post("/categories", auth(Role.ADMIN), categoryController.createCategory);

export const adminRoutes = router;