/*
  Warnings:

  - You are about to drop the column `SSN` on the `Review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "SSN";

-- DropEnum
DROP TYPE "LoanStatus";
