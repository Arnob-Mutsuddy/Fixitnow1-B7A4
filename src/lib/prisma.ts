import { PrismaPg } from "@prisma/adapter-pg";
import config from "../config";
import { PrismaClient } from "../../prisma/generated/prisma/client.js";


const connectionString = config.database_url as string;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };