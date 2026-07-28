import { Router } from "express";
import { serviceController } from "./service.controller.js";
import { Role } from "../../../prisma/generated/prisma/enums.js";
import { auth } from "../../middleware/auth.js";


const router = Router();

router.post("/", auth(Role.TECHNICIAN), serviceController.createService);
router.patch("/:id", auth(Role.TECHNICIAN), serviceController.updateService);
router.delete("/:id", auth(Role.TECHNICIAN), serviceController.deleteService);
router.get("/", serviceController.getAllServices);
router.get("/:id", serviceController.getServiceById);

export const serviceRoutes = router;