import { Router } from "express";
import { paymentController } from "./payment.controller.js";

import { auth } from "../../middleware/auth.js";
import { Role } from "../../../prisma/generated/prisma/enums.js";

const router = Router();

router.post("/create", auth(Role.CUSTOMER), paymentController.createPaymentSession);
router.get("/", auth(Role.CUSTOMER, Role.TECHNICIAN, Role.ADMIN), paymentController.getMyPayments);
router.get("/:id", auth(Role.CUSTOMER, Role.TECHNICIAN, Role.ADMIN), paymentController.getPaymentById);

export const paymentRoutes = router;