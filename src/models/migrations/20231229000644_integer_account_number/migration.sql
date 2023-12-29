/*
  Warnings:

  - The primary key for the `BankAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `accountNumber` column on the `BankAccount` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `accountNumber` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `accountNumber` on the `Loan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `senderAccountNumber` on the `Transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recipientAccountNumber` on the `Transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_accountNumber_fkey";

-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_accountNumber_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_recipientAccountNumber_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_senderAccountNumber_fkey";

-- AlterTable
ALTER TABLE "BankAccount" DROP CONSTRAINT "BankAccount_pkey",
DROP COLUMN "accountNumber",
ADD COLUMN     "accountNumber" SERIAL NOT NULL,
ADD CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("accountNumber");

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "accountNumber",
ADD COLUMN     "accountNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "accountNumber",
ADD COLUMN     "accountNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "senderAccountNumber",
ADD COLUMN     "senderAccountNumber" INTEGER NOT NULL,
DROP COLUMN "recipientAccountNumber",
ADD COLUMN     "recipientAccountNumber" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_accountNumber_fkey" FOREIGN KEY ("accountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_accountNumber_fkey" FOREIGN KEY ("accountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_senderAccountNumber_fkey" FOREIGN KEY ("senderAccountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_recipientAccountNumber_fkey" FOREIGN KEY ("recipientAccountNumber") REFERENCES "BankAccount"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
