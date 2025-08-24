/*
  Warnings:

  - You are about to drop the column `totaValue` on the `SalesSummary` table. All the data in the column will be lost.
  - Added the required column `totalValue` to the `SalesSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."SalesSummary" DROP COLUMN "totaValue",
ADD COLUMN     "totalValue" DOUBLE PRECISION NOT NULL;
