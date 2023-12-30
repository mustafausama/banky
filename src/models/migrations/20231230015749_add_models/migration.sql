/*
  Warnings:

  - You are about to drop the `Teller` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "Teller" DROP CONSTRAINT "Teller_swiftcode_fkey";

-- DropTable
DROP TABLE "Teller";

-- CreateTable
CREATE TABLE "Notification" (
    "notificationId" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "SSN" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notificationId")
);

-- CreateTable
CREATE TABLE "ATM" (
    "atmId" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "bankId" TEXT NOT NULL,

    CONSTRAINT "ATM_pkey" PRIMARY KEY ("atmId")
);

-- CreateTable
CREATE TABLE "Currency" (
    "currencyId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "exchange" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("currencyId")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewId" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "SSN" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewId")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_SSN_fkey" FOREIGN KEY ("SSN") REFERENCES "User"("SSN") ON DELETE RESTRICT ON UPDATE CASCADE;
