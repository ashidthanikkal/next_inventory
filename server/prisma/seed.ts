import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

async function deleteAllData(fileNames: string[]) {
  const modelNames = fileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(`Model ${modelName} not found.`);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  // 👇 deletion order: children → parents
  const deletionOrder = [
    "salesSummary.json",
    "sales.json",
    "purchaseSummary.json",
    "purchases.json",
    "expenseByCategory.json",
    "expenses.json",
    "expenseSummary.json",
    "users.json",
    "products.json", // parents last
  ];

  // 👇 insertion order: parents → children
  const insertionOrder = [
    "products.json",
    "users.json",
    "expenseSummary.json",
    "expenses.json",
    "expenseByCategory.json",
    "purchases.json",
    "purchaseSummary.json",
    "sales.json",
    "salesSummary.json",
  ];

  // Clear in child → parent order
  await deleteAllData(deletionOrder);

  // Insert in parent → child order
  for (const fileName of insertionOrder) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({ data });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
