/*
  Warnings:

  - You are about to drop the column `accountType` on the `Bank` table. All the data in the column will be lost.
  - Added the required column `accountType` to the `BankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('SAVINGS', 'CURRENT');

-- AlterTable
ALTER TABLE "Bank" DROP COLUMN "accountType";

-- AlterTable
ALTER TABLE "BankAccount" ADD COLUMN     "accountType" "AccountType" NOT NULL;
