import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL as string;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding started...");

  const adminEmail = "admin@test.com";
  const adminPassword = "admin1234";

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await prisma.user.create({
      data: {
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log(`Admin created: ${adminEmail} / ${adminPassword}`);
  } else {
    console.log("Admin already exists");
  }

  const categories = [
    { name: "Plumbing", description: "Pipe repair, leak fixing" },
    { name: "Electrical", description: "Wiring, switches, appliance repair" },
    { name: "Cleaning", description: "Home and office cleaning services" },
    { name: "Painting", description: "Interior and exterior painting" },
  ];

  for (const category of categories) {
    const exists = await prisma.category.findUnique({
      where: { name: category.name },
    });

    if (!exists) {
      await prisma.category.create({ data: category });
      console.log(`Category created: ${category.name}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((er) => {
    console.error("Seeding failed:", er);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });